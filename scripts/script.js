// ============================================================
// BHARATH RAJ B — Advanced Portfolio Script v2.0
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    // =========================================================





    // 7. NUMERIC COUNTER ANIMATION
    // =========================================================
    function animateCounterEl(el, targetText, delay = 0) {
        const numMatch = targetText.match(/\d+/);
        if (!numMatch) {
            el.textContent = targetText;
            return;
        }
        
        const targetNum = parseInt(numMatch[0], 10);
        const prefix = targetText.substring(0, numMatch.index);
        const suffix = targetText.substring(numMatch.index + numMatch[0].length);
        
        const duration = 1000; // exactly 1 second
        
        el.textContent = prefix + '0' + suffix;
        
        setTimeout(() => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                
                // easeOutExpo easing for a smooth finish
                const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                const currentNum = Math.floor(targetNum * easeOut);
                
                el.textContent = prefix + currentNum + suffix;
                
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    el.textContent = targetText;
                }
            };
            window.requestAnimationFrame(step);
        }, delay);
    } 

    const statEls = [
        { id: 'leetcodeSolved',  value: '500+' },
        { id: 'hackerrankSolved', value: '100+' },
    ];
    
    // Also target the stat cards
    const contestRatingEl = document.querySelector('.stat-card:nth-child(3) h6');

    const odoObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statEls.forEach((s, i) => {
                    const el = document.getElementById(s.id);
                    if (el) animateCounterEl(el, s.value, i * 200);
                });
                if (contestRatingEl) animateCounterEl(contestRatingEl, '1462', 400);
                odoObserver.disconnect();
            }
        });
    }, { threshold: 0.4 });

    const codingStats = document.querySelector('.coding-stats');
    if (codingStats) odoObserver.observe(codingStats);

    // =========================================================
    // 8. CYBERPUNK GLITCH ANIMATION — Hero Name
    // =========================================================
    const glitchEl = document.querySelector('.glitch-text');
    if (glitchEl) {
        function triggerGlitch() {
            glitchEl.classList.add('glitching');
            const duration = 150 + Math.random() * 250;
            setTimeout(() => glitchEl.classList.remove('glitching'), duration);
            // Schedule next
            const nextDelay = 3000 + Math.random() * 6000;
            setTimeout(triggerGlitch, nextDelay);
        }
        setTimeout(triggerGlitch, 2500);
    }

    // =========================================================
    // ALL ORIGINAL FEATURES PRESERVED BELOW
    // =========================================================

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu    = document.getElementById('navMenu');

    function closeMobileMenu() {
        if (!navMenu) return;
        navMenu.classList.remove('active');
        if (menuToggle) {
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    }

    if (menuToggle && navMenu) {
        menuToggle.setAttribute('aria-controls', 'navMenu');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open navigation menu');

        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            const isOpen = navMenu.classList.toggle('active');
            menuToggle.innerHTML = isOpen
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (e) {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                closeMobileMenu();
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeMobileMenu();
        });
    }



    // 3D Interactive Hero Image Tilt (mousemove)
    const heroImage   = document.querySelector('.hero-image');
    const heroSection = document.querySelector('.hero');
    let rafId = null;
    if (heroImage && heroSection) {
        heroSection.addEventListener('mousemove', e => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                const rect = heroSection.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
                const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
                heroImage.style.transform = `perspective(1000px) rotateX(${-y * 15}deg) rotateY(${x * 15}deg)`;
            });
        });
        heroSection.addEventListener('mouseleave', () => {
            if (rafId) cancelAnimationFrame(rafId);
            heroImage.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            heroImage.style.transition = 'transform 0.5s ease-out';
            setTimeout(() => { heroImage.style.transition = 'transform 0.1s ease-out'; }, 500);
        });
    }

    // Achievement Badges
    document.querySelectorAll('.badge').forEach(badge => {
        badge.addEventListener('mouseenter', () => badge.style.transform = 'scale(1.2)');
        badge.addEventListener('mouseleave', () => badge.style.transform = 'scale(1)');
    });

    // Testimonial Slider
    const testimonialContainer = document.querySelector('.testimonial-slider');
    const testimonials  = document.querySelectorAll('.testimonial');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn       = document.querySelector('.slider-prev');
    const nextBtn       = document.querySelector('.slider-next');
    let currentTestimonial = 0;
    let testimonialInterval;

    function goToSlide(dir) {
        if (dir === 'next') currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        else                currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    if (testimonialContainer && testimonials.length && dotsContainer && prevBtn && nextBtn) {
        let isHovered = false;

        testimonials.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.addEventListener('click', () => { showTestimonial(i); startSlider(); });
            dotsContainer.appendChild(dot);
        });
        function showTestimonial(index) {
            testimonials.forEach(t => t.classList.remove('active'));
            testimonials[index].classList.add('active');
            document.querySelectorAll('.slider-dots span').forEach((d, i) => d.classList.toggle('active', i === index));
            currentTestimonial = index;
        }
        
        function startSlider() {
            if (testimonialInterval) clearInterval(testimonialInterval);
            if (!isHovered) {
                testimonialInterval = setInterval(() => goToSlide('next'), 5000);
            }
        }
        
        function stopSlider() {
            clearInterval(testimonialInterval);
        }

        prevBtn.addEventListener('click', () => { goToSlide('prev'); startSlider(); });
        nextBtn.addEventListener('click', () => { goToSlide('next'); startSlider(); });
        
        testimonialContainer.addEventListener('mouseenter', () => {
            isHovered = true;
            stopSlider();
        });
        testimonialContainer.addEventListener('mouseleave', () => {
            isHovered = false;
            startSlider();
        });
        
        startSlider();
        showTestimonial(0);
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    const formStatus  = document.getElementById('formStatus');
    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            formStatus.innerHTML = '';
            formStatus.className = 'form-status';
            try {
                const response = await fetch(this.action, { method: 'POST', body: new FormData(this), headers: { Accept: 'application/json' } });
                if (response.ok) {
                    formStatus.innerHTML = `<div class="success-message"><i class="fas fa-check-circle"></i><div><strong>Message Sent!</strong><br>I'll get back to you soon.</div></div>`;
                    formStatus.className = 'form-status success';
                    contactForm.reset();
                    setTimeout(() => { formStatus.innerHTML = ''; formStatus.className = 'form-status'; }, 8000);
                } else throw new Error('failed');
            } catch {
                formStatus.innerHTML = `<div class="error-message"><i class="fas fa-exclamation-circle"></i><div><strong>Oops!</strong><br>Please email me directly.</div></div>`;
                formStatus.className = 'form-status error';
                setTimeout(() => { formStatus.innerHTML = ''; formStatus.className = 'form-status'; }, 10000);
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Current Year
    const currentYearEl = document.getElementById('currentYear');
    if (currentYearEl) currentYearEl.textContent = new Date().getFullYear();


    // Particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: { number: { value: 50, density: { enable: true, value_area: 800 } }, color: { value: '#1d1d1f' }, shape: { type: 'circle' }, opacity: { value: 0.45, random: true }, size: { value: 3, random: true }, line_linked: { enable: true, distance: 130, color: '#1d1d1f', opacity: 0.35, width: 1.5 }, move: { enable: true, speed: 1.2, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false } },
            interactivity: { detect_on: 'canvas', events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } } }
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => closeMobileMenu());
    });

    // Navbar scroll + scroll-spy (Optimized for performance)
    const sections  = document.querySelectorAll('section[id]');
    const navbar    = document.getElementById('navbar');
    let scrollSpyTicking = false;

    window.addEventListener('scroll', function () {
        if (!scrollSpyTicking) {
            window.requestAnimationFrame(function () {
                const scrollY = window.pageYOffset;
                if (navbar) navbar.classList.toggle('scrolled', scrollY > 50);

                sections.forEach(current => {
                    const sectionTop = current.offsetTop - 150;
                    const sectionHeight = current.offsetHeight;
                    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                        const sectionId  = current.getAttribute('id');
                        const activeNav = document.querySelector('.nav-menu a.active');
                        const targetNav = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
                        
                        if (targetNav && activeNav !== targetNav) {
                            if (activeNav) activeNav.classList.remove('active');
                            targetNav.classList.add('active');
                        }
                    }
                });
                scrollSpyTicking = false;
            });
            scrollSpyTicking = true;
        }
    }, { passive: true });

    // 3D Cascade Scroll Reveal (upgraded from fade-up)
    const fadeEls = document.querySelectorAll('.section-title, .about-text, .about-sidebar, .timeline-item, .contact-info, .contact-form, .skill-category, .project-card');
    const eliteObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(el => {
        if (el.classList.contains('project-card') || el.classList.contains('skill-category')) el.classList.add('scale-in');
        else el.classList.add('fade-up');
        eliteObserver.observe(el);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) window.scrollTo({ top: targetEl.offsetTop - 80, behavior: 'smooth' });
        });
    });

    // =========================================================
    // LIVE GITHUB API STATS
    // =========================================================
    (async function fetchGitHubStats() {
        const USERNAME = 'Bharath-B100';
        try {
            // Fetch user profile
            const userRes = await fetch(`https://api.github.com/users/${USERNAME}`);
            if (userRes.ok) {
                const user = await userRes.json();
                const repoEl = document.getElementById('repoCount');
                const followerEl = document.getElementById('followerCount');
                if (repoEl) repoEl.textContent = user.public_repos ?? '—';
                if (followerEl) followerEl.textContent = user.followers ?? '—';
            }

            // Fetch latest push event for commit info
            const eventsRes = await fetch(`https://api.github.com/users/${USERNAME}/events/public?per_page=10`);
            if (eventsRes.ok) {
                const events = await eventsRes.json();
                const pushEvent = events.find(e => e.type === 'PushEvent');
                if (pushEvent) {
                    const repoName = pushEvent.repo.name.replace(`${USERNAME}/`, '');
                    const commitMsg = pushEvent.payload.commits?.[pushEvent.payload.commits.length - 1]?.message || 'Latest push';
                    const repoEl2 = document.getElementById('latestCommitRepo');
                    const msgEl   = document.getElementById('latestCommitMsg');
                    const statDiv = document.getElementById('latestCommitStat');
                    if (repoEl2) repoEl2.textContent = repoName;
                    if (msgEl)   msgEl.textContent   = commitMsg;
                    if (statDiv) statDiv.style.display = 'flex';
                }
            }
        } catch (err) {
            // Fallback to static values if API fails (rate-limit, offline, etc.)
            const repoEl = document.getElementById('repoCount');
            const followerEl = document.getElementById('followerCount');
            if (repoEl && repoEl.textContent === '—') repoEl.textContent = '12';
            if (followerEl && followerEl.textContent === '—') followerEl.textContent = '24';
            console.warn('GitHub API unavailable, using static fallback.', err);
        }
    })();

    // =========================================================
    // COLORFUL THEME TOGGLE
    // =========================================================
    const paintBtn = document.querySelector('.slogan-paint-btn');
    if (paintBtn) {
        paintBtn.addEventListener('click', function() {
            document.body.classList.toggle('colorful-mode');
            if (document.body.classList.contains('colorful-mode')) {
                paintBtn.textContent = 'clear';
            } else {
                paintBtn.textContent = 'paint';
            }
        });
    }

}); // End DOMContentLoaded

// ============================================================
// PAGE TRANSITIONS — Fixed & Safe
// ============================================================
document.addEventListener('DOMContentLoaded', function () {
    const overlay = document.getElementById('page-transition-overlay');
    if (!overlay) return;

    // Force instant jump to hash before the overlay starts fading to prevent any "blink" of the hero section
    if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
            window.scrollTo(0, target.offsetTop - 80);
        }
    }

    // INCOMING: Add is-entering class so overlay fades from opaque→transparent on load
    overlay.style.opacity = '';
    overlay.classList.add('is-entering');
    // Remove class after animation completes so it doesn't re-trigger
    overlay.addEventListener('animationend', function () {
        overlay.classList.remove('is-entering');
    }, { once: true });

    // OUTGOING: Intercept internal link clicks and fade out before navigating
    document.addEventListener('click', function (e) {
        const link = e.target.closest('a[href]');
        if (!link) return;

        const href = link.getAttribute('href');
        // Skip hash links, mailto, tel, download, _blank, and external URLs
        if (!href) return;
        if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
        if (link.hasAttribute('download')) return;
        if (link.target === '_blank') return;
        if (href.startsWith('http://') || href.startsWith('https://')) return;

        e.preventDefault();
        overlay.classList.remove('is-entering');
        overlay.classList.add('is-leaving');

        setTimeout(function () {
            window.location.href = href;
        }, 380);
    });

    // Handle BFCache (Back-Forward Cache) restoration (e.g., trackpad swipe back)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            overlay.classList.remove('is-leaving');
            // Re-trigger enter animation to ensure a smooth reveal if needed
            overlay.classList.add('is-entering');
        }
    });
});

// ============================================================
// SNAKE SCROLL REVEAL — SVG stroke-dashoffset animation
// ============================================================
(function () {
    const snakePath = document.getElementById('snakePath');
    const timeline  = document.getElementById('snake-timeline');
    const tlItems   = [
        document.getElementById('tl-item-1'),
        document.getElementById('tl-item-2'),
        document.getElementById('tl-item-3'),
    ];

    if (!snakePath || !timeline) return;

    // Measure total path length once
    const totalLength = snakePath.getTotalLength();

    // Initialize: hide the entire path
    snakePath.style.strokeDasharray  = totalLength;
    snakePath.style.strokeDashoffset = totalLength;
    snakePath.style.transition       = 'stroke-dashoffset 0.1s linear';

    // Thresholds (0-1 scroll progress) at which each item lights up
    const itemThresholds = [0.28, 0.58, 0.88];

    let snakeTicking = false;

    function onScroll() {
        if (!snakeTicking) {
            window.requestAnimationFrame(() => {
                const rect    = timeline.getBoundingClientRect();
                const winH    = window.innerHeight;

                // progress: 0 when section bottom enters viewport, 1 when section top hits center
                const entered = winH - rect.top;
                const total   = rect.height + winH * 0.5;
                const progress = Math.min(Math.max(entered / total, 0), 1);

                // Draw the snake stroke progressively
                snakePath.style.strokeDashoffset = totalLength * (1 - progress);

                // Activate timeline items at their scroll thresholds
                itemThresholds.forEach(function (threshold, i) {
                    if (progress >= threshold) {
                        tlItems[i] && tlItems[i].classList.add('tl-active');
                    } else {
                        tlItems[i] && tlItems[i].classList.remove('tl-active');
                    }
                });
                snakeTicking = false;
            });
            snakeTicking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load in case section already visible
})();

