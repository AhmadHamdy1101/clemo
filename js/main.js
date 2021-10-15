//humburger menu
var openMenu = document.querySelector(".menu-re");
var menu = document.querySelector("nav");
var closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click",function(){
  menu.style.display = "flex";
  closeMenu.style.display = "block";
  openMenu.style.display = "none";
  
});
closeMenu.addEventListener("click",function(){
  menu.style.display = "none";
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
})







var slides = document.querySelectorAll('.slides');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

    // Javascript for image slider manual navigation
    var manualNav = function(manual){
      slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });

      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    // Javascript for image slider autoplay navigation
    var repeat = function(activeClass){
      let active = document.getElementsByClassName('active');
      let i = 1;

      var repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          });

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
      }, 10000);
      }
      repeater();
    }
    repeat();




    const swiper = new Swiper('.swiper', {
      // Optional parameters
      loop: true,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
     
    });




    //animation
    AOS.init();
//scroll
    $("body").niceScroll({
      cursorcolor:"#ffe1bd",
      cursorwidth:"10px",
      scrollspeed: 40,
      autohidemode:false,
    });