import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const StoryGalleryTemplate = ({ helmet, gallery }) => {
	return (
		<section className="section">
			{helmet || ''}
			{gallery.map(image => (
				<div key={image.title}>
					<h4>{image.title}</h4>
					<p>{image.model}</p>
					<PreviewCompatibleImage imageInfo={image} />
				</div>
			))}
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
		<Layout>
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
		</Layout>
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

// ---------------------------------------------------
// LightBox
// ---------------------------------------------------

// REVIEW DEPENDENCY
// ADD ON package.JSON

// ***********
// other example:
// https://codesandbox.io/s/react-photo-gallery-basic-rows-1kvfg
// ***********

// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------
// ---------------------------------------------------

// ---------------------------------------------------
// swipper
// ---------------------------------------------------

// import Swiper from 'react-id-swiper'
// import 'swiper/css/swiper.css'

// export const StoryGalleryTemplate = ({ helmet, gallery }) => {
// 	const params = {
// 		slidesPerView: 1.8,
// 		loop: true,
// 		speed: 900,

// 		pagination: {
// 			el: '.swiper-pagination',
// 			clickable: true
// 		}
// 	}

// 	return (
// 		<section className="section">
// 			{helmet || ''}

// 			<Swiper {...params}>
// 				{gallery.map(image => (
// 					<div key={image.title}>
// 						<h4>{image.title}</h4>
// 						<p>{image.model}</p>
// 						<PreviewCompatibleImage imageInfo={image} />
// 					</div>
// 				))}
// 			</Swiper>
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
// 			}
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
