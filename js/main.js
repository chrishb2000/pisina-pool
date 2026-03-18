/**
 * Main JavaScript for Ovalle Pool Services LLC
 * Designed by Christian Herencia
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initNavbar();
    initHeroSlider();
    initMobileNav();
    initScrollToTop();
    initCookieBanner();
    initPortfolioModal();
    initInfoModals();
    initSmoothScroll();
});

/**
 * Navbar scroll effect
 */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
}

/**
 * Update active navigation link based on current section
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

/**
 * Hero Slider functionality
 */
function initHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-btn.prev');
    const nextBtn = document.querySelector('.slider-btn.next');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    let slideInterval;
    
    // Show specific slide
    function showSlide(index) {
        // Handle index bounds
        if (index >= totalSlides) currentSlide = 0;
        else if (index < 0) currentSlide = totalSlides - 1;
        else currentSlide = index;
        
        // Update slides
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === currentSlide) {
                slide.classList.add('active');
            }
        });
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === currentSlide) {
                dot.classList.add('active');
            }
        });
    }
    
    // Next slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Previous slide
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    // Start auto-play
    function startAutoPlay() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Stop auto-play
    function stopAutoPlay() {
        clearInterval(slideInterval);
    }
    
    // Event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        });
    }
    
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const slideIndex = parseInt(dot.getAttribute('data-slide'));
            showSlide(slideIndex);
            stopAutoPlay();
            startAutoPlay();
        });
    });
    
    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        heroSection.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        heroSection.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }
    
    function handleSwipe() {
        if (touchStartX - touchEndX > 50) {
            nextSlide();
            stopAutoPlay();
            startAutoPlay();
        }
        if (touchEndX - touchStartX > 50) {
            prevSlide();
            stopAutoPlay();
            startAutoPlay();
        }
    }
    
    // Start auto-play on init
    startAutoPlay();
    
    // Pause on hover
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopAutoPlay);
        heroSection.addEventListener('mouseleave', startAutoPlay);
    }
}

/**
 * Mobile navigation toggle
 */
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animate hamburger
            const hamburger = navToggle.querySelector('.hamburger');
            hamburger.classList.toggle('active');
        });
    }
    
    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const hamburger = navToggle?.querySelector('.hamburger');
            hamburger?.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            const hamburger = navToggle?.querySelector('.hamburger');
            hamburger?.classList.remove('active');
        }
    });
}

/**
 * Scroll to top button
 */
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (!scrollTopBtn) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Cookie consent banner
 */
function initCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptBtn = document.getElementById('acceptCookies');
    const declineBtn = document.getElementById('declineCookies');
    
    if (!cookieBanner) return;
    
    // Check if user already made a choice
    const cookieChoice = localStorage.getItem('cookieChoice');
    
    if (!cookieChoice) {
        // Show banner after 2 seconds
        setTimeout(() => {
            cookieBanner.classList.add('active');
        }, 2000);
    }
    
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('cookieChoice', 'accepted');
            cookieBanner.classList.remove('active');
        });
    }
    
    if (declineBtn) {
        declineBtn.addEventListener('click', () => {
            localStorage.setItem('cookieChoice', 'declined');
            cookieBanner.classList.remove('active');
        });
    }
}

/**
 * Portfolio Modal
 */
let currentImageIndex = 0;
let portfolioImages = [];

function initPortfolioModal() {
    const modal = document.getElementById('portfolioModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.getElementById('modalClose');
    const prevBtn = document.getElementById('modalPrev');
    const nextBtn = document.getElementById('modalNext');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (!modal || !portfolioItems.length) return;
    
    // Collect all image sources
    portfolioImages = Array.from(portfolioItems).map(item => {
        const img = item.querySelector('img');
        return {
            src: img.src,
            alt: img.alt
        };
    });
    
    // Open modal on portfolio item click
    portfolioItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentImageIndex = index;
            openModal();
        });
    });
    
    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Navigate
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + portfolioImages.length) % portfolioImages.length;
            updateModalImage();
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % portfolioImages.length;
            updateModalImage();
        });
    }
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowLeft') {
            currentImageIndex = (currentImageIndex - 1 + portfolioImages.length) % portfolioImages.length;
            updateModalImage();
        } else if (e.key === 'ArrowRight') {
            currentImageIndex = (currentImageIndex + 1) % portfolioImages.length;
            updateModalImage();
        }
    });
    
    function openModal() {
        updateModalImage();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    function updateModalImage() {
        const image = portfolioImages[currentImageIndex];
        modalImage.src = image.src;
        modalImage.alt = image.alt;
        if (modalCaption) {
            modalCaption.textContent = image.alt;
        }
    }
}

/**
 * Info Modals (Privacy & Cookies)
 */
function initInfoModals() {
    const privacyLink = document.getElementById('privacyLink');
    const cookiesLink = document.getElementById('cookiesLink');
    const privacyModal = document.getElementById('privacyModal');
    const cookiesModal = document.getElementById('cookiesModal');
    
    if (privacyLink && privacyModal) {
        privacyLink.addEventListener('click', (e) => {
            e.preventDefault();
            privacyModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (cookiesLink && cookiesModal) {
        cookiesLink.addEventListener('click', (e) => {
            e.preventDefault();
            cookiesModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    // Close info modals
    document.querySelectorAll('.info-modal .modal-close').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close on outside click
    document.querySelectorAll('.info-modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Intersection Observer for fade-in animations
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            fadeObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .contact-card, .about-text, .about-image');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(el);
    });
});

// Add fade-in styles dynamically
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);
