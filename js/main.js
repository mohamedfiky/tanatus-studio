

$(function(){



  /////////////////////////////////////////////////////////////////

  const menuBarIcon = document.querySelector(".header .nav .menu-bar i");
  const toggleMenu = document.querySelector(".header .nav .menu-bar .toggle-menu");
  
  
  menuBarIcon.addEventListener("click", ()=>{
  
      toggleMenu.classList.toggle("open");
  
  });

  /****************************************************************/

      $(".header .arrow i").click(function(){

        $("html, body").animate({

          scrollTop: $(".feat").offset().top

        }, 1000);
      });

    /****************************************************************/

    let showHideBtn = document.querySelector(".our-work .show-hide");
    let hiddenWorkItems = document.querySelectorAll(".our-work .item-box .item.hidden");

    showHideBtn.addEventListener("click", ()=>{

      if (showHideBtn.innerHTML == "show more"){
        hiddenWorkItems.forEach((item)=>{
          item.classList.add("shown")
        });
        showHideBtn.innerHTML = "show less";

      }else{
        hiddenWorkItems.forEach((item)=>{
          item.classList.remove("shown")
        });
        showHideBtn.innerHTML = "show more";
      }
      
    });
    



/***************************************************************************/



    $(".testim .right").click(function(){
      if($(".client:last").hasClass("active")){
        $(".testim .active").fadeOut(100, function(){
          
          $(this).removeClass("active");
          $(".client:first").addClass("active").fadeIn(100);
  
        });
      }else{
        $(".testim .active").fadeOut(100, function(){
          
          $(this).removeClass("active").next(".client").addClass("active").fadeIn(100);
  
        });
      }
    });

    ////////////////////////

    $(".testim .left").click(function(){
      if($(".client:first").hasClass("active")){
        $(".testim .active").fadeOut(100, function(){
          
          $(this).removeClass("active");
          $(".client:last").addClass("active").fadeIn(100);
  
        });
      }else{
        $(".testim .active").fadeOut(100, function(){
          
          $(this).removeClass("active").prev(".client").addClass("active").fadeIn(100);
  
        });
      }
    });


    /****************************************************************/
    /****************************************************************/
    /****************************************************************/


});

