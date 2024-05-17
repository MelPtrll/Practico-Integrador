let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  
  // Oculta todos los slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Muestra el slide actual
  slides[slideIndex].style.display = "block";  
}

// Mostrar el primer slide al cargar la página
showSlides();

function nextSlide() {
  let slides = document.getElementsByClassName("slide");
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlides();
}

function prevSlide() {
  let slides = document.getElementsByClassName("slide");
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlides();
}

// Ejecutar la función showSlides cada 5 segundos para el carrusel automático
setInterval(nextSlide, 5000); // Cambia el valor 5000 para ajustar el tiempo de transición entre slides