/*     GSAP    */
let tl = gsap.timeline({
	defaults: {
		ease: "power2.in",
		duration: 1,
		paused: true
	}
});

/*     navigation    */
const indicator = document.querySelector('.indicator'); // target indicator
const navLinks = document.querySelectorAll('.navLink'); // get all navLinks
const transition = tl.to(".indicator", 1, {rotation: 360, duration: 5, ease: "elastic"});

navLinks.forEach(navLink => {
	  navLink.addEventListener("mouseenter", () => {
			if (navLink.id && !tl.isActive()) {
				transition.play();
			}
		});
		navLink.addEventListener('mouseleave', () => {
		});
});
navLinks.addEventListener("mouseenter", () => transition.play());

// for each element with navLink class
// navLinks.forEach(navLink => {
//   navLink.addEventListener('mouseover', () => {
// 		// const l = navLink.offsetLeft;
// 		// const w = navLink.offsetWidth;
// 		if (navLink.id){
// 			transition.play();
// 		} else { }
// 			// indicator.style.width = `${w}px`; // Not working on Safari
// 			// indicator.style.opacity = "1";
// 			// indicator.style.backgroundColor = "var(--nav-indicator-hover)";
// 		});
// 		navLink.addEventListener('mouseleave', () => {
// 			// indicator.style.opacity = "0";
// 			// indicator.style.backgroundColor = "transparent";
// 		});
// 	});
