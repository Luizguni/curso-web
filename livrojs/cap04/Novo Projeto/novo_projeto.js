// script.js

// Menu responsivo
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});

// Slider de imagens
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
});

function updateSlide() {
    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Filtros de eventos
const filters = document.querySelectorAll('.event-filters button');
const events = document.querySelectorAll('.event');

filters.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        filters.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        events.forEach(event => {
            if (filter === 'all' || event.classList.contains(filter)) {
                event.style.display = 'block';
            } else {
                event.style.display = 'none';
            }
        });
    });
});
