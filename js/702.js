

$(function(){

    $("body").niceScroll({
        cursorcolor:"#f7600e",
        cursorwidth:"7px",
        zindex:5
      });   

    
    /****************************************************************/

    // $(".header").heigth($(window).heigth());

    /****************************************************************/

      $(".header .arrow i").click(function(){

        $("html, body").animate({

          scrollTop: $(".feat").offset().top

        }, 1000);
      });

    /****************************************************************/

    $(".our-work .show").click(function(){
      $(".our-work .hidden").fadeIn(2000);
      
    });
    /****************************************************************/

   
    $(".testim i").click(function(){
      
      if($(this).hasClass("right")){

        

        $(".testim .active").fadeOut(300, function(){
          
          $(this).removeClass("active").next(".client").addClass("active").fadeIn();

          if($(".client:last").hasClass("active")){
            $(".testim .right").fadeOut()
          }else{
            $(".testim .right").fadeIn()
          }
          
        });
        

      }else{

        $(".testim .active").fadeOut(300, function(){
          $(this).removeClass("active").prev(".client").addClass("active").fadeIn();

          if($(".client:first").hasClass("active")){
            $(".testim .left").fadeOut()
          }else{
            $(".testim .left").fadeIn()
          }

          
        });

      }

    });



    /****************************************************************/
    /****************************************************************/
    /****************************************************************/


});

