	// Source: https://www.belenalbeza.com/articles/better-excerpts-in-eleventy/
	// Source: https://jonathanyeong.com/excerpts-with-eleventy/#:~:text=Cap%20at%20200%20characters,no%20need%20for%20specific%20tags.
	const striptags = require("striptags");
	const markdownIt = require('markdown-it');

	module.exports = function async (post) {
		let excerpt = post.data?.page?.excerpt;
		let content = post.templateContent;
		const charCount = 144;
		const readMore = '<span class="break-keep" style="font-weight:700">Read more &#8594;</span>';

		excerpt = striptags(content)
			.substring(0, charCount)
			.replace(/^\\s+|\\s+$|\\s+(?=\\s)/g, "")
			.trim();

		if (content.length > charCount) {
			excerpt = excerpt.concat("..."+readMore);
		}

		return markdownIt({ html: true }).render(`${excerpt}`);
	};
