module.exports = {
	"title": "Kariyma Murphy",
	"description": "I do a little bit of this and a little bit of that",
	"url": "https://eleventywebstarter.netlify.app",
	"language": "en",
	"author": {
		"name": "Kariyma Murphy",
		"email": "kariyma@oohnice.design",
		"url": "https://example.com/about-me/"
	},
	"meta_data": {
		"twitter": "@chrissy_dev",
		"opengraph_default": "/static/opengraph-default.jpg"
	},
	"contentSecurityPolicy": "script-src 'self' 'sha256-5Q8RNJikjaqeyhUBIQkfXmRXMiv8+CaIXSlMRpOOiTE=' cdnjs.cloudflare.com fonts.googleapis.com unpkg.com/decap-cms@^3.0.0 unpkg.com/ionicons@7.1.0 plausible.io identity.netlify.com; font-src 'self' fonts.gstatic.com; img-src 'self' imagedelivery.net res.cloudinary.com;",
	"env": process.env.ELEVENTY_ENV === 'production'
}
