const carousel = document.querySelector('.carousel');
const slides = Array.from(carousel.children);
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const setSlide = (slide, index) => {
  slide.style.left = `${index * 100}%`;
};

slides.forEach(setSlide);

prevButton.addEventListener('click', () => {
  const currentSlide = carousel.querySelector('.current');
  const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];

  carousel.style.transform = `translateX(-${prevSlide.style.left})`;
  currentSlide.classList.remove('current');
  prevSlide.classList.add('current');
});

nextButton.addEventListener('click', () => {
  const currentSlide = carousel.querySelector('.current');
  const nextSlide = currentSlide.nextElementSibling || slides[0];

  carousel.style.transform = `translateX(-${nextSlide.style.left})`;
  currentSlide.classList.remove('current');
  nextSlide.classList.add('current');
});

const goToNextSlide = () => {
  const currentSlide = carousel.querySelector('.current');
  const nextSlide = currentSlide.nextElementSibling || slides[0];

  carousel.style.transform = `translateX(-${nextSlide.style.left})`;
  currentSlide.classList.remove('current');
  nextSlide.classList.add('current');
};

slides[0].classList.add('current');

// const intervalId = setInterval(goToNextSlide, 2000);