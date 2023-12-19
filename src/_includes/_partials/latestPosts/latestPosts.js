
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
/* THIS IS WORKING TO GET  VALUES!!!!

let tl = gsap.timeline();
const postlistItem = document.querySelectorAll(".postlist-item");

postlistItem.forEach(post => {
  post.addEventListener("mouseover", (e) => {

		let q = gsap.utils.selector(e.target.closest("article"));
		const headerHeight = e.target.closest("article").querySelector("h3").offsetHeight;
		const moveY = headerHeight + 16;

		tl.to(q(".thumbImg"), {
			duration: 0.2,
			ease: "power1.out",
			top: `${moveY}px`
		});

	})
	post.addEventListener("mouseleave", () => {
		tl.to((".thumbImg"), {
			duration: 0.3,
			ease: "power1.in",
			top: 0
		});
	})
});
*/

let tl = gsap.timeline();
const postlistItem = document.querySelectorAll(".postlist-item");

postlistItem.forEach(post => {
  post.addEventListener("mouseover", (e) => {
		let m = e.target.closest("article");
		let q = gsap.utils.selector(m);
		const headerHeight = m.querySelector("h3").offsetHeight;
		const moveY = headerHeight + 16;

		tl.to(q(".thumbImg"), {
			duration: 0.2,
			ease: "power1.out",
			top: `${moveY}px`
		});

	})
	post.addEventListener("mouseleave", () => {
		tl.to((".thumbImg"), {
			duration: 0.2,
			ease: "power1.in",
			top: 0
		});
	})
});
