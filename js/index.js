$(document).ready(function () {

  $(".trigger").click(function(){
    $(this).stop().toggleClass("active");
    $(".gnb").slideToggle();
  });

  $(window).resize(function () {

    let w = $(window).width();

    if (w > 768) {
      $(".gnb").removeAttr("style")
    }

  });

});