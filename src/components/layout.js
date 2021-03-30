import React from 'react'

import Header from './header'
import Footer from './footer'
import '../styles/reset.scss'
import '../styles/base.scss'
import '../styles/spacing.scss'
import './scss/layout.scss'

const Layout = (props) => {
	return (
		<div className="content-wrapper">
			<Header />
			<div className="main-content">
				{props.children}
			</div>
			<Footer />
		</div>
	)
}

export default Layout