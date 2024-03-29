const {	DateTime } = require('luxon');
const markdownIt = require("markdown-it");
const crypto = require('crypto');

module.exports = {
	//Markdownit
	md: (content = "") => {
		return markdownIt({ html: true }).render(content);
	},
	// https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
	htmlDateString: (dateObj) => {
		return DateTime.fromJSDate(dateObj, {
			zone: 'utc'
		}).toFormat('yyyy-LL-dd');
	},
	readableDate: (dateObj, format, zone) => {
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(format || "LLLL L, yyyy");
	},
	agoDate: (dateObj, zone) => {
		return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toRelative();
	},
	filterTagList: function filterTagList(tags) {
		return (tags || []).filter(tag => ["all", "nav", "post", "posts", "drafts", "work", "project"].indexOf(tag) === -1);
	},
	head: (array, n) => { // Get the first `n` elements of a collection.
		if(!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if( n < 0 ) {
			return array.slice(n);
		}

		return array.slice(0, n);
	},
	min: (...numbers) => { // Return the smallest number argument
		return Math.min.apply(null, numbers);
	},
	getAllTags: (collection) => {
		let tagSet = new Set();
		for(let item of collection) {
			(item.data.tags || []).forEach(tag => tagSet.add(tag));
		}
		return Array.from(tagSet);
	}
	// randomStr: (length) => {
	// 	let string = "";
	// 	const possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
	// 	for (i = 0; i < length; i++) {
	// 		string += possible.charAt(Math.floor(Math.random() * (possible.length - 0) + 0));
	// 	}
	// 	const nonce = string
	// 	return nonce;
	// }
	// // getAllTags: (collection) => {
	// // 	let tagSet = new Set();
  // // 	collection.getAll().forEach(function(item) {
  // //   if( "tags" in item.data ) {
  // //     let tags = item.data.tags;

  // //     tags = tags.filter(function(item) {
  // //       switch(item) {
  // //         // this list should match the `filter` list in tags.njk
  // //         case "all":
  // //         case "nav":
  // //         case "post":
  // //         case "posts":
  // //           return false;
  // //       }

  // //       return true;
  // //     });

  // //     for (const tag of tags) {
  // //       tagSet.add(tag);
  // //     }
  // //   }
  // // });

  // // // returning an array in addCollection works in Eleventy 0.5.3
  // // return [...tagSet];
	// // }
}
