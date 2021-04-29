// Date
const date = (document.getElementById("date").innerHTML = new Date().getFullYear());

// Hamburger menu / Stop Scrolll
	function toggleMenu() {
		const menuToggle = document.querySelector('.menuToggle');
		const navigation = document.querySelector('.navigation');
		const menuButton = document.querySelector('.menu-button');
		menuToggle.classList.toggle('active');
		navigation.classList.toggle('active');
		menuButton.classList.toggle('active');

    if ($('.navigation').hasClass('active')) {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = 'fixed';
          } else {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
          }
	}

window.addEventListener('scroll', () => {
document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});