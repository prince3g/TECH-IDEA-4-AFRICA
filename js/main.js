  
 $('.hero-owl').owlCarousel({
      items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        nav: false,
        dots: true,
        navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
        smartSpeed: 1000,
        // stagePadding: 0,
        autoplay: true,
        slideTransition: 'linear',
        // autoplayTimeout: 3000,
        autoplaySpeed: 2000,
        autoplayHoverPause: false
    });


function set_time(){
  setTimeout(function(){
    $('.ceo-sec').addClass('show-ceo-sec');
},2000);
    setTimeout(function(){
    $('.ceo-sec').removeClass('show-ceo-sec');
},50000);
  
}

 $(document).ready(function(){
    $('.close-ceo-sec').click(function(){
    $('.ceo-sec').removeClass('show-ceo-sec');
    });
  });


      $(document).ready(function(){
    $('.nav-togler').click(function(){
      $('.site-nav').toggleClass('toggle-nav');
    });
  });

       $(document).ready(function(){
    $('.nav-body').click(function(){
      $('.site-nav').removeClass('toggle-nav');
    });
  });

       $(document).ready(function(){
    $('.a-search').click(function(){
      $('.search-sec').addClass('show-search-sec');
    });
  });

              $(document).ready(function(){
    $('.ma-search').click(function(){
      $('.search-sec').addClass('show-search-sec');
    });
  });
       $(document).ready(function(){
    $('.r-search').click(function(){
      $('.search-sec').removeClass('show-search-sec');
    });
  });






       window.addEventListener('scroll', () => {
  const movingtext = document.getElementById("movingtext");
  const scrolled = window.pageYOffset;
  //feel free to play with this value to change the speed of the transform ( the `* 3` part)
  const left = scrolled * 1;

  movingtext.style.transform = `translate3d(-${left}px, 0px, 0px)`;
   movingtext.style.transition = `1s`;
})


