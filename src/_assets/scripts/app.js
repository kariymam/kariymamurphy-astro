console.log(`I was loaded at ${Date(Date.now()).toString()}`);

const burger = document.querySelector('#burger');
const myName = document.querySelector('#myName');
const headerMobile = document.querySelector('#header');
const nav = document.querySelector('#mainNav');

function toggleNav() {
	nav.classList.toggle('hidden');
	myName.classList.toggle('hidden');
};

burger.addEventListener('click', function() {
	toggleNav();
});

// postlist animation finally working the way I need
const headerHeight = (a, b) => a + b;
tl = gsap.timeline();

gsap.utils.toArray(".postlist-item").forEach(post => {
	let picture = post.querySelector('picture');
  let thumbImg = picture ? picture.querySelector('.thumbImg') : null;
  let paragraph = post.querySelector('p');

	post.addEventListener("mouseover", (e) => {
    if (thumbImg) {
      let moveY = headerHeight(paragraph.offsetHeight, 32);

      tl.to(thumbImg, {
        duration: 0.2,
        ease: "sine.out",
        top: `${moveY}px`
      });
    }
	},
		post.addEventListener("mouseleave", () => {
		// Check if the target element exists before animating
		if (thumbImg) {
			  tl.to(thumbImg, {
			  duration: 0.1,
			  ease: "sine.in",
			  top: 0
			});
		}
  })
)});

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
};

// Initial call to moveNav to set the initial state based on the window size
moveNav(window.matchMedia(mobile));

// Add event listener for changes in the media query
window.matchMedia(mobile).addEventListener("change", moveNav);

//

const applyRandomFonts = (str, fontsArray) => {
  return str.split('').map(char => {
    // Check if the character is a space, if so, leave it unchanged
    if (char === ' ') {
      return char;
    }

    // Get a random index from the fontsArray
    const randomIndex = Math.floor(Math.random() * fontsArray.length);

    // Apply the font to the character
    return `<span style="font-family: ${fontsArray[randomIndex]}">${char}</span>`;
  }).join('');
};

const displayFonts = document.getElementsByClassName("displayFont");
const fontOptions = ["VG5000", "FT88"];

// Iterate over each element with the class "displayFont"
for (let i = 0; i < displayFonts.length; i++) {
  const inputString = displayFonts[i].innerText;

  // Apply random fonts to the input string
  const result = applyRandomFonts(inputString, fontOptions);

  // Set the inner HTML of the current element with the modified string
  displayFonts[i].innerHTML = result;
};


