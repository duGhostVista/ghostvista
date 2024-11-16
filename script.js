// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all elements with scroll-reveal class
    document.querySelectorAll('.scroll-reveal').forEach(element => {
        observer.observe(element);
    });

    // Add scroll-reveal classes to download items
    document.querySelectorAll('.download-item').forEach((item, index) => {
        item.classList.add('scroll-reveal');
        item.classList.add('fade-up');
        item.style.transitionDelay = `${index * 0.1}s`;
    });

    // Add scroll-reveal to section headings
    document.querySelectorAll('.download-section h2').forEach(heading => {
        heading.classList.add('scroll-reveal');
        heading.classList.add('fade-up');
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add hover effect to cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// Intersection Observer for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, observerOptions);

document.querySelectorAll('.glass-container, .solid-section').forEach((el) => {
    observer.observe(el);
});
