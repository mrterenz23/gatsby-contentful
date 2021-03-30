/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'Full-Stack Developer!',
		author: 'Aldren Dev',
	},
	plugins: [
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: 'uqhcobdr24t0',
				accessToken: 'bffM298ROdzroZLq0iiPx8vqsJnh8vvzwNwpoCO_iNo'
			}
		},
		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			}
		},
		'gatsby-plugin-sharp',
	],
	pathPrefix: "/gatsby-contentful",
}
