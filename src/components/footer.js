import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import * as footerStyles from './scss/footer.module.scss'

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
				}
			}
		}
	`)

	return (
		<footer className={footerStyles.footer}>
			This is my footer
		</footer>
	)
}

export default Footer