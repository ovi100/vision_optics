 /*------------------------------------
 *Author:MD ABU SAYED
 *Template:Storrea Light
 *Version:1.0
 *-------------------------------------
 */


$(document).ready(function(){

	// $(window).scroll(function(){
	//     if ($(this).scrollTop()>150){
	//       $('.menu').addClass('fixed-menu');
	      
	//     } 
	//     else {
	//       $('.menu').removeClass('fixed-menu');
	//     }
 //  	});

  	// if ($(window).width()<768){
   //    $('.col-logo').addClass('order-12');
   //    $('.col-icon').addClass('order-1');
      
   //  } 
   //  else {
   //    $('.col-logo').removeClass('order-12');
   //    $('.col-icon').removeClass('order-1');
   //  }


   // Start Home Slider Js

 //    $('#main-slider').owlCarousel({
 //    	// autoplay:true,
 //    	autoplayHoverPause:true,
 //    	dots:true,
 //    	items:1,
 //    	loop:true,
	//     nav:false,
	//     responsive:{
	//         0:{
	//             items:1
	//         },
	//         600:{
	//             items:1
	//         },
	//         768:{
	//             items:1
	//         }
	//     },
	//     slideBy:1,
	//     smartSpeed:1800
	// })

    // End Home Slider Js

    $('.btn-qty').on('click',function(e){
    	e.preventDefault();
    
    	var button = $(this);
      	var oldValue = button.parent().find("input").val();
      	var newVal;
    
    	if (button.text() == "+") {
    	  	newVal = parseFloat(oldValue) + 1;
    	} else{
    		if (oldValue > 0) {newVal = parseFloat(oldValue) - 1;} else {newVal = 0;}
    	}
        button.parent().find("input").val(newVal);
    });

    $('#zoom_01').elevateZoom({
		cursor: "default",
		borderSize: 1,
		responsive: true,
		zoomLens: false,
		zoomWindowWidth: 900,
		zoomWindowFadeIn: 500,
		zoomWindowFadeOut: 750
   	}); 


});


