import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

class StoriesRoll extends React.Component {
	render() {
		const { data } = this.props
		const { edges: posts } = data.allMarkdownRemark

		const params = {
			slidesPerView: 1.8,
			loop: true,
			speed: 900,

			pagination: {
				el: '.swiper-pagination',
				clickable: true
			}
		}

		return (
			<Swiper {...params}>
				{posts &&
					posts.map(({ node: post }) => (
						<div key={post.id}>
							<Link
								className="title has-text-primary is-size-4"
								to={post.fields.slug}
							>
								{post.frontmatter.featuredimage ? (
									<PreviewCompatibleImage
										imageInfo={{
											image: post.frontmatter.featuredimage,
											alt: `featured image thumbnail for storie ${
												post.frontmatter.title
											}`
										}}
									/>
								) : null}
								<h4>{post.frontmatter.title}</h4>
								<p>{post.frontmatter.model}</p>
							</Link>
						</div>
					))}
			</Swiper>
		)
	}
}

StoriesRoll.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
}

export default () => (
	<StaticQuery
		query={graphql`
			query StoriesRollQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: { frontmatter: { templateKey: { eq: "story-gallery" } } }
				) {
					edges {
						node {
							id
							fields {
								slug
							}
							frontmatter {
								title
								templateKey
								featuredimage {
									childImageSharp {
										fluid(maxWidth: 2048, quality: 100) {
											...GatsbyImageSharpFluid
										}
									}
								}
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <StoriesRoll data={data} count={count} />}
	/>
)
