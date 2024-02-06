const animations = () => {

	function lastestPostsSlider() {
		const latestPostsList = document.querySelector("#latestPostsList");
		const slideBtn = latestPostsList
			? latestPostsList.closest(".grid").querySelector("button")
			: null;
		const slideBackBtn = document.getElementById("slideBack");

		if (!slideBtn) {
			return; // Exit the function if no matching ancestor is found
		}

		const childCount = () => {
			let fchild = latestPostsList.firstElementChild.children.length;
			return fchild -= 1;
		}

		let tr = 0;
		let clickCounter = 0;
		const maxClicks = childCount();

		const slideAnimation = (direction) => {
			const slidePost = latestPostsList.querySelector(".postlist-heavyItem");
			const width = slidePost.clientWidth;
			tr += direction === "forward" ? -width : width;

			let slideTL = gsap.timeline({ paused: true });

			slideTL.to(latestPostsList, {
				duration: 0.3,
				ease: "power2.inOut",
				x: `${tr}`,
				onComplete: () => {
					// Check if translation has reached the initial state
					if (tr === 0) {
						slideBackBtn.classList.remove("lg:flex");
					} else {
						slideBackBtn.classList.add("lg:flex");
					}
				},
			});

			return slideTL;
		};

		const slideForward = () => {
			const tl = slideAnimation("forward");
			tl.play();
			clickCounter++;
			checkClickCount();
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

		slideBtn.addEventListener("click", slideForward);
		slideBackBtn.addEventListener("click", slideBack);
		window.addEventListener("resize", () => {
			if (window.innerWidth <= 1024) {
				// Reset the x property to 0 if the window width is less than or equal to 1024px
				tr = 0;
				gsap.to(latestPostsList, { x: tr, duration: 0 }); // Use GSAP to set x property instantly
			}
		});
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

	lastestPostsSlider();
	postlistImgs();
};

module.exports = { animations };
