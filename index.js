/* index.js - Premium Web Portfolio Interactivity */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // Theme Toggle (Dark / Light Mode)
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // Check for saved theme preference, default to dark-theme
    const savedTheme = localStorage.getItem('theme') || 'dark-theme';
    bodyElement.className = savedTheme;

    themeToggleBtn.addEventListener('click', () => {
        if (bodyElement.classList.contains('dark-theme')) {
            bodyElement.classList.remove('dark-theme');
            bodyElement.classList.add('light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            bodyElement.classList.remove('light-theme');
            bodyElement.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    });

    // ==========================================================================
    // Mobile Menu Toggle
    // ==========================================================================
    const mobileMenuToggleBtn = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenuToggleBtn.addEventListener('click', () => {
        mobileMenuToggleBtn.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggleBtn.classList.remove('open');
            navMenu.classList.remove('open');
        });
    });

    // ==========================================================================
    // Scroll Progress & Header Shrink
    // ==========================================================================
    const scrollProgress = document.getElementById('scroll-progress');
    const headerElement = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolledPercentage = (scrollTop / docHeight) * 100;
        
        // Progress bar width
        scrollProgress.style.width = scrolledPercentage + '%';

        // Header shrink
        if (scrollTop > 50) {
            headerElement.classList.add('shrink');
        } else {
            headerElement.classList.remove('shrink');
        }
    });

    // ==========================================================================
    // Active Navigation Highlight
    // ==========================================================================
    const sections = document.querySelectorAll('section');
    
    const activeNavObserverOptions = {
        root: null,
        rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies mid-viewport
        threshold: 0
    };

    const activeNavObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, activeNavObserverOptions);

    sections.forEach(section => {
        activeNavObserver.observe(section);
    });

    // ==========================================================================
    // Scroll Reveal (Intersection Observer)
    // ==========================================================================
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserverOptions = {
        root: null,
        rootMargin: '0px 0px -100px 0px', // Trigger slightly before element enters view
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Stop observing once animated in
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealObserverOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // ==========================================================================
    // Contact Form Handling (Submit Mock)
    // ==========================================================================
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.textContent;
        
        // Simulating submission loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Wird gesendet...';

        setTimeout(() => {
            // Restore button state
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;

            // Display success message
            formFeedback.textContent = 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Doryan wird sich in Kürze bei Ihnen melden.';
            formFeedback.className = 'form-feedback success';
            
            // Clear fields
            contactForm.reset();

            // Clear feedback after 7 seconds
            setTimeout(() => {
                formFeedback.style.display = 'none';
                formFeedback.className = 'form-feedback';
            }, 7000);
        }, 1500);
    });
});
