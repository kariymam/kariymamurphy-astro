console.log(`I was loaded at ${Date(Date.now()).toString()}`);

import { animations } from './animations.js';

animations();

const burger = document.querySelector('#burger');
const nav = document.querySelector('#main-nav');
const navContainer = document.querySelector('#navContainer');
const navScrim = document.querySelector('#navScrim');
const body = document.querySelector('body');

function toggleNav() {
	nav.classList.toggle('hidden');
	navContainer.classList.toggle('left-6');
	navScrim.classList.toggle('show');
	// ['hidden', 'show'].map(cl => navScrim.classList.toggle(cl));
	body.classList.toggle('overflow-hidden');
};

burger.addEventListener('click', function() {
	toggleNav();
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



