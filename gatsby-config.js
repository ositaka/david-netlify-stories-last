module.exports = {
	siteMetadata: {
		title: 'David Alioth',
		description: 'Photographer and Creative Director',
		email: 'info@davidalioth.com',
		facebook: '#',
		instagram: 'https://www.instagram.com/the_davidalioth/'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/static/img`,
				name: 'uploads'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages`,
				name: 'pages'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/img`,
				name: 'images'
			}
		},
		'gatsby-plugin-sharp',
		'gatsby-plugin-transition-link',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-relative-images',
						options: {
							name: 'uploads'
						}
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048
						}
					},
					{
						resolve: 'gatsby-remark-copy-linked-files',
						options: {
							destinationDir: 'static'
						}
					},
					{
						resolve: 'gatsby-plugin-smoothscroll'
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {
				precachePages: [`/stories/*`],
        		globPatterns: ['**/*.{js,jpg,html,css}'],
			}
		},
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
				stylesPath: `${__dirname}/src/cms/admin.css`,
				enableIdentityWidget: true
			}
		},
		{
			resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
			options: {
				develop: true, // Activates purging in npm run develop
				purgeOnly: ['/all.sass'] // applies purging only on the bulma css file
			}
		}, // must be after other CSS plugins
		'gatsby-plugin-netlify' // make sure to keep it last in the array
	]
}
