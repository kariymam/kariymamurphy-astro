console.log(`I was loaded at ${Date(Date.now()).toString()}`);

const burger = document.querySelector('#burger');
const nav = document.querySelector('#mainNav');

function toggleNav() {
	nav.classList.toggle('hidden');
};

burger.addEventListener('click', function() {
	toggleNav();
});

// postlist animation finally working the way I need
const headerHeight = (a, b) => a + b;
const postlistItem = document.querySelector(".postlist-item");

const thumbAnimation = (thumbImg) => {
	let paragraph = postlistItem.querySelector("p");
	let moveY = headerHeight(paragraph.offsetHeight, 48);
	tl = gsap.timeline({ paused: true });
	tl.to(thumbImg, {
		duration: 0.2,
		ease: "sine.out",
		top: `${moveY}px`
	});
	return tl;
};

gsap.utils.toArray(".postlist-item").forEach(post => {
	const picture = post.querySelector('picture');
  const thumbImg = picture ? picture.querySelector('.thumbImg') : null;
 	const animation = thumbAnimation(thumbImg);

	post.addEventListener("mouseover", () => {
    if (thumbImg) {
			animation.play();
    }
	});
		post.addEventListener("mouseleave", () => {
			if (thumbImg) {
				animation.reverse();
			}
	});
});





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

const displayFonts = document.getElementsByClassName("displayFont");
const fontOptions = ["FT88", "FT88-Serif"];

for (let i = 0; i < displayFonts.length; i++) {
  const inputString = displayFonts[i].innerText;

  // Apply random fonts to the input string
  const result = applyRandomFonts(inputString, fontOptions);

  // Set the inner HTML of the current element with the modified string
  displayFonts[i].innerHTML = result;
};



