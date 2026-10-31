const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Phương thức không được hỗ trợ' });
  }

  try {
    const { user, pass, data } = req.body || {};

    // Validate credentials
    const validUser = process.env.ADMIN_USER || 'admin';
    const validPass = process.env.ADMIN_PASS || 'nguyenvu2026';

    if (user !== validUser || pass !== validPass) {
      return res.status(401).json({ error: 'Tài khoản hoặc mật khẩu không chính xác' });
    }

    if (!data) {
      return res.status(400).json({ error: 'Không có dữ liệu để lưu' });
    }

    const jsonString = JSON.stringify(data, null, 2);
    let localSaved = false;
    let gitSaved = false;
    let deployTriggered = false;

    // 1. Try writing locally if running on local dev server
    try {
      const localFilePath = path.join(process.cwd(), 'data', 'site-data.json');
      fs.writeFileSync(localFilePath, jsonString, 'utf8');
      localSaved = true;
    } catch (e) {
      // On Vercel serverless, filesystem is read-only outside /tmp
    }

    // 2. Commit to GitHub if GITHUB_TOKEN & GITHUB_REPO are configured
    const githubToken = process.env.GITHUB_TOKEN;
    const githubRepo = process.env.GITHUB_REPO; // e.g. "username/thachcao"
    const githubBranch = process.env.GITHUB_BRANCH || 'main';

    if (githubToken && githubRepo) {
      try {
        const filePath = 'data/site-data.json';
        const getUrl = `https://api.github.com/repos/${githubRepo}/contents/${filePath}?ref=${githubBranch}`;
        
        let sha = null;
        const getRes = await fetch(getUrl, {
          headers: {
            'Authorization': `Bearer ${githubToken}`,
            'User-Agent': 'Vercel-Admin-CMS',
            'Accept': 'application/vnd.github.v3+json'
          }
        });

        if (getRes.ok) {
          const fileData = await getRes.json();
          sha = fileData.sha;
        }

        const putUrl = `https://api.github.com/repos/${githubRepo}/contents/${filePath}`;
        const putRes = await fetch(putUrl, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${githubToken}`,
            'User-Agent': 'Vercel-Admin-CMS',
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: `Update site-data.json via /admin [skip ci]`,
            content: Buffer.from(jsonString).toString('base64'),
            branch: githubBranch,
            sha: sha || undefined
          })
        });

        if (putRes.ok) {
          gitSaved = true;
        }
      } catch (err) {
        console.error('Lỗi khi đẩy lên GitHub:', err);
      }
    }

    // 3. Trigger Vercel Deploy Hook if configured
    const deployHook = process.env.VERCEL_DEPLOY_HOOK;
    if (deployHook) {
      try {
        await fetch(deployHook, { method: 'POST' });
        deployTriggered = true;
      } catch (err) {
        console.error('Lỗi khi gọi Deploy Hook:', err);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Lưu dữ liệu thành công!',
      localSaved,
      gitSaved,
      deployTriggered,
      needGitHubSetup: !gitSaved && !localSaved && !deployTriggered
    });

  } catch (error) {
    console.error('Save API Error:', error);
    return res.status(500).json({ error: error.message || 'Lỗi xử lý máy chủ' });
  }
};
