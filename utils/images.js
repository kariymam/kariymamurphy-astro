const path = require("path");
const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {

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

// module.exports = eleventyConfig => {
// 	function relativeToInputPath(inputPath, relativeFilePath) {
// 		let split = inputPath.split("/");
// 		split.pop();

// 		return path.resolve(split.join(path.sep), relativeFilePath);
// 	}

// 	// Eleventy Image shortcode
// 	// https://www.11ty.dev/docs/plugins/image/
// 	eleventyConfig.addAsyncShortcode("image", async function imageShortcode(src, alt, css, widths, sizes) {
// 		// Full list of formats here: https://www.11ty.dev/docs/plugins/image/#output-formats
// 		// Warning: Avif can be resource-intensive so take care!
// 		let formats = ["webp", "auto"];
// 		let file = relativeToInputPath(this.page.inputPath, src);
// 		let metadata = await eleventyImage(file, {
// 			widths: [400, 800, 1600],
// 			formats,
// 			outputDir: path.join(eleventyConfig.dir.output, "img"), // Advanced usage note: `eleventyConfig.dir` works here because we’re using addPlugin.
// 		});

// 		// TODO loading=eager and fetchpriority=high
// 		let imageAttributes = {
// 			class: css,
// 			alt,
// 			sizes: ["50vw", "100vw"],
// 			loading: "lazy",
// 			decoding: "async",
// 		};
// 		return eleventyImage.generateHTML(metadata, imageAttributes);
// 	});
// };
