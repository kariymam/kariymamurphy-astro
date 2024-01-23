module.exports = {
	tags: [
		"posts",
		"writing"
	],
	"layout": "post.njk",
	"permalink": "blog/{{ title | slugify }}/"
};
