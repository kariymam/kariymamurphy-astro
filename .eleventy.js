const path = require("path");
const { minify } = require("terser");
const filters = require('./utils/filters.js')
const transforms = require('./utils/transforms.js')
const collections = require('./utils/collections.js')
const excerpt = require('./utils/excerpt.js');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItEleventyImg = require("markdown-it-eleventy-img");
const tocPlugin = require("eleventy-plugin-toc");

module.exports = function (eleventyConfig) {
	// Folders to copy to build dir (See. 1.1)
	eleventyConfig.addPassthroughCopy("src/static");
	eleventyConfig.addPassthroughCopy("src/fonts/");
	eleventyConfig.addPassthroughCopy("./admin/*");

	eleventyConfig.setLibrary('md', markdownIt ({
    html: true,
    breaks: true,
    linkify: true
  })
  .use(markdownItEleventyImg, {
		imgOptions: {
			widths: [400, 800, 1600],
			formats: ["jpeg", "png"],
			outputDir: "dist/img"
		},
		globalAttributes: {
			sizes: ["50vw", "100vw"]
		},
		resolvePath: (filepath, env) => path.join(path.dirname(env.page.inputPath), filepath),
		renderImage(image, attributes) {
			const [ Image, options ] = image;
			const [ src, attrs ] = attributes;

			Image(src, options);

			const metadata = Image.statsSync(src, options);
			const imageMarkup = Image.generateHTML(metadata, attrs, {
				whitespaceMode: "inline"
			});

			return `<button tabindex="0" aria-expanded="false" class="textblockImg"><span>${imageMarkup}</span></button>`;
		}
	})
	.use(require('markdown-it-footnote'))
	);

	eleventyConfig.amendLibrary("md", mdLib => {
		mdLib.use(markdownItAnchor, {
			// permalink: markdownItAnchor.permalink.ariaHidden({
			// 	placement: "before",
			// 	class: "header-anchor",
			// 	symbol: "#",
			// 	ariaHidden: true,
			// }),
			// level: [2,3],
			// slugify: eleventyConfig.getFilter("slugify")
			permalink: markdownItAnchor.permalink.headerLink({ safariReaderFix: true })
		});
		// mdLib.use(markdownItFootnotes);
		// mdLib.use(markdownItAttrs);
		mdLib.renderer.rules.footnote_block_open = () => (
			'<hr>' +
			'<h4 class="text-xs opacity-70 mt-3">Footnotes</h4>\n' +
			'<footer class="footnotes">\n' +
			'<ol class="footnotes-list">\n'
		);
	});

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

	const embedEverything = require("eleventy-plugin-embed-everything");
  eleventyConfig.addPlugin(embedEverything);

	eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
  });

	eleventyConfig.addPlugin(tocPlugin, {
		tags: ["h2", "h3"],
		wrapper: 'ol',
		wrapperClass: 'toc',
		flat: true
	});

	eleventyConfig.addShortcode('excerpt', (post) => {
    return excerpt(post);
  });

	// Drafts
	// When `permalink` is false, the file is not written to disk
	eleventyConfig.addGlobalData("eleventyComputed.permalink", function() {
		return (data) => {
			// Always skip during non-watch/serve builds
			if(data.draft && !process.env.BUILD_DRAFTS) {
				return false;
			}

			return data.permalink;
		}
	});

  // When `eleventyExcludeFromCollections` is true, the file is not included in any collections
	eleventyConfig.addGlobalData("eleventyComputed.eleventyExcludeFromCollections", function() {
		return (data) => {
			// Always exclude from non-watch/serve builds
			if(data.draft && !process.env.BUILD_DRAFTS) {
				return true;
			}

			return data.eleventyExcludeFromCollections;
		}
	});

	eleventyConfig.on("eleventy.before", ({runMode}) => {
		// Set the environment variable
		if(runMode === "serve" || runMode === "watch") {
			process.env.BUILD_DRAFTS = true;
		}
	});

	// This allows Eleventy to watch for file changes during local development.
	eleventyConfig.setUseGitIgnore(false);

	// Watch Targets
	eleventyConfig.addWatchTarget('./src/_assets/stylesheets/');
	eleventyConfig.addWatchTarget('./src/_assets/scripts/');
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg,gif}");

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
