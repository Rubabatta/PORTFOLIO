const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navBtn = document.querySelector('.nav-btn');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Toggle icon ☰ / ✖
    menuToggle.textContent = navMenu.classList.contains('active') ? '✖' : '☰';
});

// Optional: hide menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.textContent = '☰';
    });
});
