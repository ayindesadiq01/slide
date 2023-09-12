'use strict';

const slides = document.querySelectorAll('.slide');

let activeIndex = 0;

// slides.forEach((slide, index) => {
//   slide.style.transform = `translateX(${100 * index}%)`;
// })

//REfactor
const culSlide = function(s) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - s)}%)`;
  })
}

culSlide(0);

//REfactor
const nSlides = function(){
  if(activeIndex < slides.length) {

    if(activeIndex === slides.length -1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    
    culSlide(activeIndex);
  }

}

setInterval(nSlides, 2000);