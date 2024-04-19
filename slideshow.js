document.addEventListener('DOMContentLoaded', function() {
  var script = document.createElement('script');
  script.src = 'slideshow.js';
  document.body.appendChild(script);
});

let slideIndex = 1; 

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length} 
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}

function startSlideShow() {
  setInterval(() => {
    plusSlides(1); 
  }, 3000); }

startSlideShow(); 
