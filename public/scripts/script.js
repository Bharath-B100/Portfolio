// Bharath Raj B - Portfolio Optimized High-Performance Script

window.toggleSkills = function(category) {
    const hotspots = document.querySelectorAll(".icon-container.hotspot");
    const allSkillNodes = document.querySelectorAll(".skill-node");
    const clickedHotspot = document.querySelector(`.icon-container.hotspot[data-category="${category}"]`);
    if (!clickedHotspot) return;
    const isActive = clickedHotspot.classList.contains("active");
    hotspots.forEach(h => h.classList.remove("active"));
    allSkillNodes.forEach(node => node.classList.remove("active"));
    if (!isActive) {
        clickedHotspot.classList.add("active");
        const targetNodes = document.querySelectorAll(`.skill-node.${category}`);
        targetNodes.forEach(node => node.classList.add("active"));
    }
};

(function() {
    let activeCanvasAnim = null;
    let scrollObserverInstance = null;
    let eliteObserverInstance = null;

    window.initVanillaJS = function() {
        // Clean up previous observers and animation loops to prevent lag
        if (scrollObserverInstance) scrollObserverInstance.disconnect();
        if (eliteObserverInstance) eliteObserverInstance.disconnect();
        if (activeCanvasAnim) cancelAnimationFrame(activeCanvasAnim);

        // 1. Live Numeric Counter Odometer Animation
        function animateCounterEl(el, targetText, delay = 0) {
            if (!el) return;
            const animId = Math.random().toString(36).substr(2, 9);
            el.dataset.animId = animId;
            const numMatch = targetText.match(/\d+/);
            if (!numMatch) {
                el.textContent = targetText;
                return;
            }
            const targetNum = parseInt(numMatch[0], 10);
            const prefix = targetText.substring(0, numMatch.index);
            const suffix = targetText.substring(numMatch.index + numMatch[0].length);
            const duration = 1000;
            el.textContent = prefix + '0' + suffix;
            setTimeout(() => {
                if (el.dataset.animId !== animId) return;
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (el.dataset.animId !== animId) return;
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
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
            { id: 'leetcodeSolved',  value: '541+' },
            { id: 'hackerrankSolved', value: '100+' },
        ];
        const contestRatingEl = document.querySelector('.stat-card:nth-child(3) h6');
        const codingStats = document.querySelector('.coding-stats');
        if (codingStats) {
            const odoObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        statEls.forEach((s, i) => {
                            const el = document.getElementById(s.id);
                            if (el) animateCounterEl(el, s.value, i * 200);
                        });
                        window.statsAnimated = true;
                        if (contestRatingEl) animateCounterEl(contestRatingEl, window.leetcodeRatingVal || '1439', 400);
                        odoObserver.disconnect();
                    }
                });
            }, { threshold: 0.3 });
            odoObserver.observe(codingStats);
        }

        // 2. Glitch Text Trigger
        const glitchEl = document.querySelector('.glitch-text');
        if (glitchEl && !glitchEl.dataset.glitchInit) {
            glitchEl.dataset.glitchInit = 'true';
            function triggerGlitch() {
                glitchEl.classList.add('glitching');
                const duration = 150 + Math.random() * 250;
                setTimeout(() => glitchEl.classList.remove('glitching'), duration);
                const nextDelay = 3500 + Math.random() * 5000;
                setTimeout(triggerGlitch, nextDelay);
            }
            setTimeout(triggerGlitch, 2500);
        }

        // 3. Badges Hover Scale
        document.querySelectorAll('.badge').forEach(badge => {
            badge.onmouseenter = () => badge.style.transform = 'scale(1.2)';
            badge.onmouseleave = () => badge.style.transform = 'scale(1)';
        });

        // 4. Contact Form Submission
        const contactForm = document.getElementById('contactForm');
        const formStatus  = document.getElementById('formStatus');
        if (contactForm && formStatus) {
            contactForm.onsubmit = async function (e) {
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
            };
        }

        // 5. Particles.js Initialization
        const particlesContainer = document.getElementById('particles-js');
        if (typeof window.particlesJS !== 'undefined' && particlesContainer && !particlesContainer.querySelector('canvas')) {
            window.particlesJS('particles-js', {
                particles: { 
                    number: { value: 40, density: { enable: true, value_area: 800 } }, 
                    color: { value: '#1d1d1f' }, 
                    shape: { type: 'circle' }, 
                    opacity: { value: 0.45, random: true }, 
                    size: { value: 3, random: true }, 
                    line_linked: { enable: true, distance: 130, color: '#1d1d1f', opacity: 0.35, width: 1.5 }, 
                    move: { enable: true, speed: 1.2, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false } 
                },
                interactivity: { 
                    detect_on: 'canvas', 
                    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } } 
                }
            });
        }

        // 6. Section Titles & Sidebar Fade-In Observer
        const fadeEls = document.querySelectorAll('.section-title, .about-sidebar, .timeline-item, .contact-info, .contact-form, .skill-category');
        eliteObserverInstance = new IntersectionObserver(entries => {
            entries.forEach(entry => { 
                if (entry.isIntersecting) entry.target.classList.add('visible'); 
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
        fadeEls.forEach(el => {
            el.classList.add('fade-up');
            eliteObserverInstance.observe(el);
        });

        // 7. ORIGINAL SCROLL ANIMATION (Interactive Enter/Exit Animation on Cards & Sections)
        const scrollElements = document.querySelectorAll('.project-card, .case-section, .about-text, .experience-card, .testimonial, .cert-card');
        scrollObserverInstance = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-visible');
                } else {
                    entry.target.classList.remove('scroll-visible');
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        scrollElements.forEach(el => {
            el.classList.add('scroll-animate');
            scrollObserverInstance.observe(el);
        });

        // 8. Snake Timeline on Scroll
        const snakePath = document.getElementById('snakePath');
        const timeline  = document.getElementById('snake-timeline');
        const tlItems   = [
            document.getElementById('tl-item-1'),
            document.getElementById('tl-item-2'),
            document.getElementById('tl-item-3'),
        ];
        if (snakePath && timeline) {
            const totalLength = snakePath.getTotalLength();
            snakePath.style.strokeDasharray  = totalLength;
            snakePath.style.strokeDashoffset = totalLength;
            snakePath.style.transition       = 'stroke-dashoffset 0.1s linear';
            const itemThresholds = [0.28, 0.58, 0.88];
            let snakeTicking = false;
            
            function onSnakeScroll() {
                if (!snakeTicking) {
                    window.requestAnimationFrame(() => {
                        const rect    = timeline.getBoundingClientRect();
                        const winH    = window.innerHeight;
                        const entered = winH - rect.top;
                        const total   = rect.height + winH * 0.5;
                        const progress = Math.min(Math.max(entered / total, 0), 1);
                        snakePath.style.strokeDashoffset = totalLength * (1 - progress);
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
            window.removeEventListener('scroll', onSnakeScroll);
            window.addEventListener('scroll', onSnakeScroll, { passive: true });
            onSnakeScroll();
        }

        // 9. Skill Tree 2D Canvas particle animation (Optimized & Cleaned Up)
        const canvas = document.getElementById("particleCanvas");
        if (canvas) {
            const ctx = canvas.getContext("2d");
            let width, height;
            let particles = [];
            function resizeCanvas() {
                const section = document.getElementById("skills");
                if (section && canvas) {
                    width = canvas.width = section.clientWidth;
                    height = canvas.height = section.clientHeight;
                }
            }
            window.addEventListener("resize", resizeCanvas, { passive: true });
            resizeCanvas();

            class Particle {
                constructor() {
                    this.x = Math.random() * (width || window.innerWidth);
                    this.y = Math.random() * (height || window.innerHeight);
                    this.size = Math.random() * 2;
                    this.speedX = Math.random() * 0.8 - 0.4;
                    this.speedY = Math.random() * 0.8 - 0.4;
                    this.color = `rgba(255, 255, 255, ${Math.random() * 0.25})`;
                }
                update() {
                    this.x += this.speedX;
                    this.y += this.speedY;
                    if (this.x > width) this.x = 0;
                    if (this.x < 0) this.x = width;
                    if (this.y > height) this.y = 0;
                    if (this.y < 0) this.y = height;
                }
                draw() {
                    if (!ctx) return;
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            function initParticles() {
                particles = [];
                let particleCount = Math.min(Math.floor((width * height) / 12000), 40);
                for (let i = 0; i < particleCount; i++) {
                    particles.push(new Particle());
                }
            }

            function animateCanvas() {
                if (!document.getElementById("particleCanvas")) return;
                ctx.clearRect(0, 0, width, height);
                for (let particle of particles) {
                    particle.update();
                    particle.draw();
                }
                activeCanvasAnim = requestAnimationFrame(animateCanvas);
            }

            resizeCanvas();
            initParticles();
            animateCanvas();
        }
    };
})();

// Auto-run if DOM is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(window.initVanillaJS, 50);
} else {
    document.addEventListener('DOMContentLoaded', window.initVanillaJS);
}
