$(document).ready(function(){

  let navOffset = $(" #header .navbar").height()+100;

  $(window).scroll(function(){
    hScroll();
  });
  function hScroll(){
    let scroll = $(window).scrollTop();
    if( navOffset < scroll ){
      $("#header .navbar").addClass("fixed-top");
    }else {
      $("#header .navbar").removeClass("fixed-top");

    }
    }
    hScroll();


 $(".sliderM").bxSlider({
    auto:true,
    controls:false,

  });


  $(".release #slider2").owlCarousel({
    center:true,
    loop:true,
    margin:40,
    autoplay:true,
    responsive:{
      0:{items:3},
      600:{items:3},
      1000:{items:5}

    }
  });
    $(".view .popup_link").magnificPopup({type:"image"});
    $(".picture .popup_link").magnificPopup({type:"image"});

  const btns = $(".management .btn-group button");
  btns.click(function(){
    let i = $(this).index();
    console.log(i);
    btns.removeClass("active");
    btns.eq(i).addClass("active")

    let selector  = btns.eq(i).attr("data-filter");
    // console.log(selector);

    $(".management .view").isotope({
      filter:selector
    })



  });
  $(".youtube").colorbox({
      iframe:true,
      innerWidth:700,
      innerHeight:393.75
  });


  // let hoverSize = $( ".owl-item.cloned.active " ).width();
  // console.log(hoverSize);

  // $(".tab li").click(function(){
  //   let t = $(this).index();
  //   console.log(t)
  //
  //   $(".tab li").removeClass("active2");
  //   $(this).addClass("active2")
  //   $(".subCont_pageWrap .subCont_page").hide().eq(t).show();
  // });
  //

  $(".subCont_pageWrap .subCont_page").hide().eq(0).show();

  $(".tab li").click(function(){
    let t = $(this).index();
    console.log(t)

    $(".tab li").removeClass("active2");
    $(this).addClass("active2")
    $(".subCont_pageWrap .subCont_page").hide().eq(t).fadeIn();
  });


  $(".notice .moon").hover(function(){
    $(this).removeClass("moon")
  },function(){
    $(this).addClass("moon")
  });




  let subOffset = $(" .artist_subBtnG .sub_btnGCent").height()+100;

  $(window).scroll(function(){
    lScroll();
  });
  function lScroll(){
    let scroll = $(window).scrollTop();
    if( subOffset < scroll ){
      $(".artist_subBtnG .sub_btnGCent").addClass("fixed");
    }else {
      $(".artist_subBtnG .sub_btnGCent").removeClass("fixed");

    }
    }
    lScroll();

new WOW().init();





});
