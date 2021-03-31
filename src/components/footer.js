import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import * as footerStyles from './scss/footer.module.scss'

const Footer = () => {
	return (
		<footer className={footerStyles.footer}>
			This is my footer
		</footer>
	)
}

export default Footer