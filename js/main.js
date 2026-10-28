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
        navTrigger.addEventListener('click', function () {
            if (navMobile.style.display === 'block') {
                navMobile.style.display = 'none';
            } else {
                navMobile.style.display = 'block';
            }
        });

        const mobileSubTriggers = navMobile.querySelectorAll('.has-submenu > a');
        mobileSubTriggers.forEach(function (trigger) {
            trigger.addEventListener('click', function (e) {
                e.preventDefault();
                const sub = this.nextElementSibling;
                if (sub) {
                    sub.classList.toggle('open');
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
    // 5. SEARCH FORM
    // -------------------------------------------------------------
    const searchForm = document.getElementById('search');
    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            const q = document.getElementById('input-field').value.trim();
            if (!q || q.toLowerCase() === 'search') {
                e.preventDefault();
                document.getElementById('input-field').focus();
            }
        });
    }

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

