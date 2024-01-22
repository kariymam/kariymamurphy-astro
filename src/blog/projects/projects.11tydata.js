module.exports = {
	tags: [
		"projects"
	],
  eleventyComputed: {
    permalink(data) {
      if (!data.pkg) {
        return false;
      }
    }
  },

};
