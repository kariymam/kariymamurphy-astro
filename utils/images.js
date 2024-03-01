const path = require("path");
const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
// let's see if this works
	eleventyConfig.addShortcode("image", async function(src, alt, css) {
		if(alt === undefined) {
			// You bet we throw an error on missing alt (alt="" works okay)
			throw new Error(`Missing \`alt\` on myImage from: ${src}`);
		}

		let metadata = await Image(src, {
			widths: [400, 800, 1600],
			formats: ["webp", "jpeg"],
			outputDir: path.join(eleventyConfig.dir.output, "img")
		});

		let imageAttributes = {
			class: css,
			alt,
			sizes: ["50vw", "100vw"],
		};

		return Image.generateHTML(metadata, imageAttributes);
	});
};