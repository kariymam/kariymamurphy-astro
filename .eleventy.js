const markdownIt = require("markdown-it");
const { minify } = require("terser");
const filters = require('./utils/filters.js')
const transforms = require('./utils/transforms.js')
const collections = require('./utils/collections.js')
const excerpt = require('./utils/excerpt.js');

module.exports = function (eleventyConfig) {
	// Folders to copy to build dir (See. 1.1)
	eleventyConfig.addPassthroughCopy("src/static");
	eleventyConfig.addPassthroughCopy("./src/fonts/");
	eleventyConfig.addPassthroughCopy("./src/blog/imgs");
	eleventyConfig.addPassthroughCopy("./src/codepens/imgs");

	// Filters
	Object.keys(filters).forEach((filterName) => {
		eleventyConfig.addFilter(filterName, filters[filterName])
	})

	// Async filter
	eleventyConfig.addNunjucksAsyncFilter("jsmin", async function (
		code,
		callback
	) {
		try {
			const minified = await minify(code);
			callback(null, minified.code);
		} catch (err) {
			console.error("Terser error: ", err);
			callback(null, code);
		}
	});

	// Transforms
	Object.keys(transforms).forEach((transformName) => {
		eleventyConfig.addTransform(transformName, transforms[transformName])
	})

	// Collections
	Object.keys(collections).forEach((collectionName) => {
		eleventyConfig.addCollection(collectionName, collections[collectionName])
	})

	// Plugins
	const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	const pluginImages = require("./utils/images.js");
	eleventyConfig.addPlugin(pluginImages);

	eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
  });

	eleventyConfig.addShortcode('excerpt', (post) => {
    return excerpt(post);
  });

	// This allows Eleventy to watch for file changes during local development.
	eleventyConfig.setUseGitIgnore(false);

	// Watch Targets
	eleventyConfig.addWatchTarget('./src/_assets/stylesheets/');
	eleventyConfig.addWatchTarget('./src/_assets/scripts/');
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

	return {
		dir: {
			input: "src/",
			output: "dist",
			includes: "_includes",
			data: "_data",
			layouts: "_layouts"
		},
		templateFormats: ["html", "md", "njk"],
		htmlTemplateEngine: "njk"

		// // 1.1 Enable eleventy to pass dirs specified above
		// passthroughFileCopy: true
	};
};
