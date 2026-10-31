const fs = require('fs');
const path = require('path');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const localFilePath = path.join(process.cwd(), 'data', 'site-data.json');
    if (fs.existsSync(localFilePath)) {
      const content = fs.readFileSync(localFilePath, 'utf8');
      return res.status(200).json(JSON.parse(content));
    }

    return res.status(404).json({ error: 'Không tìm thấy dữ liệu' });
  } catch (err) {
    return res.status(500).json({ error: 'Lỗi đọc dữ liệu' });
  }
};
