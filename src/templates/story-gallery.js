import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import StorySwiper from '../components/StorySwiper'

export const StoryGalleryTemplate = ({ helmet, gallery }) => {
	return (
		<section className="">
			{helmet || ''}
			<StorySwiper gallery={gallery} />
		</section>
	)
}

StoryGalleryTemplate.propTypes = {
	helmet: PropTypes.object,
	gallery: PropTypes.arrayOf(
		PropTypes.shape({
			image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
			title: PropTypes.string,
			model: PropTypes.string
		})
	)
}

const StoryGallery = ({ data }) => {
	const { markdownRemark: post } = data

	return (
		<StoryGalleryTemplate
			helmet={
				<Helmet titleTemplate="%s | Stories">
					<title>{`${post.frontmatter.title}`}</title>
					<meta
						name="description"
						content={`${post.frontmatter.description}`}
					/>
				</Helmet>
			}
			gallery={
				(post.frontmatter.gallery && post.frontmatter.gallery.images) || []
			}
		/>
	)
}

StoryGallery.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
}

export default StoryGallery

export const pageQuery = graphql`
	query StoryGalleryByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			frontmatter {
				gallery {
					images {
						image {
							childImageSharp {
								fluid(maxWidth: 2048, quality: 64) {
									...GatsbyImageSharpFluid
								}
							}
						}
						title
						model
					}
				}
			}
		}
	}
`

// -------------------------------
// -------------------------------
// ------ LIGHT BOX WORKING ------
// -------------------------------
// -------------------------------

// import React from 'react'
// import PropTypes from 'prop-types'
// import Helmet from 'react-helmet'
// import { graphql } from 'gatsby'
// import Layout from '../components/Layout'
// // import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
// import StoryLightbox from '../components/StoryLightbox'

// export const StoryGalleryTemplate = ({ helmet, gallery }) => {
// 	return (
// 		<section className="section">
// 			{helmet || ''}
// 			<StoryLightbox gallery={gallery} />
// 		</section>
// 	)
// }

// StoryGalleryTemplate.propTypes = {
// 	helmet: PropTypes.object,
// 	gallery: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
// 			title: PropTypes.string,
// 			model: PropTypes.string
// 		})
// 	)
// }

// const StoryGallery = ({ data }) => {
// 	const { markdownRemark: post } = data

// 	return (
// 		<Layout>
// 			<StoryGalleryTemplate
// 				helmet={
// 					<Helmet titleTemplate="%s | Stories">
// 						<title>{`${post.frontmatter.title}`}</title>
// 						<meta
// 							name="description"
// 							content={`${post.frontmatter.description}`}
// 						/>
// 					</Helmet>
// 				}
// 				gallery={
// 					(post.frontmatter.gallery && post.frontmatter.gallery.images) || []
// 				}
// 			/>
// 		</Layout>
// 	)
// }

// StoryGallery.propTypes = {
// 	data: PropTypes.shape({
// 		markdownRemark: PropTypes.shape({
// 			frontmatter: PropTypes.object
// 		})
// 	})
// }

// export default StoryGallery

// export const pageQuery = graphql`
// 	query StoryGalleryByID($id: String!) {
// 		markdownRemark(id: { eq: $id }) {
// 			id
// 			frontmatter {
// 				gallery {
// 					images {
// 						image {
// 							childImageSharp {
// 								fluid(maxWidth: 2048, quality: 64) {
// 									...GatsbyImageSharpFluid
// 								}
// 							}
// 						}
// 						title
// 						model
// 					}
// 				}
// 			}
// 		}
// 	}
// `
