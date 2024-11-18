const navbar = document.querySelector('.navbar');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // If the page is scrolled down by more than 50px, add the 'scrolled' class
        navbar.classList.add('scrolled');
    } else {
        // If the page is at the top, remove the 'scrolled' class
        navbar.classList.remove('scrolled');
    }
});