$(document).ready(function(){

    $(".tab-content div:first").show(); //tab contentleri css ile gizledim


     $(".menu li").click(function(){
    
       // 1.Yol.. index uzerinden gitme...
    
         var indis = $(this).index(); //menu lilerindeki sırayı tutuyorum.
    
         $(".tab-content div").hide(); // tüm divleri gizleyip
         $(".tab-content div:eq(" + indis +  ")").show(); //indise göre yani li nin index sırasında div-contenti gösteriyoruz.
     // artık tab li ye tıklanıldığında aynı indexte olan tab content gösterilir
        $(".menu li").removeClass("active"); //active classını gecıcı olarak sılıyorum
         $(".menu li:eq(" + indis + ")").addClass("active"); // tab liye tıklanıldığında ındıse göre divlere bu classı verıyorum
    
 })

})

$(document).ready(function(){

  $(".slider li:first").show();

  $(".navigation li").click(function(){

      var index = $(this).index();

      $(".slider li").hide();
      $(".slider li:eq(" + index + ")").fadeIn(500);

      $(".navigation li a").removeClass("active");
      $(this).find("a").addClass("active");

  })


})