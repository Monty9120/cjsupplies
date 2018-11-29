$(function(){
//Small Nav on Scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $('.nav').removeClass('smallnav')
  } else {
    $('.nav').addClass('smallnav')
  }
  prevScrollpos = currentScrollPos;
}

//Mobile nav
$('.fa-times').hide();
$('.fa-bars').on('click',function(){
	$('.nav-content').find('ul').css('transform','translateX(0px)')
	$('.nav-content').find('ul').css('opacity','1')
	$('.fa-bars').hide();
	$('.fa-times').show();
});
$('.fa-times').on('click',function(){
	$('.nav-content').find('ul').css('transform','translateX(300px)')
	$('.nav-content').find('ul').css('opacity','0')
	$('.fa-times').hide();
	$('.fa-bars').show();
});


//Title animation
var title = anime({
  targets: '.title',
  delay: 1000,
  translateY: 200,
  opacity:1,
  duration:1000,

});

});

