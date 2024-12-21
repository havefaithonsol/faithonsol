(function($) {
  "use strict";

jQuery(document).on("ready", function(){
   console.log('ding');
//    var wow = new WOW(
//            {
//              boxClass: 'wow', // animated element css class (default is wow)
//              animateClass: 'animated', // animation css class (default is animated)
//              offset: '-200px', // distance to the element when triggering the animation (default is 0)
//              mobile: true, // trigger animations on mobile devices (default is true)
//              live: true        // act on asynchronously loaded content (default is true)
//            }
//    );
//
//    new WOW().init();
    
    var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);


    wow.init();


  var winWidth = $(window).outerWidth();
    var winHeight = $(window).outerHeight();
// set initial div height / width
//    $('.wrapper').css({
//      width: winWidth+100,
//      height: winHeight
//    });
// make sure div stays full width/height on resize
    $(window).resize(function () {
 var winWidth = $(window).outerWidth();
    var winHeight = $(window).outerHeight();

//      $('.wrapper').animate({
//        'width': winWidth+100,
//        'height': winHeight
//      },0);
    });

//    $('#clouds').pan({fps: 30, speed: 2, dir: 'left'});
   $('#grass').plaxify({"xRange":20}) ;  
   $('#grass2').plaxify({"xRange":-40}) ;  
    
 
    $.plax.enable(); 
    swingHand();
       function swingHand(){
       
        if(!$('#hand').hasClass('down')){//its up
                                   
            $('#hand').animate({
             down:-10
            },1500,function(){
               $('#hand').toggleClass('down');
            });    
        }else{//its down
                                   
          $('#hand').animate({
               down:-20
            },1500,function(){
               $('#hand').toggleClass('down');
            });    
                                   
        }
       
                        
        setTimeout(swingHand, 1500);
    }
                            
    function getImgSize(el, imgSrc) {
      var newImg = new Image();
      newImg.onload = function() {
        var height = newImg.height;
        var width = newImg.width;

        el.css('height', height);

      };
      newImg.src = imgSrc;
    }

    if ($('.bg-image[data-bg-image]').length > 0) {
      $('.bg-image[data-bg-image]').each(function() {
        var el = $(this);
        var sz = getImgSize(el, el.attr("data-bg-image"));
        el.css('background-position', 'center').css('background-image', "url('" + el.attr("data-bg-image") + "')").css('background-size', 'cover').css('background-repeat', 'no-repeat');
      });
    }

  


    
    
  });




  

})(jQuery);

