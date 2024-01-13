console.log(`I was loaded at ${Date(Date.now()).toString()}`);

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
