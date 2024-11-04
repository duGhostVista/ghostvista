document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animated');

    const handleScroll = () => {
        animatedElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Check if the element is in the viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
                element.classList.add('visible'); // Add the visible class to trigger animation
            } else {
                element.classList.remove('visible'); // Optionally, remove the class if out of view
            }
        });
    };

    // Run on scroll and on load
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on page load
});
