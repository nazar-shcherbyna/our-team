$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        prevArrow: '<button class="slider__arrow slider__arrow--prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="slider__arrow slider__arrow--next"><i class="fas fa-chevron-right"></i></button>',
        dotsClass: 'slider__dots'
    });
  });