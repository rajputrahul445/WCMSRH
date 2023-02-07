
$( ".navbar-toggler, .cross-toggler" ).click(function() {
    $(".mainNav").toggleClass("active");
    $(".overLay").toggleClass("active");
  });


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 41) {
        $(".mainHeader").addClass("fixedHeader");
    }else{
    	$(".mainHeader").removeClass("fixedHeader");
    }
});

$(document).ready(function(){
    /**owl-slider-settings**/
      $('.slider').owlCarousel({
          loop:true,
          margin:0,
          nav:true,
          center: false,
          autoplay:true,
              autoplayTimeout:5000,
              navText : ["<img src='images/arrow-left.png'>","<img src='images/arrow-right.png'>"],
              dots:true,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
      });
      $('.latest-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        center: false,
        autoplay:false,
            autoplayTimeout:5000,
            navText : ["<img src='images/left-btn.png'>","<img src='images/right-btn.png'>"],
            dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.updates-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        center: false,
        autoplay:false,
            autoplayTimeout:5000,
            navText : ["<img src='images/left-btn-white.png'>","<img src='images/right-btn-white.png'>"],
            dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.testimonial-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        center: false,
        autoplay:true,
            autoplayTimeout:5000,
            navText : ["<img src='images/left-btn.png'>","<img src='images/right-btn.png'>"],
            dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    /**Announcement-slider-settings**/
      $('.announcementSlider').owlCarousel({
          loop:true,
          margin:10,
          nav:true,
          autoplay:true,
              autoplayTimeout:5000,
              navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
              dots:false,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:2
              }
          }
      });
      
    });


