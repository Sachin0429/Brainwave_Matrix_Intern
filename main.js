// Toggle login form visibility
const loginButton = document.querySelector('.cn');
const loginForm = document.querySelector('.form');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.toggle('visible');
});

// Smooth scrolling for navigation
const menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
