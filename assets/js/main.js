// Date
const date = (document.getElementById("date").innerHTML = new Date().getFullYear());

// Mobile Menu
let menu = $('.menu');
$('.menu-button').on('click', function(){
		menu.toggle();
		$(this).toggleClass('active');
		menu.parent().toggleClass('mobile-menu');
	});

	// Back to Top
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

