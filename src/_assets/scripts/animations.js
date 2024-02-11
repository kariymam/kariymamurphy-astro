const { isNull } = require("lodash");

const animations = () => {
	function menuClose() {
		const menuBtn = document.getElementById("burger");
		const hamburger = document.getElementById("burgerIcon");

		const close = () => {
			lines = hamburger.querySelectorAll(".line");
			lines.forEach(function (rect) {
				rect.classList.toggle("close");
				menuBtn.ariaExpanded = menuBtn.ariaExpanded !== "true";
			});
		};

		menuBtn.addEventListener("click", close);
	}

	function addCurrent() {
		function isElementInViewport(el) {
			// console.log("Checking element:", el);
			var rect = el.getBoundingClientRect();
			var html = document.documentElement;
			// console.log("Element rect:", rect);
			// console.log("Window height:", window.innerHeight);
			// console.log("Document height:", html.clientHeight);
			return (
				rect.left >= 0 && rect.right <= (window.innerWidth || html.clientWidth)
			);
		}

		function runOnScroll(el) {
			if (isElementInViewport(el)) {
				// console.log("Element is in viewport:", el);
				el.classList.add("current");
			} else {
				// console.log("Element is not in viewport:", el);
				el.classList.remove("current");
			}
		}

		const latestPostsList = document.querySelector("#latestPostsList");
		const postlistHeavyItems = latestPostsList.querySelectorAll(
			".postlist-heavyItem"
		);

		postlistHeavyItems.forEach((el) => {
			latestPostsList.addEventListener(
				"scroll",
				function () {
					runOnScroll(el);
				},
				{ passive: true }
			);
			window.addEventListener("load", runOnScroll(el));
		});
	}

	function lastestPostsSlider() {
		const latestPostsList = document.querySelector("#latestPostsList");
		// the scroll forward button in latestPostsList
		const slideNextBtn = document.getElementById("slideNext");
		// the scroll back button
		const slideBackBtn = document.getElementById("slideBack");
		if (!slideNextBtn) {
			return; // Exit the function if no matching ancestor is found
		}

		let tr = 800;
		const scrollContainer = document.querySelector(".scroll-container");

		const visible = () => {
			let fchild = scrollContainer.firstElementChild;
			let lchild = scrollContainer.lastElementChild;

			if (fchild.classList.contains("current")) {
				slideNextBtn.classList.add("md:flex");
				slideBackBtn.classList.remove("md:flex");
			} else {
				slideBackBtn.classList.add("md:flex");
			}

			if (lchild.classList.contains("current")) {
				slideBackBtn.classList.add("md:flex");
				slideNextBtn.classList.remove("md:flex");
			}
		};

		visible();

		// Call visible function initially
		window.addEventListener("load", visible);

		// Add a scroll event listener to latestPostsList
		latestPostsList.addEventListener("scroll", () => {
			visible(); // Call visible function when scrolling finishes
		});

		latestPostsList.style.scrollBehavior = "smooth";

		if (slideNextBtn) {
			slideNextBtn.addEventListener("click", () => {
				latestPostsList.scrollLeft += tr;
				slideBackBtn.classList.add("md:flex");
			});
		}

		if (slideBackBtn) {
			slideBackBtn.addEventListener("click", () => {
				latestPostsList.scrollLeft -= tr;
				visible(); // Call visible function when slideBackBtn is clicked
			});
		}
	}

	function postlistImgs() {
		const headerHeight = (a, b) => a + b;

		const thumbAnimation = (thumbImg, paragraph) => {
			let moveY = headerHeight(paragraph.clientHeight, 32);
			postlistTL = gsap.timeline({ paused: true });
			postlistTL.to(thumbImg, {
				duration: 0.3,
				ease: "power2.inOut",
				top: `${moveY}px`,
			});
			return postlistTL;
		};

		gsap.utils.toArray(".postlist-item").forEach((post) => {
			const picture = post.querySelector("picture");
			const thumbImg = picture ? picture.querySelector(".thumbImg") : null;
			const paragraph = post.querySelector("p").closest("div");

			if (thumbImg) {
				const animation = thumbAnimation(thumbImg, paragraph);
				post.addEventListener("mouseover", () => {
					animation.play();
				});
				post.addEventListener("mouseleave", () => {
					animation.reverse();
				});
			}
		});
	}

	addCurrent();
	menuClose();
	lastestPostsSlider();
	postlistImgs();
};

module.exports = { animations };
