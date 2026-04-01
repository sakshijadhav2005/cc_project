// Navigation Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Intersection Observer for Reveal Animations
const revealElements = document.querySelectorAll('.reveal');
const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
    });
}, revealOptions);

revealElements.forEach(el => revealOnScroll.observe(el));

// Smooth Scrolling for Nav Links (Optional - Browser default usually works)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Modal Logic
const authModal = document.getElementById('authModal');
const openAuthBtn = document.getElementById('openAuth');
const closeAuthBtn = document.getElementById('closeAuth');
const loginBox = document.getElementById('loginBox');
const signupBox = document.getElementById('signupBox');
const toSignup = document.getElementById('toSignup');
const toLogin = document.getElementById('toLogin');

// Open Modal
openAuthBtn.addEventListener('click', (e) => {
    e.preventDefault();
    authModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scroll
});

// Close Modal
const closeModal = () => {
    authModal.classList.remove('active');
    document.body.style.overflow = 'auto';
};

closeAuthBtn.addEventListener('click', closeModal);
authModal.addEventListener('click', (e) => {
    if (e.target === authModal) closeModal();
});

// Switch Between Login and Signup
toSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginBox.style.display = 'none';
    signupBox.style.display = 'block';
});

toLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupBox.style.display = 'none';
    loginBox.style.display = 'block';
});

// Prevent form submission for demo
document.querySelectorAll('.auth-form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Authentication feature is currently in demo mode. No data was sent.');
        closeModal();
    });
});
// Simple Button Hover Feedback (Premium tactile feel)
const buttons = document.querySelectorAll('.cta-button');
buttons.forEach(btn => {
    btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(0.95)';
    });
    btn.addEventListener('mouseup', () => {
        btn.style.transform = 'scale(1)';
    });
});

// Product Detail Modal Logic
const productModal = document.getElementById('productModal');
const closeProductBtn = document.getElementById('closeProduct');
const productDetailContent = document.getElementById('productDetailContent');
const viewDetailsBtns = document.querySelectorAll('.view-details');

const openProductModal = (data) => {
    productDetailContent.innerHTML = `
        <h2 style="color: var(--primary-green); margin-bottom: 1rem;">${data.title}</h2>
        <p style="color: var(--text-dark); margin-bottom: 1.5rem; font-size: 1.1rem;">${data.desc}</p>
        <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 16px; border-left: 4px solid var(--sage-green);">
            <h4 style="margin-bottom: 0.5rem; color: var(--sage-green);">Technical Specifications</h4>
            <p style="font-family: monospace; color: var(--text-muted);">${data.specs}</p>
        </div>
        <button class="cta-button" style="width: 100%; margin-top: 2rem;" onclick="location.href='#contact'">Request a Quote</button>
    `;
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

viewDetailsBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const data = {
            title: btn.getAttribute('data-title'),
            desc: btn.getAttribute('data-desc'),
            specs: btn.getAttribute('data-specs')
        };
        openProductModal(data);
    });
});

const closeProductModal = () => {
    productModal.classList.remove('active');
    document.body.style.overflow = 'auto';
};

closeProductBtn.addEventListener('click', closeProductModal);
productModal.addEventListener('click', (e) => {
    if (e.target === productModal) closeProductModal();
});
