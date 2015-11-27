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
        
        var $menucontrols = "<div class='menu-toggled-controls'><div class='menu-toggled-title'></div><div class='menu-button'>"+hamburgerbutton+"</div></div>";
        
        
        $(this).prepend("<div class='menu-toggled menu-closed'>"+$menucontrols+"<ul>"+$menulist+"</ul></div>");
    });
}

function adaptMenu() {
	$('.menu').each(function() {
        var $width = '400px';//$(this).css('max-width');
        $width = $width.replace('px', ''); 
        if ( $(this).parent().width() < $width*1.65 ) {
            $('.header').addClass('mobileMenu');
            $('nav').addClass('mobileMenu');
            $(this).children('.menu-main-list').hide(0);
            $(this).children('.menu-toggled').show(0);

            $(".title").addClass("small");
            $(".main-box").addClass("mobile");
        }
        else {
            $('.header').removeClass('mobileMenu');
            $('nav').removeClass('mobileMenu');
            $(this).children('.menu-main-list').show(0);
            $(this).children('.menu-toggled').hide(0);
            $(".title").removeClass("small");
            $(".main-box").removeClass("mobile");
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
            console.log("open");
            burgerTime(false);
	 	}
	 	else {
		 	$(this).find('ul').stop().hide(300);
		 	 $(this).addClass("menu-closed");
            console.log("close");
            burgerTime(true);
	 	}
		
	});	

});
	/* 	hide mobile menu on resize */
$(window).resize(function() {
 	adaptMenu();
});

function burgerTime(isClosed) {
    var trigger = $('#hamburger')
      if (isClosed == true) {
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        //isClosed = false;
      } else {
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        //isClosed = true;
      }
    }


var hamburgerbutton = '<div id="hamburger" class="hamburglar is-closed">'
    + '<div class="burger-icon">'
    + '<div class="burger-container">'
    +    '<span class="burger-bun-top"></span>'
    +    '<span class="burger-filling"></span>'
    +    '<span class="burger-bun-bot"></span>'
    +  '</div>'
    + '</div>'
    + '<div class="burger-ring">'
    +  '<svg class="svg-ring">'
	+      '<path class="path" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="4" d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2" />'
    + '</svg>'
    + '</div>'
    +	'<svg width="0" height="0">'
    +   '<mask id="mask">'
    + '<path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="4" d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4" />'
    +   '</mask>'
    + '</svg>'
    + '<div class="path-burger">'
    +  '<div class="animate-path">'
    +    '<div class="path-rotation"></div>'
    +  '</div>'
    + '</div>'
    + '</div>';