/*

Responsive Mobile Menu v1.0
Plugin URI: responsivemobilemenu.com

Author: Sergio Vitov
Author URI: http://xmacros.com

License: CC BY 3.0 http://creativecommons.org/licenses/by/3.0/

*/

function responsiveMobileMenu() {	
    $('.menu').each(function() {
        $(this).children('ul').addClass('menu-main-list');	// mark main menu list

        var $style = $(this).attr('data-menu-style');	// get menu style
        if ( typeof $style == 'undefined' ||  $style == false )
        {
            $(this).addClass('graphite'); // set graphite style if style is not defined
        }
        else {
            $(this).addClass($style);
        }
        var $width = 0;
        $(this).find('ul li').each(function() {
            $width += $(this).outerWidth();
        });

        if ($.support.leadingWhitespace) {
            //$(this).css('max-width' , $width*1.05+'px');
        } 
        else {
            //$(this).css('width' , $width*1.05+'px');
        }

    });
}
function getMobileMenu() {
	
	$('.menu').each(function() {	
        var $menulist = $(this).children('.menu-main-list').html();
        var $menucontrols ="<div class='menu-toggled-controls'><div class='menu-toggled-title'></div><div class='menu-button'><span>&nbsp;</span><span>&nbsp;</span><span>&nbsp;</span></div></div>";
        $(this).prepend("<div class='menu-toggled menu-closed'>"+$menucontrols+"<ul>"+$menulist+"</ul></div>");
    });
}

function adaptMenu() {
	$('.menu').each(function() {
        var $width = '400px';//$(this).css('max-width');
        $width = $width.replace('px', ''); 
        if ( $(this).parent().width() < $width*1.05 ) {
            $('nav').addClass('mobileMenu');
            $(this).children('.menu-main-list').hide(0);
            $(this).children('.menu-toggled').show(0);
        }
        else {
            $('nav').removeClass('mobileMenu');
            $(this).children('.menu-main-list').show(0);
            $(this).children('.menu-toggled').hide(0);
        }
    });		
}

$(function() {

	 responsiveMobileMenu();
	 getMobileMenu();
	 adaptMenu();
	 
	 /* slide down mobile menu on click */
	 
	 $('.menu-toggled, .menu-toggled .menu-button').click(function(){
	 	if ( $(this).is(".menu-closed")) {
		 	 $(this).find('ul').stop().show(300);
		 	 $(this).removeClass("menu-closed");
	 	}
	 	else {
		 	$(this).find('ul').stop().hide(300);
		 	 $(this).addClass("menu-closed");
	 	}
		
	});	

});
	/* 	hide mobile menu on resize */
$(window).resize(function() {
 	adaptMenu();
});