import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import HeroSwiper from '../components/HeroSwiper'
import StoriesRoll from '../components/StoriesRoll'
import ContactForm from '../components/ContactForm'
import '../components/StoriesRoll.css'

export const IndexPageTemplate = ({
	title,
	subtitle,
	heroSwiper,
	biography,
	author,
	tagline,
	contactTitle,
	email
}) => (
	<div>
		<section id="home">
			<div className="hero">
				<h1 className="title">{title}</h1>
				<h2 className="title title-stroke">{subtitle}</h2>
			</div>
			<div className="hero-swiper">
				<HeroSwiper slides={heroSwiper.images} />
			</div>
		</section>
		<section id="stories">
			<h1 className="title">Stories</h1>
			<StoriesRoll />
		</section>
		<section id="biography" className="section">
			<blockquote>{biography}</blockquote>
			<p>{author}</p>
			<small>{tagline}</small>
		</section>
		<section id="inquiries" className="contact">
			<h1 className="title">
				Business <span>Inquiries</span>
			</h1>
			<h2 className="subtitle">{contactTitle}</h2>
			<ContactForm />
			<p>Contact me {email}</p>
			<p>Follow me</p>
		</section>
	</div>
)

IndexPageTemplate.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	heroSwiper: PropTypes.shape({
		images: PropTypes.array
	}),
	biography: PropTypes.string,
	author: PropTypes.string,
	tagline: PropTypes.string,
	contactTitle: PropTypes.string,
	email: PropTypes.string
}

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark

	return (
		<Layout>
			<IndexPageTemplate
				title={frontmatter.title}
				subtitle={frontmatter.subtitle}
				heroSwiper={frontmatter.heroSwiper}
				biography={frontmatter.biography.text}
				author={frontmatter.biography.author}
				tagline={frontmatter.biography.tagline}
				contactTitle={frontmatter.contact.title}
				email={frontmatter.contact.email}
			/>
		</Layout>
	)
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
}

export default IndexPage

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
			frontmatter {
				title
				subtitle
				heroSwiper {
					images {
						image {
							childImageSharp {
								fluid(maxWidth: 2048, quality: 64) {
									...GatsbyImageSharpFluid
								}
							}
						}
						title
					}
				}
				biography {
					text
					author
					tagline
				}
				contact {
					title
					email
				}
			}
		}
	}
`
