$(document).ready(function(){
  var mySlider = $('.slider').bxSlider({
    auto:true,
    controls:false,
    pager:false

  });
  $('.nextBtn').click(function(){
    mySlider.goToNextSlide();
    });
  $('.prevBtn').click(function(){
    mySlider.goToPrevSlide();
    });


  $(".toggleMenu").click(function(){
    const toggle = $(".toggleMenu").attr("class");

    if(toggle == "toggleMenu"){
      $(".toggleMenu").addClass("change");
      $(".menu_overlay").addClass("rgba");
      // $(".menu_overlay").animate({top:0});

      $(".menuTop").animate({top:0});

    }else {
      $(".toggleMenu").removeClass("change");
      $(".menu_overlay").removeClass("rgba");
      $(".menu_overlay").fadeIn()

      $(".menuTop").stop().animate({top:"-100%"});
    }
  });

  $(window).resize(function(){
    $(".menuTop").removeAttr("style");
    $(".toggleMenu").removeClass("change");
    $(".hWrapT").removeClass("fixed")
    $(".menu_overlay").removeClass("rgba");

  });

  $(".sliderSc").bxSlider({
    auto:true,
    controls:false,
    pager:false

  });
  $('.youtube').colorbox({
      iframe:true,
      innerWidth:700,
      innerHeight:393.75
  });


  let num = location.href.indexOf("=") + 1;  // 번호찾기
  let string = location.href.substring(num);  //문자열자르
  console.log(string);

   if( location.href.indexOf("=") > 0 ){
      view(string);
   }else{
      view(0)
   }

   function view(menu){
         $(".tab li").removeClass("active").eq(menu).addClass("active");
         $(".menu_contWrap .subCont").hide().eq(menu).show();
   }
   $(".tab li").click(function(){
      var menu = $(this).index();
      view(menu);
   });





  // $(".tab li").click(function(){
  //   let t = $(this).index();
  //   console.log(t)
  //
  //   $(".tab li").removeClass("active");
  //   $(this).addClass("active")
  //   $(".menu_contWrap .subCont").hide().eq(t).fadeIn();
  // });





  const menuPos = $(".hWrapT").offset().top;
  const topPos = $(".top").offset().top;

  $(".menuPos").html( menuPos + "px")
  $(window).scroll(function(){
    let scrollY = $(window).scrollTop();
    console.log(scrollY);
    $(".scrollY").html(scrollY + "px")

    if(menuPos < scrollY){

      $(".hWrapT").addClass("fixed")
    }else {
      $(".hWrapT").removeClass("fixed")
    }

    if(scrollY > topPos - 500 ){
      $(".top").addClass("view")
    }else {
      $(".top").removeClass("view")
    }
  });//scroll

  $(".top").click(function(){
    $("html,body").animate({scrollTop:0},1000);
  });
  new WOW().init();

});
