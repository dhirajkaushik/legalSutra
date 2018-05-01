(function($, document, window){

	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});
    /*$(".hero").css( "border", "9px solid red" );

		$(".hero").flexslider({
			directionNav: false,
			controlNav: true,
		});*/

    $('.iAgreePopup').fadeIn();

    var popupContainerHeight = $('.iAgreePopup .popupContainer').height();
    var popupContainerWidth = $('.iAgreePopup .popupContainer').width();
    var popupContainerMarginTop = '-'+(popupContainerHeight / 2)+'px';
    var popupContainerMarginLeft = '-'+(popupContainerWidth / 2)+'px';

    $('.iAgreePopup .popupContainer').css({'margin-top':popupContainerMarginTop, 'margin-left':popupContainerMarginLeft});

    $('.iAgreePopup .agree').click(function(){
        document.cookie="rememberMe1126=yes;expires=Wed, 31 Jan 2018 15:33:47 UTC;path=/";
        $('.iAgreePopup').fadeOut();
    });

    $(window).resize(function(){
        var popupContainerHeight = $('.iAgreePopup .popupContainer').height();
        var popupContainerWidth = $('.iAgreePopup .popupContainer').width();
        var popupContainerMarginTop = '-'+(popupContainerHeight / 2)+'px';
        var popupContainerMarginLeft = '-'+(popupContainerWidth / 2)+'px';
        $('.iAgreePopup .popupContainer').css({'margin-top':popupContainerMarginTop, 'margin-left':popupContainerMarginLeft});
    });
    /*
		var map = $(".map");
		var latitude = map.data("latitude");
		var longitude = map.data("longitude");
		if( map.length ){

			map.gmap3({
				map:{
					options:{
						center: [latitude,longitude],
						zoom: 15,
						scrollwheel: false
					}
				},
				marker:{
					latLng: [latitude,longitude],
				}
			});

		}*/
	});

  /*
	$(window).load(function(){

	});*/


})(jQuery, document, window);
