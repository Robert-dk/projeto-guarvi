const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselSlide = document.querySelector('.carousel-slide');
const slides = Array.from(carouselSlide.children);

let counter = 0;

function updateCarousel() {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === counter);
  });
  carouselSlide.style.transform = `translateX(${-counter * slides[0].clientWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  counter = (counter + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  counter = (counter - 1 + slides.length) % slides.length;
  updateCarousel();
});

updateCarousel(); // Inicializa o carrossel

