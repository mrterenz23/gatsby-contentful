import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
	return (
		<Layout>
			<div className="container">
				<h1>About Me</h1>
				<p>I currently tech full-time on Udemy</p>
				<p><Link to="/contact">Want to work with me? Reach out.</Link></p>
			</div>
		</Layout>
	)
}

export default AboutPage