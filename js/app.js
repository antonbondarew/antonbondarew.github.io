
function main() {

(function () {
   'use strict';

	// Hide .navbar first
	$(".navbar").hide();

	// Fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 200) {
				$('.navbar').fadeIn();
			} else {
				$('.navbar').fadeOut();
			}
		});


	});

  var OSName="Unknown OS";
  if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
  if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
  if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
  if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

  console.log('Your OS: '+OSName);

  if (OSName==='Windows') {
    $('.german-language-emoticon').css('display','none')
    $('.german-language-windows').css('display','initial')
  }



}());


}
main();
