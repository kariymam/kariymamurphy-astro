const {	DateTime } = require('luxon');

module.exports = {
	// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
	htmlDateString: (dateObj) => {
		return DateTime.fromJSDate(dateObj, {
			zone: 'utc'
		}).toFormat('yyyy-LL-dd');
	},
	filterTagList: function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
	},
	getAllTags: (collection) => {
		let tagSet = new Set();
  	collection.getAll().forEach(function(item) {
    if( "tags" in item.data ) {
      let tags = item.data.tags;

      tags = tags.filter(function(item) {
        switch(item) {
          // this list should match the `filter` list in tags.njk
          case "all":
          case "nav":
          case "post":
          case "posts":
            return false;
        }

        return true;
      });

      for (const tag of tags) {
        tagSet.add(tag);
      }
    }
  });

  // returning an array in addCollection works in Eleventy 0.5.3
  return [...tagSet];
	}
}
