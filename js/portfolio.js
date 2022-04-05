$(document).ready(function(){
  var portraitTotal = $(".portrait").length;

  console.log(portraitTotal);

  $(".close-expand").click(function(){
    $(".expanded-tiles").fadeOut(200);
  });

  for(var i=0; i < portraitTotal; i++){
    $(".portrait").eq(i).addClass("pt-"+i);
    $(".expand").eq(i).addClass("expand-pt-"+i);
  }

  $(".portrait").click(function(){
    for(var i = 0; i < portraitTotal; i++){
      var checkport = $(this).hasClass("pt-"+ i);
      if(checkport){
        $(".expand").css("display","none");
        $(".expanded-tiles").fadeToggle(200);
        $(".expand-pt-"+ i).css("display","block");
      }
    }
  });

});
