// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Visitor Counter
    let visitorCount = localStorage.getItem('visitorCount') || 0;
    visitorCount = parseInt(visitorCount) + 1;
    localStorage.setItem('visitorCount', visitorCount);
    document.getElementById('visitorCount').textContent = visitorCount;

    // Floating Contact
    const chatBtn = document.getElementById('chatBtn');
    const quickForm = document.getElementById('quickForm');
    const sendQuickMessage = document.getElementById('sendQuickMessage');
    
    if (chatBtn && quickForm && sendQuickMessage) {
        chatBtn.addEventListener('click', () => {
            quickForm.style.display = quickForm.style.display === 'block' ? 'none' : 'block';
        });
        
        sendQuickMessage.addEventListener('click', () => {
            const name = document.getElementById('quickName').value;
            const message = document.getElementById('quickMessage').value;
            
            if (name && message) {
                alert(`Thanks ${name}! Your quick message has been sent.`);
                document.getElementById('quickName').value = '';
                document.getElementById('quickMessage').value = '';
                quickForm.style.display = 'none';
            } else {
                alert('Please fill in both fields.');
            }
        });
    }

    // Typing Animation
    const texts = [
        "Full-Stack Developer",
        "ML Enthusiast", 
        "IoT Engineer",
        "Problem Solver",
        "UI/UX Designer"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingText = document.getElementById('typing-text');
    
    function typeWriter() {
        if (!typingText) return;
        
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeWriter, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(typeWriter, 500);
        } else {
            setTimeout(typeWriter, isDeleting ? 50 : 100);
        }
    }
    
    setTimeout(typeWriter, 1000);

    // GitHub Stats (Mock data)
    function fetchGitHubStats() {
        try {
            // Mock data for demonstration
            if (document.getElementById('repoCount')) {
                document.getElementById('repoCount').textContent = '12';
            }
            if (document.getElementById('followerCount')) {
                document.getElementById('followerCount').textContent = '24';
            }
        } catch (error) {
            console.log('GitHub stats error:', error);
        }
    }
    fetchGitHubStats();

    // Achievement Badges Tooltips
    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.style.transform = 'scale(1.2)';
        });
        badge.addEventListener('mouseleave', () => {
            badge.style.transform = 'scale(1)';
        });
    });

    // Coding Stats
    if (document.getElementById('leetcodeSolved')) {
        document.getElementById('leetcodeSolved').textContent = '150+';
    }
    if (document.getElementById('hackerrankSolved')) {
        document.getElementById('hackerrankSolved').textContent = '100+';
    }

    // Project Flip Cards
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            
            const projectLink = this.getAttribute('data-project-link');
            if (projectLink) {
                window.open(projectLink, '_blank');
            }
        });
        
        card.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        });
        
        card.addEventListener('touchend', function() {
            this.classList.remove('touch-active');
        });
    });

    // Resume Download
    const downloadResume = document.getElementById('downloadResume');
    if (downloadResume) {
        downloadResume.addEventListener('click', function(e) {
            // Create and trigger download
            const resumeContent = `
Bharath Raj B
CSBS Student & Full-Stack Developer
Contact: +91 9943935576 | Email: bharathrajmurali1010@gmail.com

EDUCATION
Dr.N.G.P Institute Of Technology
B.TECH(CSBS) - CGPA: 8.00 (2023-2027)

Vailankanni Public School (CBSE)
HSC (2022-2023)

Vailankanni Public School (CBSE)
SSLC (2020-2021)

EXPERIENCE
UI/UX Design Intern – Sri Nandha Infotech (2025)
• Designed 10+ responsive UI screens
• Enhanced page usability through UX principles
• Collaborated with product teams on Figma mockups

PROJECTS
1. Smart Spending Analysis (2025)
   - Developed expense analyzer using Python, Pandas, Power BI
   - Automated spending categorization (40% efficiency improvement)

2. Financial Portfolio Management System (2025)
   - Full-stack portfolio tracker with ML risk scoring
   - Built modular REST APIs

3. Hostel Management System (2024)
   - Full-stack system with 10+ modules for 300+ users
   - Responsive UI with dark/light themes

4. Smart Shoe For Visually Impaired (2024)
   - IoT-based wearable with 95% obstacle detection accuracy
   - Awarded at Vishwakarma Awards, IIT Hyderabad

SKILLS
Languages: C, Java, Python, JavaScript
Frontend: React.js, HTML, CSS, Bootstrap
Backend: Node.js, Express.js, Flask
Databases: MongoDB, MySQL, PostgreSQL, Supabase
Tools: Git, GitHub, VS Code, Figma, Canva

ACHIEVEMENTS
• LeetCode Max Rating: 1462 | 150+ Problems Solved
• HackerRank: 100+ Problems Solved | 3+ Certificates
• Vishwakarma Awards 2024: Top 6 Finalist among 3000+ teams
• Paper Presentation Winner & Runner-up

CERTIFICATIONS
• Introduction To Internet Of Things - NPTEL 2025
• Agile Methodologies - Techcanvass 2025
• Java Programming - Great Learning 2024
            `;
            
            const blob = new Blob([resumeContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Bharath_Raj_Resume.txt';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
            
            alert('Resume download started!');
        });
    }

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    if (testimonials.length > 0 && dotsContainer && prevBtn && nextBtn) {
        let currentTestimonial = 0;
        
        // Create dots
        testimonials.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.addEventListener('click', () => {
                showTestimonial(index);
            });
            dotsContainer.appendChild(dot);
        });
        
        function showTestimonial(index) {
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            testimonials[index].classList.add('active');
            
            const dots = document.querySelectorAll('.slider-dots span');
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
            
            currentTestimonial = index;
        }
        
        prevBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
        
        nextBtn.addEventListener('click', () => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        });
        
        // Auto slide
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
        
        showTestimonial(0);
    }

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            formStatus.innerHTML = '';
            formStatus.className = 'form-status';
            
            try {
                const response = await fetch(this.action, {
                    method: 'POST',
                    body: new FormData(this),
                    headers: { 'Accept': 'application/json' }
                });
                
                if (response.ok) {
                    formStatus.innerHTML = `
                        <div class="success-message">
                            <i class="fas fa-check-circle"></i> 
                            <div>
                                <strong>Message Sent Successfully!</strong><br>
                                Thank you for your message. I'll get back to you soon.
                            </div>
                        </div>`;
                    formStatus.className = 'form-status success';
                    contactForm.reset();
                    
                    setTimeout(() => {
                        formStatus.innerHTML = '';
                        formStatus.className = 'form-status';
                    }, 8000);
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                formStatus.innerHTML = `
                    <div class="error-message">
                        <i class="fas fa-exclamation-circle"></i> 
                        <div>
                            <strong>Oops! Something went wrong.</strong><br>
                            Please try again or email me directly.
                        </div>
                    </div>`;
                formStatus.className = 'form-status error';
                
                setTimeout(() => {
                    formStatus.innerHTML = '';
                    formStatus.className = 'form-status';
                }, 10000);
            } finally {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // Current Year in Footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Easter Egg (Ctrl + B)
    let eggSequence = [];
    const eggPattern = ['b', 'h', 'a', 'r', 'a', 't', 'h'];
    
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'b') {
            eggSequence.push('ctrl+b');
            checkEggSequence();
        } else if (e.key.length === 1) {
            eggSequence.push(e.key.toLowerCase());
            if (eggSequence.length > 7) {
                eggSequence.shift();
            }
            checkEggSequence();
        }
    });
    
    function checkEggSequence() {
        const sequence = eggSequence.slice(-7);
        if (sequence.join('') === eggPattern.join('')) {
            showEasterEgg();
        }
    }
    
    function showEasterEgg() {
        const egg = document.getElementById('easterEgg');
        if (!egg) return;
        
        egg.style.display = 'flex';
        
        document.getElementById('closeEgg').addEventListener('click', () => {
            egg.style.display = 'none';
            eggSequence = [];
        });
    }

    // Particles.js Background
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#4a6cf7" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#4a6cf7",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "repulse" },
                    onclick: { enable: true, mode: "push" }
                }
            }
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.padding = '10px 0';
                navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.padding = '15px 0';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        }
    });
    
    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Project cards animation
    const projectCards = document.querySelectorAll('.project-card');
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });
});