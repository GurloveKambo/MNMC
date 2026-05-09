// ── Mobile nav toggle ──
const hamburger = document.querySelector(’.nav-hamburger’);
const mobileNav = document.querySelector(’.mobile-nav’);
const mobileClose = document.querySelector(’.mobile-close’);

if (hamburger) {
hamburger.addEventListener(‘click’, () => {
mobileNav.classList.add(‘open’);
document.body.style.overflow = ‘hidden’;
});
}
if (mobileClose) {
mobileClose.addEventListener(‘click’, () => {
mobileNav.classList.remove(‘open’);
document.body.style.overflow = ‘’;
});
}

// Close mobile nav on link click
document.querySelectorAll(’.mobile-nav a’).forEach(a => {
a.addEventListener(‘click’, () => {
mobileNav.classList.remove(‘open’);
document.body.style.overflow = ‘’;
});
});

// ── Scroll fade-in ──
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add(‘visible’);
}
});
}, { threshold: 0.1, rootMargin: ‘0px 0px -40px 0px’ });

document.querySelectorAll(’.fade-in’).forEach(el => observer.observe(el));

// ── Active nav link ──
const currentPage = location.pathname.split(’/’).pop() || ‘index.html’;
document.querySelectorAll(’.nav-links a, .mobile-nav a’).forEach(a => {
const href = a.getAttribute(‘href’);
if (href === currentPage || (currentPage === ‘’ && href === ‘index.html’)) {
a.classList.add(‘active’);
}
});
