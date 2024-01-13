module.exports = {
	tags: [
		"posts"
	],
	"layout": "post.njk",
	"permalink": "posts/{{ title | slugify }}/"
};
