/*     navigation    */
const indicator = document.querySelector('.indicator'); // target element
const navLinks = document.querySelectorAll('.transition'); // Get references to the hoverable

// for each element with transition class
navLinks.forEach(transition => {
  transition.addEventListener('mouseover', () => {
		const l = transition.offsetLeft;
		const w = transition.offsetWidth;
		if (transition.id) {
			indicator.style.webkitTransform = `translate(${l}px)`; // Not working on Safari
			indicator.style.width = `${w}px`; // Not working on Safari
		} else { }
			indicator.style.opacity = "1";
			indicator.style.backgroundColor = "var(--nav-indicator-hover)";
		});
		transition.addEventListener('mouseleave', () => {
			indicator.style.opacity = "0";
			indicator.style.backgroundColor = "transparent";
		});
	});
