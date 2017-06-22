console.log('hi');

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
      var $a = $(".navbar-default .nav > li > a")
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $a.toggleClass('scrolled', $(this).scrollTop() > $a.height());
  });
});





$(document).ready(function () {
    $("nav").find("li").on("click", "a", function () {
        $('.navbar-collapse.in').collapse('hide');
    });
});

 $('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top-50
    }, 500);
   
});