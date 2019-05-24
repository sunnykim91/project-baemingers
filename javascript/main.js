const mainBlack = document.querySelector('.main');
const avengers = document.querySelector('.main-avengers');
const captain_icon = document.querySelector('.main-captain');
const iron_icon = document.querySelector('.main-iron');
const thor_icon = document.querySelector('.main-thor');
const hulk_icon = document.querySelector('.main-hulk');
const hawk_icon = document.querySelector('.main-hawk');
const widow_icon = document.querySelector('.main-widow');
const series = document.querySelector('.series');

const captain_icon1 = document.querySelector('.captain_icon');


(function resizeBackgruound() {
  mainBlack.style.height = `${window.innerHeight}px`;
  mainBlack.style.width = `${window.innerWidth}px`;

  captain_icon.style.width = `${window.innerWidth}px`;
  captain_icon.style.height = `${window.innerHeight}px`;
  
  iron_icon.style.width = `${window.innerWidth}px`;
  iron_icon.style.height = `${window.innerHeight}px`;
  
  thor_icon.style.width = `${window.innerWidth}px`;
  thor_icon.style.height = `${window.innerHeight}px`;
  
  hulk_icon.style.width = `${window.innerWidth}px`;
  hulk_icon.style.height = `${window.innerHeight}px`;
  
  hawk_icon.style.width = `${window.innerWidth}px`;
  hawk_icon.style.height = `${window.innerHeight}px`;
  
  widow_icon.style.width = `${window.innerWidth}px`;
  widow_icon.style.height = `${window.innerHeight}px`;

  series.style.width = `${window.innerWidth}px`;
  series.style.height = `${window.innerHeight}px`;


})();
  

(function mainLogo() {
  avengers.style.marginTop = `${avengers.offsetHeight / 1.3}px`
})();


window.addEventListener('scroll', function() {
  // 메인 영역
  if(scrollY > 0 && scrollY < 300) scrollTo(0, captain_icon.offsetTop);
  if(scrollY > captain_icon.offsetTop - 300 && scrollY < captain_icon.offsetTop) scrollTo(0, mainBlack.offsetTop);

  // 캡틴 영역
  if(scrollY > captain_icon.offsetTop && scrollY < captain_icon.offsetTop + 300) scrollTo(0, iron_icon.offsetTop);
  if(scrollY > iron_icon.offsetTop - 300 && scrollY < iron_icon.offsetTop) scrollTo(0, captain_icon.offsetTop);

  // 아이언맨 영역
  if(scrollY > iron_icon.offsetTop && scrollY < iron_icon.offsetTop + 300) scrollTo(0, thor_icon.offsetTop);
  if(scrollY > thor_icon.offsetTop - 300 && scrollY < thor_icon.offsetTop) scrollTo(0, iron_icon.offsetTop);

  // 토르 영역
  if(scrollY > thor_icon.offsetTop && scrollY < thor_icon.offsetTop + 300) scrollTo(0, hulk_icon.offsetTop);
  if(scrollY > hulk_icon.offsetTop - 300 && scrollY < hulk_icon.offsetTop) scrollTo(0, thor_icon.offsetTop);
  
  // 헐크 영역
  if(scrollY > hulk_icon.offsetTop && scrollY < hulk_icon.offsetTop + 300) scrollTo(0, hawk_icon.offsetTop);
  if(scrollY > hawk_icon.offsetTop - 300 && scrollY < hawk_icon.offsetTop) scrollTo(0, hulk_icon.offsetTop);
  
  // 호크아이 영역
  if(scrollY > hawk_icon.offsetTop && scrollY < hawk_icon.offsetTop + 300) scrollTo(0, widow_icon.offsetTop);
  if(scrollY > widow_icon.offsetTop - 300 && scrollY < widow_icon.offsetTop) scrollTo(0, hawk_icon.offsetTop);
  
  // 위도우 영역
  if(scrollY > widow_icon.offsetTop && scrollY < widow_icon.offsetTop + 300) scrollTo(0, series.offsetTop);
  if(scrollY > series.offsetTop - 300 && scrollY < series.offsetTop) scrollTo(0, widow_icon.offsetTop);
})


  
mainBlack.addEventListener('click', function(e) {
  scrollTo(0, eval(e.target.classList.value).offsetTop);
});


function myMove() {
  let a = 0;
  let b = -58;
  let id = setInterval(frame, 5);
  function frame() {
    if (a === 65) {
      clearInterval(id);
    } else {
      a++; 
      b++;
      captain_icon1.style.top = a + '%';
      captain_icon1.style.left = b + '%';
    }
  }
}

myMove(captain_icon1);




// 써니형님

jQuery(document).ready(function ($) {
  //set here the speed to change the slides in the carousel
  $('#myCarousel').carousel({
    interval: 5000
  });

  //Loads the html to each slider. Write in the "div id="slide-content-x" what you want to show in each slide
  $('#carousel-text').html($('#slide-content-0').html());

  //Handles the carousel thumbnails
  $('[id^=carousel-selector-]').click(function () {
    var id = this.id.substr(this.id.lastIndexOf("-") + 1);
    var id = parseInt(id);
    $('#myCarousel').carousel(id);
  });

  $('#myCarousel').on('slid.bs.carousel', function (e) {
    var id = $('.item.active').data('slide-number');
    $('[id^=carousel-selector-]').removeClass('redhover');
    $('#carousel-selector-' + id).addClass('redhover');
    $('#carousel-text').html($('#slide-content-' + id).html());
  });

});