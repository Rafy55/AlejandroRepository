$(document).ready(function(){

  console.log('THE DOCUMENT IS READY! DO SOMETHING AWESOME!');

  $("h1").click(function(){
   $("h1").animate({height: 'toggle'});
 });


$('.scared').click(function() {
  $(".ghost2").animate({left: '250px'});
});

$('.boo').dblclick(function() {
 $( ".ghost3" ).fadeIn( "slow" );
});
});
