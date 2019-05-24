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
const hawk_icon1 = document.querySelector('.hawk_icon');
const hulk_icon1 = document.querySelector('.hulk_icon');
const iron_icon1 = document.querySelector('.iron_icon');
const thor_icon1 = document.querySelector('.thor_icon');
const widow_icon1 = document.querySelector('.widow_icon');


avengersMove(avengers);

setTimeout(function(){captainMove(captain_icon1)}, 1800);
setTimeout(function(){hawkMove(hawk_icon1)}, 2500);
setTimeout(function(){hulkMove(hulk_icon1)}, 3000);
setTimeout(function(){ironMove(iron_icon1)}, 3800);
setTimeout(function(){thorMove(thor_icon1)}, 4500);
setTimeout(function(){widowMove(widow_icon1)}, 5000);





// view포트 기준 사이즈 재정의
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
  

// 스크롤시 각 영역으로 이동
// window.addEventListener('scroll', function() {
//   // 메인 영역
//   if(scrollY > 0 && scrollY < 300) scrollTo(0, captain_icon.offsetTop);
//   if(scrollY > captain_icon.offsetTop - 300 && scrollY < captain_icon.offsetTop) scrollTo(0, mainBlack.offsetTop);

//   // 캡틴 영역
//   if(scrollY > captain_icon.offsetTop && scrollY < captain_icon.offsetTop + 300) scrollTo(0, iron_icon.offsetTop);
//   if(scrollY > iron_icon.offsetTop - 300 && scrollY < iron_icon.offsetTop) scrollTo(0, captain_icon.offsetTop);

//   // 아이언맨 영역
//   if(scrollY > iron_icon.offsetTop && scrollY < iron_icon.offsetTop + 300) scrollTo(0, thor_icon.offsetTop);
//   if(scrollY > thor_icon.offsetTop - 300 && scrollY < thor_icon.offsetTop) scrollTo(0, iron_icon.offsetTop);

//   // 토르 영역
//   if(scrollY > thor_icon.offsetTop && scrollY < thor_icon.offsetTop + 300) scrollTo(0, hulk_icon.offsetTop);
//   if(scrollY > hulk_icon.offsetTop - 300 && scrollY < hulk_icon.offsetTop) scrollTo(0, thor_icon.offsetTop);
  
//   // 헐크 영역
//   if(scrollY > hulk_icon.offsetTop && scrollY < hulk_icon.offsetTop + 300) scrollTo(0, hawk_icon.offsetTop);
//   if(scrollY > hawk_icon.offsetTop - 300 && scrollY < hawk_icon.offsetTop) scrollTo(0, hulk_icon.offsetTop);
  
//   // 호크아이 영역
//   if(scrollY > hawk_icon.offsetTop && scrollY < hawk_icon.offsetTop + 300) scrollTo(0, widow_icon.offsetTop);
//   if(scrollY > widow_icon.offsetTop - 300 && scrollY < widow_icon.offsetTop) scrollTo(0, hawk_icon.offsetTop);
  
//   // 위도우 영역
//   if(scrollY > widow_icon.offsetTop && scrollY < widow_icon.offsetTop + 300) scrollTo(0, series.offsetTop);
//   if(scrollY > series.offsetTop - 300 && scrollY < series.offsetTop) scrollTo(0, widow_icon.offsetTop);
// })


// 클릭시 각 영역으로 이동  
// mainBlack.addEventListener('click', function(e) {
//   scrollTo(0, eval(e.target.classList.value).offsetTop);
// });

mainBlack.addEventListener('click', function(e) {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: eval(e.target.classList.value).offsetTop
  })
});


// 각 애니매이션들

// 메인로고
  function avengersMove() {
    let x = 350;
    let id = setInterval(frame, 3);

    function frame() {
      avengers.style.display = 'block';
      if (x === 65) {
        clearInterval(id);
      } else {
        x--; 
        avengers.style.width = x + '%';
      }
    }
  }

// 캡틴
function captainMove() {
  let x = 0;
  let y = -58;
  let id = setInterval(frame, 5);

  function frame() {
    captain_icon1.style.display = 'block';
    if (x === 65) {
      clearInterval(id);
    } else {
      x++; 
      y++;
      captain_icon1.style.top = x + '%';
      captain_icon1.style.left = y + '%';
    }
  }
}

// 호크
function hawkMove() {
  let x = 0;
  let y = -4;
  let id = setInterval(frame, 5);

  function frame() {
    hawk_icon1.style.display = 'block';
    if (x === 19) {
      clearInterval(id);
    } else {
      x++; 
      y++;
      hawk_icon1.style.top = x + '%';
      hawk_icon1.style.left = y + '%';
    }
  }
}

// 헐크
function hulkMove() {
  let y = -4;
  let id = setInterval(frame, 5);

  function frame() {
    hulk_icon1.style.display = 'block';
    if (y === 45) {
      clearInterval(id);
    } else {
      y++;
      hulk_icon1.style.top = y + '%';
    }
  }
}

// 아이언맨
function ironMove() {
  let y = 0;
  let id = setInterval(frame, 5);

  function frame() {
    iron_icon1.style.display = 'block';
    if (y === 16) {
      clearInterval(id);
    } else {
      y++;
      iron_icon1.style.top = y + '%';
    }
  }
}

// 토르
function thorMove() {
  let x = 0;
  let y = 0;
  let id = setInterval(frame, 5);

  function frame() {
    thor_icon1.style.display = 'block';
    if (y === 16) {
      clearInterval(id);
    } else {
      y++;
      x++;
      thor_icon1.style.top = y + '%';
      thor_icon1.style.right = x + '%';
    }
  }
}

// 토르
function widowMove() {
  let x = 0;
  let id = setInterval(frame, 100);

  function frame() {
    widow_icon1.style.display = 'block';
    if (x === 1) {
      clearInterval(id);
    } else {
      x += 0.1;
      widow_icon1.style.opacity = x;
    }
  }
}







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