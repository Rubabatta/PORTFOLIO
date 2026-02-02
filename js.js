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

const scrollElements = document.querySelectorAll(
  '.animate, .about-img, .about-text h2, .about-text p, .about-text ul, .about-icons, .skill-item, .projects-grid .project-card, .contact-right h2, .contact-form, .contact-icons'
);

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - offset;
};

const displayScrollElement = (element) => {
  element.classList.add('active');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

