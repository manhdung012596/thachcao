/**
 * THẠCH CAO APOLLO - APOLLO LUMA ACTUAL VALUE
 * Interactive Scripts: Slider, Mobile Nav, Tabs, FAB, Search
 */

document.addEventListener('DOMContentLoaded', function () {
    // -------------------------------------------------------------
    // 1. HERO SLIDER CAROUSEL
    // -------------------------------------------------------------
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        const slides = sliderContainer.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.camera_pag_ul li');
        const prevBtn = document.querySelector('.camera_prev');
        const nextBtn = document.querySelector('.camera_next');
        const pauseBtn = document.querySelector('.camera_pause');
        let currentSlide = 0;
        let slideInterval = null;
        let isPlaying = true;

        function goToSlide(n) {
            slides[currentSlide].classList.remove('active');
            if (dots[currentSlide]) dots[currentSlide].classList.remove('cameracurrent');

            currentSlide = (n + slides.length) % slides.length;

            slides[currentSlide].classList.add('active');
            if (dots[currentSlide]) dots[currentSlide].classList.add('cameracurrent');
        }

        function nextSlide() {
            goToSlide(currentSlide + 1);
        }

        function prevSlide() {
            goToSlide(currentSlide - 1);
        }

        function startAutoplay() {
            if (slideInterval) clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 5000);
            isPlaying = true;
            if (pauseBtn) pauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
        }

        function stopAutoplay() {
            if (slideInterval) clearInterval(slideInterval);
            slideInterval = null;
            isPlaying = false;
            if (pauseBtn) pauseBtn.innerHTML = '<i class="fa fa-play"></i>';
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function () {
                nextSlide();
                if (isPlaying) startAutoplay();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', function () {
                prevSlide();
                if (isPlaying) startAutoplay();
            });
        }

        if (pauseBtn) {
            pauseBtn.addEventListener('click', function () {
                if (isPlaying) {
                    stopAutoplay();
                } else {
                    startAutoplay();
                }
            });
        }

        dots.forEach((dot, idx) => {
            dot.addEventListener('click', function () {
                goToSlide(idx);
                if (isPlaying) startAutoplay();
            });
        });

        // Touch Swipe Support
        let touchStartX = 0;
        let touchEndX = 0;

        sliderContainer.addEventListener('touchstart', function (e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        sliderContainer.addEventListener('touchend', function (e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            if (touchEndX < touchStartX - 40) {
                nextSlide();
                if (isPlaying) startAutoplay();
            }
            if (touchEndX > touchStartX + 40) {
                prevSlide();
                if (isPlaying) startAutoplay();
            }
        }

        // Start slider
        startAutoplay();
    }

    // -------------------------------------------------------------
    // 2. MOBILE NAVIGATION HAMBURGER & SUB-MENUS
    // -------------------------------------------------------------
    const navTrigger = document.getElementById('nav-trigger');
    const navMobile = document.getElementById('nav-mobile');

    if (navTrigger && navMobile) {
        navTrigger.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            const isActive = navMobile.classList.toggle('active');
            navTrigger.classList.toggle('active', isActive);

            const icon = navTrigger.querySelector('i');
            if (icon) {
                if (isActive) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Close mobile nav when clicking outside
        document.addEventListener('click', function (e) {
            if (navMobile.classList.contains('active')) {
                if (!navMobile.contains(e.target) && !navTrigger.contains(e.target)) {
                    navMobile.classList.remove('active');
                    navTrigger.classList.remove('active');
                    const icon = navTrigger.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                }
            }
        });

        // Mobile submenu click
        const mobileSubTriggers = navMobile.querySelectorAll('.has-submenu > a');
        mobileSubTriggers.forEach(function (trigger) {
            trigger.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                const parentLi = this.parentElement;
                const sub = parentLi.querySelector('.sub-menu, .children');
                if (sub) {
                    const wasOpen = sub.classList.contains('open');

                    // Close sibling submenus
                    navMobile.querySelectorAll('.sub-menu.open, .children.open').forEach(s => {
                        if (s !== sub) {
                            s.classList.remove('open');
                            if (s.parentElement) s.parentElement.classList.remove('open');
                        }
                    });

                    sub.classList.toggle('open', !wasOpen);
                    parentLi.classList.toggle('open', !wasOpen);
                }
            });
        });
    }

    // -------------------------------------------------------------
    // 3. SIDEBAR TABS WIDGET
    // -------------------------------------------------------------
    const tabBtns = document.querySelectorAll('.sidebar-tab-btn');
    const tabPanes = document.querySelectorAll('.sidebar-tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const target = this.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            this.classList.add('active');
            const activePane = document.getElementById(target);
            if (activePane) {
                activePane.classList.add('active');
            }
        });
    });

    // -------------------------------------------------------------
    // 4. FLOATING BACK TO TOP BUTTON
    // -------------------------------------------------------------
    const scrollTopBtn = document.querySelector('.fab-scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = 'flex';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });

        scrollTopBtn.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // -------------------------------------------------------------
    // 5. SEARCH DATABASE & INSTANT LIVE SEARCH
    // -------------------------------------------------------------
    function removeVietnameseTones(str) {
        if (!str) return '';
        return str
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'd')
            .trim();
    }

    const SEARCH_DATABASE = [
        // DỰ ÁN
        {
            title: "Công trình thi công trần thạch cao sang trọng tại Hải Dương",
            desc: "Biệt thự 3 tầng TP Hải Dương, khung Vĩnh Tường, tấm Gyproc 9mm chịu ẩm, đèn led ray",
            category: "Dự án",
            badgeClass: "badge-duan",
            url: "du-an-hoan-thanh.html?q=Hải Dương"
        },
        {
            title: "Thi công trần thạch cao giật cấp tại Phủ Lý Hà Nam",
            desc: "250m2 trần giật cấp 2 lớp kết hợp phào nẹp thạch cao sắc nét, sơn phủ Dulux 5in1",
            category: "Dự án",
            badgeClass: "badge-duan",
            url: "du-an-hoan-thanh.html?q=Phủ Lý"
        },
        {
            title: "Thi công hoàn thiện trần thạch cao The Zurich – Vinhomes Ocean Park",
            desc: "Trần thạch cao phẳng kết hợp điều hòa âm trần nối ống gió hiện đại",
            category: "Dự án",
            badgeClass: "badge-duan",
            url: "du-an-hoan-thanh.html?q=Zurich"
        },
        {
            title: "Thi công nội thất & trần thạch cao căn hộ SF1 Sky Forest Ecopark",
            desc: "Giải pháp trần thạch cao gián tiếp và vách tiêu âm cao cấp cho căn hộ",
            category: "Dự án",
            badgeClass: "badge-duan",
            url: "du-an-hoan-thanh.html?q=Ecopark"
        },
        // BÁO GIÁ
        {
            title: "Báo giá thi công trần thạch cao chìm (Phẳng / Giật cấp)",
            desc: "Trọn gói từ 135.000đ - 165.000đ/m2, tấm Gyproc / Yoshino, khung Vĩnh Tường bảo hành 10 năm",
            category: "Báo giá",
            badgeClass: "badge-baogia",
            url: "bao-gia-tran-thach-cao.html"
        },
        {
            title: "Báo giá trần thạch cao nổi (Trần thả 60x60)",
            desc: "Khung nổi TopLINE Plus, tấm phủ PVC chịu ẩm chống nước, giá từ 130.000đ/m2",
            category: "Báo giá",
            badgeClass: "badge-baogia",
            url: "bao-gia-tran-thach-cao.html"
        },
        {
            title: "Báo giá thi công vách thạch cao ngăn phòng (1 mặt & 2 mặt)",
            desc: "Vách ngăn văn phòng, nhà xưởng, tiêu âm chống ồn giá tốt từ 180.000đ/m2",
            category: "Báo giá",
            badgeClass: "badge-baogia",
            url: "bao-gia-vach-thach-cao.html"
        },
        {
            title: "Báo giá sơn bả hoàn thiện Dulux / Maxilite",
            desc: "Thi công bột trét 2 lớp, 1 lớp lót, 2 lớp phủ sơn Dulux EasyClean / 5in1 chính hãng",
            category: "Báo giá",
            badgeClass: "badge-baogia",
            url: "bao-gia-son.html"
        },
        // MẪU THIẾT KẾ
        {
            title: "Mẫu trần thạch cao đẹp phòng khách, phòng ngủ hiện đại",
            desc: "100+ mẫu trần giật cấp hiện đại, trần phẳng sang trọng, xu hướng trần đèn led âm trần",
            category: "Mẫu trần",
            badgeClass: "badge-mau",
            url: "mau-tran-thach-cao.html"
        },
        {
            title: "Mẫu vách ngăn thạch cao trang trí phòng khách & phòng ngủ",
            desc: "Mẫu vách thạch cao cách âm, kệ tivi thạch cao, vách ngăn phòng ngủ đẹp",
            category: "Mẫu vách",
            badgeClass: "badge-mau",
            url: "mau-vach-thach-cao.html"
        },
        {
            title: "Mẫu phào chỉ thạch cao tân cổ điển và cổ điển",
            desc: "Phào nẹp trần, hoa văn góc trần, mâm trần thạch cao hoa văn sắc sảo tinh tế",
            category: "Phào chỉ",
            badgeClass: "badge-mau",
            url: "mau-phao-chi-thach-cao.html"
        },
        // VẬT TƯ & PHỤ KIỆN
        {
            title: "Khung xương Vĩnh Tường chính hãng (Basi, Tika, Alpha, E-Wall)",
            desc: "Đại lý phân phối sỉ lẻ khung trần chìm, trần nổi, vách ngăn Vĩnh Tường chiết khấu cao TPHCM",
            category: "Vật tư",
            badgeClass: "badge-vattu",
            url: "vat-tu-phu-kien.html?cat=khung"
        },
        {
            title: "Tấm thạch cao Gyproc Thái Lan tiêu chuẩn & chịu ẩm",
            desc: "Tấm Gyproc 9mm, 12.7mm, tấm chống ẩm xanh lá, tấm chống cháy chính hãng Saint-Gobain",
            category: "Vật tư",
            badgeClass: "badge-vattu",
            url: "vat-tu-phu-kien.html?cat=tam"
        },
        {
            title: "Tấm thạch cao Zeit Hàn Quốc (Yoshino, KNAUF)",
            desc: "Tấm thạch cao chất lượng cao chống võng, bền đẹp cho mọi công trình",
            category: "Vật tư",
            badgeClass: "badge-vattu",
            url: "vat-tu-phu-kien.html?cat=tam"
        },
        {
            title: "Phụ kiện thạch cao: Ti ren, Ty treo, Nở đạn, Vít thạch cao, Bột bả",
            desc: "Đầy đủ vật tư phụ ngành thạch cao chất lượng cao, giao nhanh tận nơi",
            category: "Vật tư",
            badgeClass: "badge-vattu",
            url: "vat-tu-phu-kien.html?cat=phukien"
        },
        // GIỚI THIỆU & LIÊN HỆ
        {
            title: "Giới thiệu về Thạch Cao Nguyên Vũ",
            desc: "Đơn vị hơn 10 năm uy tín chuyên thiết kế, thi công trần vách thạch cao tại TPHCM",
            category: "Giới thiệu",
            badgeClass: "badge-duan",
            url: "gioi-thieu.html"
        },
        {
            title: "Liên hệ Hotline & Địa chỉ Thạch Cao Nguyên Vũ",
            desc: "266 Bình Long, Tân Phú, TPHCM - Hotline 24/7: 0903 839 305 / 0928 577 779",
            category: "Liên hệ",
            badgeClass: "badge-duan",
            url: "lien-he.html"
        }
    ];

    // Setup Search Bar & Live Dropdown
    const searchForm = document.getElementById('search');
    const searchInput = document.getElementById('input-field');
    const searchContainer = document.querySelector('.search-container');

    if (searchContainer && searchInput) {
        // Create dropdown container
        const dropdown = document.createElement('div');
        dropdown.className = 'search-results-dropdown';
        searchContainer.appendChild(dropdown);

        function renderResults(query) {
            const cleanQuery = removeVietnameseTones(query);
            if (!cleanQuery) {
                dropdown.classList.remove('show');
                dropdown.innerHTML = '';
                return;
            }

            const tokens = cleanQuery.split(/\s+/).filter(Boolean);
            const matches = SEARCH_DATABASE.filter(item => {
                const targetText = removeVietnameseTones(item.title + ' ' + item.desc + ' ' + item.category);
                return tokens.every(tok => targetText.includes(tok));
            });

            if (matches.length === 0) {
                dropdown.innerHTML = `
                    <div class="search-no-results">
                        <i class="fa fa-search" style="font-size: 20px; color: #ccc; margin-bottom: 6px; display: block;"></i>
                        Không tìm thấy kết quả phù hợp cho "<strong>${escapeHtml(query)}</strong>".<br>
                        <span style="font-size: 11.5px; color: #999;">Nhấn Enter hoặc nút kính lúp để tìm kiếm.</span>
                    </div>
                `;
            } else {
                const listHtml = matches.slice(0, 5).map(item => `
                    <li class="search-result-item">
                        <a href="${item.url}">
                            <span class="search-result-badge ${item.badgeClass}">${item.category}</span>
                            <span class="search-result-title">${highlightMatch(item.title, query)}</span>
                            <span class="search-result-desc">${escapeHtml(item.desc)}</span>
                        </a>
                    </li>
                `).join('');

                dropdown.innerHTML = `
                    <ul class="search-results-list">
                        ${listHtml}
                    </ul>
                `;
            }

            dropdown.classList.add('show');
        }

        function highlightMatch(text, query) {
            if (!query) return escapeHtml(text);
            const cleanQuery = removeVietnameseTones(query);
            const cleanText = removeVietnameseTones(text);
            const idx = cleanText.indexOf(cleanQuery);
            if (idx === -1) return escapeHtml(text);
            const before = text.substring(0, idx);
            const match = text.substring(idx, idx + query.length);
            const after = text.substring(idx + query.length);
            return `${escapeHtml(before)}<mark>${escapeHtml(match)}</mark>${escapeHtml(after)}`;
        }

        function escapeHtml(str) {
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;');
        }

        searchInput.addEventListener('input', function () {
            renderResults(this.value.trim());
        });

        searchInput.addEventListener('focus', function () {
            if (this.value.trim()) {
                renderResults(this.value.trim());
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function (e) {
            if (!searchContainer.contains(e.target)) {
                dropdown.classList.remove('show');
            }
        });

        // Close dropdown on Escape
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                dropdown.classList.remove('show');
            }
        });
    }

    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            const q = searchInput ? searchInput.value.trim() : '';
            if (!q || q.toLowerCase() === 'search') {
                e.preventDefault();
                if (searchInput) searchInput.focus();
                return;
            }
            // If already on du-an-hoan-thanh.html, prevent reload and filter live!
            const isProjectPage = window.location.pathname.endsWith('du-an-hoan-thanh.html');
            if (isProjectPage) {
                e.preventDefault();
                history.pushState(null, '', `du-an-hoan-thanh.html?q=${encodeURIComponent(q)}`);
                filterProjectCards(q);
                const dd = document.querySelector('.search-results-dropdown');
                if (dd) dd.classList.remove('show');
            }
        });
    }

    // -------------------------------------------------------------
    // 5.1. DYNAMIC SEARCH FILTER ON DU-AN-HOAN-THANH.HTML
    // -------------------------------------------------------------
    function filterProjectCards(query) {
        const postsContainer = document.querySelector('.blog-posts');
        if (!postsContainer) return;

        const postCards = postsContainer.querySelectorAll('.post-card');
        const cleanQuery = removeVietnameseTones(query);

        // Remove old banner
        const oldBanner = document.querySelector('.search-feedback-banner');
        if (oldBanner) oldBanner.remove();

        const oldSuggestions = document.querySelector('.search-extra-suggestions');
        if (oldSuggestions) oldSuggestions.remove();

        if (!cleanQuery) {
            postCards.forEach(c => c.style.display = 'block');
            return;
        }

        const tokens = cleanQuery.split(/\s+/).filter(Boolean);
        let matchCount = 0;

        postCards.forEach(card => {
            const title = card.querySelector('.post-title') ? card.querySelector('.post-title').textContent : '';
            const meta = card.querySelector('.post-meta') ? card.querySelector('.post-meta').textContent : '';
            const excerpt = card.querySelector('.post-excerpt') ? card.querySelector('.post-excerpt').textContent : '';
            const cardText = removeVietnameseTones(title + ' ' + meta + ' ' + excerpt);

            const isMatch = tokens.every(tok => cardText.includes(tok));
            if (isMatch) {
                card.style.display = 'block';
                matchCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Insert feedback banner
        const banner = document.createElement('div');
        banner.className = 'search-feedback-banner';

        if (matchCount > 0) {
            banner.innerHTML = `
                <span><i class="fa fa-search" style="color: #ecc731; margin-right: 6px;"></i> Kết quả tìm kiếm cho: "<strong>${escapeBanner(query)}</strong>" (Tìm thấy ${matchCount} công trình)</span>
                <a href="du-an-hoan-thanh.html" class="btn-clear-search"><i class="fa fa-times"></i> Xem tất cả công trình</a>
            `;
        } else {
            banner.innerHTML = `
                <span><i class="fa fa-info-circle" style="color: #e62117; margin-right: 6px;"></i> Không tìm thấy công trình nào cho từ khóa "<strong>${escapeBanner(query)}</strong>".</span>
                <a href="du-an-hoan-thanh.html" class="btn-clear-search"><i class="fa fa-times"></i> Xem tất cả công trình</a>
            `;

            // Check if matches exist in other categories (Báo giá, Vật tư, Mẫu thạch cao)
            const extraMatches = SEARCH_DATABASE.filter(item => {
                const targetText = removeVietnameseTones(item.title + ' ' + item.desc + ' ' + item.category);
                return tokens.every(tok => targetText.includes(tok));
            });

            if (extraMatches.length > 0) {
                const suggDiv = document.createElement('div');
                suggDiv.className = 'search-extra-suggestions';
                suggDiv.style.cssText = 'background: #fdfdfd; border: 1px dashed #dcdcdc; border-radius: 6px; padding: 20px; margin-bottom: 25px;';
                suggDiv.innerHTML = `
                    <h4 style="font-size: 15px; margin-bottom: 12px; color: #333;"><i class="fa fa-lightbulb" style="color: #ecc731;"></i> Có thể Quý khách đang tìm dịch vụ hoặc sản phẩm sau:</h4>
                    <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px;">
                        ${extraMatches.map(item => `
                            <li style="border-bottom: 1px solid #eee; padding-bottom: 8px;">
                                <a href="${item.url}" style="font-weight: 700; color: #111; font-size: 14px; display: block; margin-bottom: 4px;">
                                    <span class="search-result-badge ${item.badgeClass}">${item.category}</span> ${item.title} &raquo;
                                </a>
                                <div style="font-size: 12.5px; color: #666;">${item.desc}</div>
                            </li>
                        `).join('')}
                    </ul>
                `;
                postsContainer.parentNode.insertBefore(suggDiv, postsContainer);
            }
        }

        postsContainer.parentNode.insertBefore(banner, postsContainer);
    }

    function escapeBanner(str) {
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    // Check URL param on page load
    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get('q');
    if (initialQuery) {
        if (searchInput) searchInput.value = initialQuery;
        filterProjectCards(initialQuery);
    }

    // -------------------------------------------------------------
    // 5.2. LOAD DYNAMIC PROJECTS & SETTINGS FROM SITE-DATA.JSON
    // -------------------------------------------------------------
    fetch('data/site-data.json?v=' + Date.now())
        .then(res => res.json())
        .then(data => {
            if (data && data.projects && data.projects.length > 0) {
                // Update SEARCH_DATABASE with live projects
                data.projects.forEach(p => {
                    const exists = SEARCH_DATABASE.find(item => item.title === p.title);
                    if (!exists) {
                        SEARCH_DATABASE.unshift({
                            title: p.title,
                            desc: p.excerpt || p.location,
                            category: "Dự án",
                            badgeClass: "badge-duan",
                            url: "du-an-hoan-thanh.html?q=" + encodeURIComponent(p.title)
                        });
                    }
                });

                // If on du-an-hoan-thanh.html, render dynamic projects!
                const postsContainer = document.querySelector('.blog-posts');
                if (postsContainer) {
                    postsContainer.innerHTML = data.projects.map(p => `
                        <article class="post-card">
                            <div class="post-card-thumb">
                                <a href="chi-tiet-bai-viet.html"><img src="${p.image || 'images/thi-cong-tran-thach-cao-hai-duong-3.jpg'}" alt="${p.title}" onerror="this.src='images/thi-cong-tran-thach-cao-hai-duong-3.jpg'"></a>
                            </div>
                            <h2 class="post-title"><a href="chi-tiet-bai-viet.html">${p.title}</a></h2>
                            <div class="post-meta"><i class="fa fa-clock"></i> <span class="meta_date">${p.location || 'Công trình hoàn thiện'}</span></div>
                            <p class="post-excerpt">${p.excerpt || ''}</p>
                            <a href="chi-tiet-bai-viet.html" class="post-readmore">Xem chi tiết công trình &raquo;</a>
                        </article>
                    `).join('');

                    // Re-apply filter if initialQuery is set
                    if (initialQuery) {
                        filterProjectCards(initialQuery);
                    }
                }
            }
        })
        .catch(() => {
            // Silently fallback to static HTML
        });

    // -------------------------------------------------------------
    // 6. CONTACT FORM SUBMISSION
    // -------------------------------------------------------------
    const contactForm = document.getElementById('lead-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const name = document.getElementById('contact-name').value;
            const phone = document.getElementById('contact-phone').value;
            const note = document.getElementById('contact-note').value;

            if (!phone) {
                alert('Vui lòng nhập số điện thoại để chúng tôi liên hệ tư vấn!');
                return;
            }

            // Success feedback
            alert(`Cảm ơn Quý khách ${name || ''}! Yêu cầu tư vấn và báo giá trần thạch cao đã được gửi thành công. Đội ngũ kỹ thuật Thạch Cao Nguyên Vũ sẽ liên hệ lại qua số ${phone} trong ít phút!`);
            contactForm.reset();
        });
    }

    // -------------------------------------------------------------
    // 7. ACTIVE MENU HIGHLIGHT
    // -------------------------------------------------------------
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const menuLinks = document.querySelectorAll('.menu-secondary a');
    menuLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && (href === currentPath || (currentPath === '' && href === 'index.html') || (href === '/' && (currentPath === 'index.html' || currentPath === '')))) {
            link.parentElement.classList.add('active');
        }
    });

    // -------------------------------------------------------------
    // 8. PRODUCT CAROUSEL SLIDER (4 ITEMS PER VIEW, 19 ITEMS TOTAL)
    // -------------------------------------------------------------
    const prodTrack = document.getElementById('prodCarouselTrack');
    const prodPrevBtn = document.getElementById('prodCarouselPrev');
    const prodNextBtn = document.getElementById('prodCarouselNext');
    const prodDotsContainer = document.getElementById('prodCarouselDots');

    if (prodTrack && prodPrevBtn && prodNextBtn) {
        const items = prodTrack.querySelectorAll('.product-carousel-item');
        const totalItems = items.length;
        let currentIndex = 0;

        function getVisibleCount() {
            if (window.innerWidth <= 480) return 1;
            if (window.innerWidth <= 992) return 2;
            return 4;
        }

        function getMaxIndex() {
            return Math.max(0, totalItems - getVisibleCount());
        }

        function updateDots() {
            if (!prodDotsContainer) return;
            const visibleCount = getVisibleCount();
            const totalPages = Math.ceil(totalItems / visibleCount);
            const currentPage = Math.min(Math.floor(currentIndex / visibleCount), totalPages - 1);

            prodDotsContainer.innerHTML = '';
            for (let i = 0; i < totalPages; i++) {
                const dot = document.createElement('li');
                if (i === currentPage) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    currentIndex = Math.min(i * visibleCount, getMaxIndex());
                    renderSlide();
                });
                prodDotsContainer.appendChild(dot);
            }
        }

        function renderSlide() {
            const visibleCount = getVisibleCount();
            const maxIdx = getMaxIndex();
            if (currentIndex > maxIdx) currentIndex = maxIdx;
            if (currentIndex < 0) currentIndex = 0;

            const itemWidth = items[0] ? items[0].getBoundingClientRect().width : 0;
            const gap = 20; // 20px gap
            const offset = currentIndex * (itemWidth + gap);

            prodTrack.style.transform = `translateX(-${offset}px)`;

            // Update arrow states
            if (currentIndex <= 0) {
                prodPrevBtn.classList.add('disabled');
            } else {
                prodPrevBtn.classList.remove('disabled');
            }

            if (currentIndex >= maxIdx) {
                prodNextBtn.classList.add('disabled');
            } else {
                prodNextBtn.classList.remove('disabled');
            }

            updateDots();
        }

        prodNextBtn.addEventListener('click', function () {
            const step = getVisibleCount();
            const maxIdx = getMaxIndex();
            if (currentIndex < maxIdx) {
                currentIndex = Math.min(currentIndex + step, maxIdx);
            } else {
                currentIndex = 0; // Loop back
            }
            renderSlide();
        });

        prodPrevBtn.addEventListener('click', function () {
            const step = getVisibleCount();
            const maxIdx = getMaxIndex();
            if (currentIndex > 0) {
                currentIndex = Math.max(currentIndex - step, 0);
            } else {
                currentIndex = maxIdx; // Loop to end
            }
            renderSlide();
        });

        // Touch Swipe on mobile
        let pTouchStartX = 0;
        let pTouchEndX = 0;

        prodTrack.addEventListener('touchstart', function (e) {
            pTouchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        prodTrack.addEventListener('touchend', function (e) {
            pTouchEndX = e.changedTouches[0].screenX;
            if (pTouchEndX < pTouchStartX - 40) {
                // Swipe Left -> Next
                const maxIdx = getMaxIndex();
                currentIndex = Math.min(currentIndex + 1, maxIdx);
                renderSlide();
            } else if (pTouchEndX > pTouchStartX + 40) {
                // Swipe Right -> Prev
                currentIndex = Math.max(currentIndex - 1, 0);
                renderSlide();
            }
        }, { passive: true });

        window.addEventListener('resize', renderSlide);

        // Initial setup
        renderSlide();
    }
});

