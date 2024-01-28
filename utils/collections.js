module.exports = {
	drafts: (collectionApi) => {
		return collectionApi.getFilteredByTags("drafts");
	}
	// // Credit: https://lea.verou.me/blog/2023/11ty-indices/#dynamic-postsbytag-collection
	// postsByTag: (collectionApi) => {
	// 	const posts = collectionApi.getFilteredByTag("blog");
	// 	let ret = {};

	// 	for (let post of posts) {
	// 		for (let tag of post.data.tags) {
	// 			ret[tag] ??= [];
	// 			ret[tag].push(post);
	// 		}
	// 	}

	// 	ret = Object.fromEntries(Object.entries(ret).sort((a, b) => b[1].length - a[1].length));

	// return ret;
	// }
	//  tagList: function (collection) {
	//    let tagSet = new Set();
	//    collection.getAll().forEach(function (item) {
	//      if ("tags" in item.data) {
	//        let tags = item.data.tags;

	//        tags = tags.filter(function (item) {
	//          switch (item) {
	//            // this list should match the `filter` list in tags.njk
	//            case "all":
	//            case "nav":
	//            case "post":
	//            case "posts":
	//              return false;
	//          }

	//          return true;
	//        });

	//        for (const tag of tags) {
	//          tagSet.add(tag);
	//        }
	//      }
	//    });

	//    // returning an array in addCollection works in Eleventy 0.5.3
	//    return [...tagSet];
	//  }
}
