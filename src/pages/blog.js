import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import * as blogStyles from './scss/blog.module.scss'

const BlogPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulBlogPost (
				sort: {
			  		fields:publishedDate,
			  		order:DESC
				}
		  	) {
				edges {
			  		node {
						title
						slug
						publishedDate(formatString:"MMMM Do, YYYY")
			  		}
				}
		  	}
		}
	`)

	return (
		<Layout>
			<div className="container">
				<h1>Blog</h1>
				<ol className={blogStyles.blogs}>
					{data.allContentfulBlogPost.edges.map((edge) => {
						return (
							<li>
								<Link to={`/blog/${edge.node.slug}`}>
									<h2>{edge.node.title}</h2>
									<p>{edge.node.publishedDate}</p>
								</Link>
							</li>
						)
					})}
				</ol>
			</div>
		</Layout>
	)
}

export default BlogPage