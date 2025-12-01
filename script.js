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

// Card width + gap (min-width is 400px, gap is 1.5rem approx 24px)
const scrollAmount = 424; 

nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});
