$(document).ready(function(){
  $(".labelImg").click(function(){
    var foto = $(this).css('background-image');
    $(".imgFull").css('background-image', foto);
   // $(".lightbox").css("display","block");
    $(".lightbox").fadeToggle(300);

  });

  $(".close-btn").click(function(){
   // $(this).css("display","none");
    $(".lightbox").fadeToggle(300);
 });
});