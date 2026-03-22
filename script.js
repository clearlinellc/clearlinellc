document.addEventListener('DOMContentLoaded', () => {
    
    // Sticky Header & Style Change on Scroll
    const navbar = document.getElementById('navbar');
    const navLogo = document.getElementById('nav-logo');
    const navLinks = document.getElementById('nav-links');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('glass-nav', 'shadow-sm', 'py-2');
            navbar.classList.remove('py-4', 'bg-transparent');
            
            // Update text colors for light background
            if (navLogo) {
                navLogo.classList.remove('text-white');
                navLogo.classList.add('text-slate-900');
            }
            
            if (navLinks) {
                navLinks.classList.remove('text-slate-300');
                navLinks.classList.add('text-slate-600');
            }
        } else {
            navbar.classList.remove('glass-nav', 'shadow-sm', 'py-2');
            navbar.classList.add('py-4', 'bg-transparent');
            
            // Revert text colors for dark background overlay
            if (navLogo) {
                navLogo.classList.add('text-white');
                navLogo.classList.remove('text-slate-900');
            }
            
            if (navLinks) {
                navLinks.classList.add('text-slate-300');
                navLinks.classList.remove('text-slate-600');
            }
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        if (mobileMenu) {
            mobileMenu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        }
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Scroll Reveal Animation using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });

});
