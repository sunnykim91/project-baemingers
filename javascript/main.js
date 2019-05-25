const mainBlack = document.querySelector('.main');
const avengers = document.querySelector('.series_icon');
const captain_icon = document.querySelector('.main-captain');
const iron_icon = document.querySelector('.main-iron');
const thor_icon = document.querySelector('.main-thor');
const hulk_icon = document.querySelector('.main-hulk');
const hawk_icon = document.querySelector('.main-hawk');
const widow_icon = document.querySelector('.main-widow');
const series_icon = document.querySelector('.series');

const captain_icon1 = document.querySelector('.captain_icon');
const hawk_icon1 = document.querySelector('.hawk_icon');
const hulk_icon1 = document.querySelector('.hulk_icon');
const iron_icon1 = document.querySelector('.iron_icon');
const thor_icon1 = document.querySelector('.thor_icon');
const widow_icon1 = document.querySelector('.widow_icon');

const text = document.querySelector('.text');


avengersMove(avengers);

setTimeout(function(){captainMove(captain_icon1)}, 4000);
setTimeout(function(){hawkMove(hawk_icon1)}, 5800);
setTimeout(function(){hulkMove(hulk_icon1)}, 7000);
setTimeout(function(){ironMove(iron_icon1)}, 8600);
setTimeout(function(){thorMove(thor_icon1)}, 9000);
setTimeout(function(){widowMove(widow_icon1)}, 10100);





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

  series_icon.style.width = `${window.innerWidth}px`;
  series_icon.style.height = `${window.innerHeight}px`;
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

mainBlack.addEventListener('click', function(e) {
  console.log(e.target);
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
    let id = setInterval(frame, 15);

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
  let id = setInterval(frame, 20);

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
  let id = setInterval(frame, 20);

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
  let id = setInterval(frame, 20);

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
  let id = setInterval(frame, 20);

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
  let id = setInterval(frame, 20);

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

// 위도우
function widowMove() {
  let x = 0;
  let id = setInterval(frame, 100);

  function frame() {
    widow_icon1.style.display = 'block';
    if (x > 1) {
      clearInterval(id);
    } else {
      x += 0.1;
      widow_icon1.style.opacity = x;
    }
  }
}


text.innerHTML += `<table class="captain-info" style="top: ${captain_icon.offsetTop+300}px; right: 60px;">
<tr>
  <td>본명 : 스티브 로져스</td>
</tr>
<tr>
  <td>신장 : 188cm</td>
</tr>
<tr>
  <td>체중 : 100kg</td>
</tr>
<tr>
  <td>직업 : <br>미국 보안책임자, 과거 미합중국 육군
  보병대위, 일러스트레이터, 실드 요원</td>
</tr>
</table>
<table class="ironman-info" style="top: ${iron_icon.offsetTop+300}px; right: 60px;">
<tr>
  <td>본명 : 앤서니 에드워드 "토니" 스타크</td>
</tr>
<tr>
  <td>신장 : 185cm (맨몸) / 198cm (갑옷 착용)</td>
</tr>
<tr>
  <td>체중 : 102kg (맨몸) / 193kg (갑옷 착용)</td>
</tr>
<tr>
  <td>직업 : <br>1.플레이보이,억만장자,대인배,나르시시스트+자기애+소시오패스+자기 중심성 성격자<br>
  2.사업가[+오너(소유자),CEO,기업가]<br>
  3.발견자,창조자,개척자,선구자,확장자,혁신가,과학(+공학 과학,수학,기술,예술)의 그자체(아이콘),엔지니어(공학자,기술자,정비공), 발명가, ,연구자,탐구자,학자,미래학자,과학자(+매드 사이언티스트),개발자,<br>
  4.전 정치인=전 실드 국장,전 국방부 장관,리더(지도자중 지도자)</td>
</tr>
</table>
<table class="thor-info" style="top: ${thor_icon.offsetTop+300}px; right: 60px;">
<tr>
  <td>본명 : 토르 오딘슨</td>
</tr>
<tr>
  <td>국적 : 아스가르드</td>
</tr>
<tr>
  <td>나이 : 약 1500세 전후</td>
</tr>
<tr>
  <td>직위 : <br>아스가르드 제1왕자, 아스가르드의 왕</td>
</tr>
</table>
<table class="hulk-info" style="top: ${hulk_icon.offsetTop+300}px; right: 60px;">
<tr>
  <td>본명 : 로버트 브루스 배너</td>
</tr>
<tr>
  <td>나이 : 49세</td>
</tr>
<tr>
  <td>소속 : 컬버 대학교 연구원, 어벤져스</td>
</tr>
<tr>
  <td>직위 : 박사</td>
</tr>
</table>
<table class="hawk-info" style="top: ${hawk_icon.offsetTop+300}px; right: 60px;">
<tr>
  <td>본명 : 클린튼 프랜시스 바튼</td>
</tr>
<tr>
  <td>신장 : 178cm</td>
</tr>
<tr>
  <td>체중 : 82kg</td>
</tr>
<tr>
  <td>직업 : S.H.I.E.L.D. 요원</td>
</tr>
</table>
<table class="widow-info" style="top: ${widow_icon.offsetTop+300}px; right: 60px;">
<tr>
  <td>본명 : 나탈리야 알리야노브나 로마노바</td>
</tr>
<tr>
  <td>국적 :소비에트 연방/러시아 미국</td>
</tr>
<tr>
  <td>나이 : 38세</td>
</tr>
<tr>
  <td>직업 : 쉴드 요원</td>
</tr>
</table>
`;







// 써니형님

jQuery(document).ready(function ($) {
  //set here the speed to change the slides in the carousel
  $('#myCarousel').carousel({
    interval: 2000
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