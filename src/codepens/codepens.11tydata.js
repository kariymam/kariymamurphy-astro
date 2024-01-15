module.exports = {
	tags: [
		"codepen"
	],
  eleventyComputed: {
    permalink(data) {
      if (!data.pkg) {
        return false;
      }
    }
  },

};
