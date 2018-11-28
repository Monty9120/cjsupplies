$(function(){
	

	// var oFormAnime1 = anime({
	// 	targets:'.section2 .form-group label',
	// 	translateX: {
	// 		value:['100vw',0],
	// 		delay:function(el,i,l){
	// 			return 100*i;
	// 		},
	// 	},

	// 	// translateY: {
	// 	// 	value:['100vw',0],
	// 	// 	delay:function(el,i,l){
	// 	// 		return 100*i;
	// 	// 	},
	// 	// },


	// 	duration:2000,
	// 	easing:'easeInOutQuart'
	// });
	
	// var oFormAnime2 = anime({
	// 	targets:'.section2 .form-group input',
	// 	translateX: {
	// 		value:['-100vw',0],
	// 		delay:function(el,i,l){
	// 			return 100*i + 1000;
	// 		},
	// 	},
	// 	duration:2000,
	// 	easing:'easeInOutQuart',

	// });

	var oTimeline = anime.timeline({
		easing:'easeInOutQuart',
		duration:2000,
		autoplay: false,
		complete: function(anim) {
			oButtonAnimate.play();
		}
   

	});
		
		oTimeline.add({
			targets: '.section2 .form-group label',
			translateX: {
				value:['100vw',0],
				delay:function(el,i,l){
				return 100*i;
				},
			},
			opacity: {
				value:[0,1],
				delay:function(el,i,l){
				return 100*i;
				},
			},
			offset:0

		});

		
		oTimeline.add({
			targets: '.section2 .form-group input',
			translateX: {
				value:['-100vh',0],
				delay:function(el,i,l){
					return 100*i;
				},
			},
			translateX: {
				value:['-100vh',0],
				delay:function(el,i,l){
					return 100*i;
				},
			},
			offset:0,
		});


		var oButtonAnimate = anime({
			targets: '.section2 .btn',
			translateX:['-100',0],
			opacity: [0,1],
			scale:[3,1],
			duration: 3000,
			elasticity: 500,

			autoplay:false
		})
	

	$(document).on('scroll',function(){
		var iScrollTop = $(document).scrollTop();

		oTimeline.seek((oTimeline.duration) * ((iScrollTop - 300)/500));
	});




	var oBallRollnLeft = anime({
		targets:'.fa-basketball-ball',
		translateX:['-30vh', 0],
		translateY:['-30vh',-8,0],
		easing: 'easeInOutQuart',
		duration:3000,
		rotate:'3turn',
		
		scale:{
			value: [1.2,1],
			delay: 3000,
			duration: 1000,
		}


	});

	$(document).on('scroll',function(){
	
	var iScrollTop = $(document).scrollTop();	
	if (offset) {
		// statement
	} else {
		// statement
	}
		var offset = $('.a3colwrap').offset();


	});
		
	

});