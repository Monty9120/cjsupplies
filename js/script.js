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


//Mobile Nav Animation
var mobileMenu = anime({
  targets: '.nav-items li',
  translateX: '-100%',
  delay: function(el, i, l) { return i * 100; },
  autoplay:false,
  easing: 'easeOutExpo',

});

//Contact Pop In
var contactPop = anime({
  targets: '.contact-list div',
  scale:[0,1],
  translateY:['-400px',0],
  delay: function(el, i, l) { return i * 500; },
  duration:2000,
  autoplay: false,
  easing:'easeInOutExpo',
  elasticity:100,

});
//slide in text
  $(document).on('scroll',function(){
    var iScrollTop = $(document).scrollTop();

      var contactOffset = $('#contact').offset().top;

      if (iScrollTop >= contactOffset -400){
        contactPop.play();

      }
  });



// Typewriter Text Effect

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('title');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".title > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

});

