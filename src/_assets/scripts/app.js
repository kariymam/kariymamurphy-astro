console.log(`I was loaded at ${Date(Date.now()).toString()}`);
import { forEach } from 'lodash';
import { animations } from './animations.js';
import A11yDialog from 'a11y-dialog'

const container = document.querySelector('#contact_modal')
const dialog = new A11yDialog(container)

animations();

const burger = document.querySelector('#burger');
const nav = document.querySelector('#main-nav');
const navContainer = document.querySelector('#navContainer');
const navScrim = document.querySelector('#navScrim');
const body = document.querySelector('body');

function toggleNav() {
	nav.classList.toggle('hidden');
	// navContainer.classList.toggle('left-4');
	['left-0', 'top-24'].map(cl => navContainer.classList.toggle(cl));
	navScrim.classList.toggle('show');
	// ['hidden', 'show'].map(cl => navScrim.classList.toggle(cl));
	body.classList.toggle('overflow-hidden');
};

burger.addEventListener('click', function() {
	toggleNav();
});
navScrim.addEventListener('click', function() {
	toggleNav();
});


const textblockImg = document.querySelectorAll('.textblockImg');

function expand(el){
	textblockImg.forEach((el) => {
	  el.setAttribute('aria-expanded', el.getAttribute('aria-expanded') == 'true' ? 'false' : 'true');
	});
	el.classList.toggle("fullsize");
}

textblockImg.forEach(function(el) {
	el.addEventListener('click', function() {
		expand(this);
	});
})
// function fadeIn() {
// 	if (!window.AnimationEvent) { return; }
// 	const fader = document.getElementById('fader');
// 	setTimeout(() => {
// 		fader.classList.add('fade-in');
// 		observer.unobserve(fader.target); // stop observing the element
// 		}, 500)
// }

// fadeIn();

// document.addEventListener('DOMContentLoaded', function() {
// 	if (!window.AnimationEvent) { return; }
// }

//
// //-------- close
// function modal() {
// 	let modal = document.querySelector(".modal");
// 	const body = document.querySelector("body");
// 	const contact = document.querySelector("#contact")
// 	const closeBtn = document.querySelector("#close");

// 	function open() {
// 		modal.classList.toggle('hidden');
// 	}

// 	closeBtn.addEventListener('click', open);
// 	contact.addEventListener('click', open);
// }
