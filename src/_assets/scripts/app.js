console.log(`I was loaded at ${Date(Date.now()).toString()}`);

const burger = document.querySelector('#burger');
const nav = document.querySelector('#mainNav');

function toggleNav() {
	nav.classList.toggle('hidden');
};

burger.addEventListener('click', function() {
	toggleNav();
});

// postlist animation finally working the way I need!!
//-------- postlist animation
const headerHeight = (a, b) => a + b;

const thumbAnimation = (thumbImg, paragraph) => {
	let moveY = headerHeight(paragraph.clientHeight, 32);
	tl = gsap.timeline({ paused: true });
	tl.to(thumbImg, {
		duration: 0.3,
		ease: "power2.inOut",
		top: `${moveY}px`
	});
	return tl;
};

gsap.utils.toArray(".postlist-item").forEach(post => {
	const picture = post.querySelector('picture');
  const thumbImg = picture ? picture.querySelector('.thumbImg') : null;
	const paragraph = post.querySelector("p").closest("div");

	if (thumbImg) {
		const animation = thumbAnimation(thumbImg, paragraph);
		post.addEventListener("mouseover", () => { animation.play(); });
		post.addEventListener("mouseleave", () => { animation.reverse(); });
	}
});

//-------- random

const applyRandomFonts = (str, fontsArray) => {
  // Choose a random index for the fontsArray
  const randomIndex = Math.floor(Math.random() * fontsArray.length);

  // Choose a random character index in the string
  const randomCharIndex = Math.floor(Math.random() * str.length);

  return str.split('').map((char, index) => {
    // Check if the character is a space, if so, leave it unchanged
    if (char === ' ') {
      return char;
    }

    // Apply the font to the character at the randomCharIndex
    if (index === randomCharIndex) {
      return `<span style="font-family: ${fontsArray[randomIndex]}">${char}</span>`;
    } else {
      return char;
    }
  }).join('');
};

//

const displayFonts = document.getElementsByClassName("displayFont");
const fontOptions = ["FT88", "FT88-Serif"];

for (let i = 0; i < displayFonts.length; i++) {
  const inputString = displayFonts[i].innerText;

  // Apply random fonts to the input string
  const result = applyRandomFonts(inputString, fontOptions);

  // Set the inner HTML of the current element with the modified string
  displayFonts[i].innerHTML = result;
};



