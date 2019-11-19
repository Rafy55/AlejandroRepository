$(document).ready(function(){

  console.log('THE DOCUMENT IS READY! DO SOMETHING AWESOME!');

  $('.dissappear').hover(function() {
$(".ghost1").hide(500); });




$('.scared').click(function() {
  $(".ghost2").animate({left: '250px'});
});

$('.boo').dblclick(function() {
 $( ".ghost3" ).fadeIn( "slow" );
});
});
