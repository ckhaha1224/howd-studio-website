// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled'); // keep transparent or add background? 
        // Let's actually always have it white, but add shadow on scroll
        if (window.scrollY === 0) {
            navbar.style.boxShadow = 'none';
        } else {
            navbar.style.boxShadow = 'var(--shadow-sm)';
        }
    }
});

// Load Calendly Externals dynamically
const calendlyCss = document.createElement('link');
calendlyCss.href = 'https://assets.calendly.com/assets/external/widget.css';
calendlyCss.rel = 'stylesheet';
document.head.appendChild(calendlyCss);

const calendlyJs = document.createElement('script');
calendlyJs.src = 'https://assets.calendly.com/assets/external/widget.js';
document.head.appendChild(calendlyJs);

// Trigger Calendly Popup
function openBookingModal() {
    if (window.Calendly) {
        // NOTE: Replace 'https://calendly.com/YOUR_LINK_HERE' with your actual Calendly booking page URL.
        // For example: 'https://calendly.com/howdstudio'
        Calendly.initPopupWidget({ url: 'https://calendly.com/chinkiu-chan90' });
    } else {
        alert("Booking system is loading. Please try again in a moment.");
    }
}
