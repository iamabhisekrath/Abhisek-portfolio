// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// Testimonial Slider Logic
const container = document.getElementById('testimonialContainer');
const prevBtn = document.getElementById('prevReview');
const nextBtn = document.getElementById('nextReview');

nextBtn.addEventListener('click', () => {
    // Scroll by the width of one card + gap (approx 424px)
    container.scrollBy({ left: 424, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -424, behavior: 'smooth' });
});
