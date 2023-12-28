let tl = gsap.timeline();
let postlist = document.querySelectorAll(".postlist-item"); // get all elements with ".postlist-item"
const headerHeight = (a, b) => a + b;  // add 16 to offsetHeight

for (const post of postlist) { // loop over each element with ".postlist-item"
  post.addEventListener("mouseover", (e) => {
		let cl = e.target.closest("article > div"); // target closest <article>
		let m = cl.querySelector("p").offsetHeight; //find offsetHeight of <p>
		let q = gsap.utils.selector(cl); // gsap select closest <article>
		const moveY = headerHeight(m, 32);
		tl.to(q(".thumbImg"), {
			duration: 0.2,
			ease: "sine.out",
			top: `${moveY}px`
		});
	})
	post.addEventListener("mouseleave", () => {
    tl.to((".thumbImg"), {
      duration: 0.1,
      ease: "sine.in",
      top: 0
    });
  })
}
