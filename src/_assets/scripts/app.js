console.log(`I was loaded at ${Date(Date.now()).toString()}`);

const burger = document.querySelector('#burger')
const headerMobile = document.querySelector('#headerMobile')
const nav = document.querySelector('#headerMobile > nav')

function toggleNav() {
	nav.classList.toggle('hidden');
}

burger.addEventListener('click', function() {
	toggleNav();
});

let tl = gsap.timeline();
let postlist = document.querySelectorAll(".postlist-item");
const thumbImg = document.querySelector(".thumbImg");
const headerHeight = (a, b) => a + b;

for (const post of postlist) {
  post.addEventListener("mouseover", (e) => {
    let cl = e.target.closest("article > div");

    if (cl) {
      let m = cl.querySelector("p");

      if (m) {
        let moveY = headerHeight(m.offsetHeight, 32);
        let q = gsap.utils.selector(cl);

        tl.to(q(".thumbImg"), {
          duration: 0.2,
          ease: "sine.out",
          top: `${moveY}px`
        });
      }
    }
  });

  post.addEventListener("mouseleave", () => {
   // Check if the target element exists before animating
	 if (thumbImg) {
		tl.to(".thumbImg", {
			duration: 0.1,
			ease: "sine.in",
			top: 0
		});
		}
  });
}

const mobile = "(min-width: 768px)";
const header = document.querySelector('#header');
const fchl = header.firstElementChild;
const home = document.querySelector('#home');

function moveNav(e) {
  if (e.matches) {
    // If media query matches, keep fchl at its original position
    if (fchl.parentNode !== header) {
      header.insertBefore(fchl, header.firstElementChild);
    }
  } else {
    // If media query doesn't match, move fchl to a new position (e.g., appending it to home)
    if (fchl.parentNode !== home) {
      home.appendChild(fchl);
    }
  }
}

// Initial call to moveNav to set the initial state based on the window size
moveNav(window.matchMedia(mobile));

// Add event listener for changes in the media query
window.matchMedia(mobile).addEventListener("change", moveNav);

