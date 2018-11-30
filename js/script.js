$(function(){
//Small Nav on Scroll
if ($(window).width() >= 700) {

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      $('.nav').removeClass('smallnav')
    } else {
      $('.nav').addClass('smallnav')
      // $('.nav-content').find('ul').css('opacity','0')

    }
    prevScrollpos = currentScrollPos;
  }


}



//Mobile nav
$('.fa-times').css('transform','scale(0)')

var isFirst = true;

$('.fa-bars').on('click',function(){
	// $('.nav-content').find('ul').css('transform','translateX(0px)')
	$('.nav-content').find('ul').css('opacity','1')


	mobileMenu.play();
  if(isFirst == false){
    mobileMenu.reverse();
  }
  isFirst = false;


	$('.fa-bars').css('transform','scale(0)');
	$('.fa-times').css('transform','scale(1)')
});


$('.fa-times').on('click',function(){

	mobileMenu.play();
  mobileMenu.reverse();
	$('.fa-times').css('transform','scale(0)');
	$('.fa-bars').css('transform','scale(1)');

	
});



var mobileMenu = anime({
  targets: '.nav-items li',
  translateX: '-100%',
  delay: function(el, i, l) { return i * 100; },
  // direction: 'alternate',
  // delay:200,
  // loop: true,
  autoplay:false,
  easing: 'easeOutExpo',


});




});

