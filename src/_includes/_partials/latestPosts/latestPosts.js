
/*
1. hear the hover of a postlistItem
	item.addEventListener('hover', event => {

	})
function
. get postlistItem instance (done)
. get the height of the closest h3 in postlistItem instance = headerHeight (done)
. retrieve the headerHeight add 16px = moveY (done)
. call moveY value
. move thumbImg using top with moveY value
. when mouse leaves postlistItem
. move thumbImg back to top 0

gsap.fromTo(".thumbImg", { top: 0 }, { top: `${moveY}`, duration: 1 });

*/
/* THIS IS WORKING!!!! */

let tl = gsap.timeline(); // create gsap timeline
const postlistItem = document.querySelectorAll(".postlist-item"); // get all elements with ".postlist-item"

postlistItem.forEach(post => { // loop over each element with ".postlist-item"
  post.addEventListener("mouseover", (e) => {
		let m = e.target.closest("article"); // target closest <article>
		let q = gsap.utils.selector(m); // gsap select closest <article>
		const headerHeight = m.querySelector("p").offsetHeight; //find offsetHeight of <.postlist-item-description>
		const moveY = headerHeight + 16; // add 16 to offsetHeight

		tl.to(q(".thumbImg"), {
			duration: 0.2,
			ease: "sine.out",
			top: `${moveY}px`
		});

	})
	post.addEventListener("mouseleave", () => {
		tl.to((".thumbImg"), {
			duration: 0.1,
			ease: "power1.in",
			top: 0
		});
	})
});
