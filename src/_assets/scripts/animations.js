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
		// the current .postlist-heavyItem
		const current = latestPostsList.querySelector(".current");

		// the scroll forward button in latestPostsList
		const slideBtn = latestPostsList
			? latestPostsList.closest(".flex").querySelector("button")
			: null;

		// the scroll back button
		const slideBackBtn = document.getElementById("slideBack");

		if (!slideBtn) {
			return; // Exit the function if no matching ancestor is found
		}

		const childCount = () => {
			let fchild = latestPostsList.firstElementChild.children.length;
			return (fchild -= 1);
		};

		let tr = 0;
		let clickCounter = 0;
		const maxClicks = childCount();

		const slideAnimation = (direction) => {
			const width = current.clientWidth;
			tr += direction === "forward" ? -width : width;
			let slideTL = gsap.timeline({ paused: true });
			latestPostsList.style.scrollSnapType = "none";

			slideTL.to(".scroll-container", {
				duration: 0.3,
				ease: "power2.inOut",
				snap: 0.5,
				x: `${tr}`,
				onComplete: () => {
					latestPostsList.style.scrollSnapType = "x mandatory";
					// Check if translation has reached the initial state
					if (tr === 0 || clickCounter === 0) {
						slideBackBtn.classList.remove("lg:flex");
					} else {
						slideBackBtn.classList.add("lg:flex");
					}
				},
			});

			return slideTL;
		};

		const slideForward = () => {
			const nextSibling = current.nextElementSibling;
			if (nextSibling !== null) {
				console.log("There is a next sibling"); // slide forward
				const tl = slideAnimation("forward");
				tl.play();
				clickCounter++;
				checkClickCount();
			} else {
				console.log("There is no next sibling");
			}
		};

		const slideBack = () => {
				const tl = slideAnimation("backward");
				tl.play();
				clickCounter--;
				checkClickCount();
		};

		const checkClickCount = () => {
			if (clickCounter >= maxClicks) {
				slideBtn.classList.remove("lg:flex");
			} else {
				slideBtn.classList.add("lg:flex");
			}
		};

		if (slideBtn) {
			slideBtn.addEventListener("click", slideForward);
		}
		if (slideBackBtn) {
			slideBackBtn.addEventListener("click", slideBack);
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
