let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  
 
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }


  slides[slideIndex].style.display = "block";  
}


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


setInterval(nextSlide, 5000); 