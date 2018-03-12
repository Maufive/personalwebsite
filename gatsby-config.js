module.exports = {
	siteMetadata: {
		title: `Niklas Albinsson`
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data/`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `img`,
				path: `${__dirname}/src/img/`
			}
		},
		`gatsby-plugin-sass`,
		`gatsby-transformer-remark`,
		`gatsby-plugin-glamor`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`
	]
};
