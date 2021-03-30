import React from 'react'
import { graphql } from 'gatsby'

import { BLOCKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Layout from '../components/layout'

export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost (slug: {eq: $slug}) {
			title
			publishedDate(formatString:"MMMM Do, YYYY")
			body {
				raw
				references {
		            ... on ContentfulAsset {
        				__typename
	              		contentful_id
		              	title
	              		fixed(width: 1600) {
	              			width
	              			height
	              			src
              				srcSet
		              	}
		            }
	          	}
			}
		}
	}
`

const Blog = (props) => {
	const options = {
		renderNode: {
			[BLOCKS.EMBEDDED_ASSET]: node => {
				return (
					<img src={node.data.target.fixed.src} alt={node.data.target.title}  />
				)
			}
		}
	}

	return (
		<Layout>
			<h1>{props.data.contentfulBlogPost.title}</h1>
			<p>{props.data.contentfulBlogPost.publishedDate}</p>
			<div className="rich-text">
				{renderRichText(props.data.contentfulBlogPost.body, options)}
			</div>
		</Layout>
	)
}

export default Blog