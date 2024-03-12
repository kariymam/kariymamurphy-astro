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
        rect.left >= 0 && // Check if left side of the element is greater than or equal to 0
        rect.right <= (window.innerWidth || html.clientWidth) &&
        rect.left <= window.innerWidth // Check if left side of the element is within the window width
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

		if (!latestPostsList) {
					return; // Exit the function if no matching ancestor is found
				}

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

	function latestPostsSlider() {
		const latestPostsList = document.querySelector("#latestPostsList");
		const slideNextBtn = document.getElementById("slideNext");
		const slideBackBtn = document.getElementById("slideBack");
		const width = latestPostsList ? latestPostsList.querySelector(".current").clientWidth : 0;

		let tr = width;
		const scrollContainer = document.querySelector(".scroll-container");

		if (!slideNextBtn || !slideBackBtn || !latestPostsList) {
			return; // Exit the function if no matching ancestor is found
		}

		const visible = () => {
			let fchild = scrollContainer.firstElementChild;
			let lchild = scrollContainer.lastElementChild;


			slideBackBtn.classList.toggle("md:flex", !fchild.classList.contains("current"));
			slideNextBtn.classList.toggle("md:flex", !lchild.classList.contains("current"));
		};

		visible();

		latestPostsList.addEventListener("scroll", () => {
			visible(); // Call visible function when scrolling finishes
		});

		latestPostsList.style.scrollBehavior = "smooth";

		slideNextBtn && slideNextBtn.addEventListener("click", () => {
			latestPostsList.scrollLeft += tr;
			slideBackBtn.classList.add("md:flex");
		});

		slideBackBtn && slideBackBtn.addEventListener("click", () => {
			latestPostsList.scrollLeft -= tr;
			slideNextBtn.classList.add("md:flex");
			visible(); // Call visible function when slideBackBtn is clicked
		});
	}

	function postlistImgs() {
		const headerHeight = (a, b) => a + b;

		const thumbAnimation = (thumbImg, paragraph) => {
			let moveY = headerHeight(paragraph, 24);
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
			const excerpt = document.querySelector(".postlist-item-description");
			const paragraph = excerpt ? excerpt.firstElementChild.offsetHeight : null;

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
	latestPostsSlider();
	postlistImgs();
};

module.exports = { animations };
