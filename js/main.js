$('.mainSlider').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  pauseOnHover:false,
  pauseOnFocus:false,
});

$(window).on('scroll', function(){
  var sct = $(window).scrollTop();
  console.log(sct)
  sct > 0 ? $('.header').addClass('on')
      : $('.header').removeClass('on');

      sct > 300 ? $('.toTop').fadeIn(1000)
                  : $('.toTop').fadeOut()
});

$('.toTop').on('click', function(){
  $('html, body').animate({ scrollTop:0 }, 1000)
});

$('.mopen').on('click', function(){
  $(this).toggleClass('on');
  $('nav').toggleClass('on')
});

$('nav>ul>li>a').on('click', function(event){
  var sm = $(this).next().is('.smenu');
  sm && event.preventDefault();
  if($(window).width()<769){
    $('.smenu').stop().slideUp();
    $(this).next().stop().slideDown();
  }  
});

$(window).on('resize', function(){
  $('.smenu').removeAttr('style')
});

window.onload = function(){
  let bigImg = document.getElementById('big_img');
  let imgList = document.getElementsByClassName('small_img')[0];
  let smallImg = imgList.getElementsByTagName('img');

  for(let i = 0; i < smallImg.length; i++) {
    let num = i + 1; //수학적으로 계산
    let imgChange = this.src = 'img/'+ num + '.jpg';
    //문자 + 문자 = 문자문자
    //문자 + 1 + 1 = 문자11
    //1 + 1 = 2
    console.log(imgChange);
    smallImg[i].onmouseenter = function(){
      bigImg.src = imgChange;
    }
  }

  let eventImg1 = 'img/sns01.jpg';
  let eventImg2 = 'img/sns02.png';
  let eventImg3 = 'img/sns03.png';
  let eventImg4 = 'img/sns04.png';
  let eventImg5 = 'img/sns05.png';

  let eventImg = [eventImg1, eventImg2, eventImg3, eventImg4, eventImg5];

  let eventImgBig = document.getElementById('event_img');
  let eventBtn = document.getElementById('btn');
  let eventPageNum = document.getElementById('num');

  let numList = [1, 2, 3, 4, 5];
  
  let i = 0;
  // let num = 0;

  eventBtn.onclick = function() {
    i++;
    // num++;

    if (i >= eventImg.length) {
      i = 0;
      // num = 0;
    }

    eventImgBig.src = eventImg[i];
    // eventPageNum.innerText = numList[i];
    eventPageNum.innerText = i + 1;
  };

  let instagram = document.getElementsByClassName('xi-instagram')[0];
  let facebook = document.getElementsByClassName('xi-facebook')[0];
  let blogger = document.getElementsByClassName('xi-blogger')[0];
  let youtube = document.getElementsByClassName('xi-youtube-play')[0];
  let twitter = document.getElementsByClassName('xi-twitter')[0];
  
  instagram.onclick = function() {
    eventImgBig.src = eventImg1;
  }
  facebook.onclick = function() {
    eventImgBig.src = eventImg2;
  }
  blogger.onclick = function() {
    eventImgBig.src = eventImg3;
  }
  youtube.onclick = function() {
    eventImgBig.src = eventImg4;
  }
  twitter.onclick = function() {
    eventImgBig.src = eventImg5;
  }

} //end (문서를 다 실행한 후에 스크립트 실행)



    
    
 