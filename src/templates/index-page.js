import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import TypeIt from 'typeit-react'

import Layout from '../components/Layout'
import HeroSwiper from '../components/HeroSwiper'
import StoriesRoll from '../components/StoriesRoll'
import ContactForm from '../components/ContactForm'
import '../components/Animations.css'

export const IndexPageTemplate = ({
					title,
					subtitle,
					heroSwiper,
					biography,
					author,
					tagline,
					contactTitle
				}) => (
					<div>
						<section id="home">
							<div className="hero">
								<h1 className="title">{title}</h1>
								<h2 className="title title-stroke">
									{/* {subtitleText1}
									{subtitleText2} */}
									<TypeIt
										options={{
											loop: true,
											speed: 20,
											cursor: false,
										}}
										getBeforeInit={instance => {
											instance
												.type('Photographer &')
												.pause(2600)
												.delete()
												.pause(100)
												.type('Creative Director')
												.pause(2600)
												.delete()

											// Remember to return it!
											return instance
										}}
									/>
								</h2>
							</div>
							<div className="hero-swiper">
								<HeroSwiper slides={heroSwiper.images} />
							</div>
						</section>
						<section id="stories">
							<Fade bottom cascade>
								<h1 className="title">Stories</h1>
							</Fade>
							<Fade right>
								<StoriesRoll />
							</Fade>
						</section>
						<section id="biography" className="section">
							<Fade bottom>
								<blockquote>{biography}</blockquote>
								<p>{author}</p>
								<small>{tagline}</small>
							</Fade>
						</section>
						<section id="inquiries" className="contact">
							<Fade bottom cascade>
								<h1 className="title">Business Inquiries</h1>
							</Fade>
							<Fade bottom>
								<h2 className="subtitle">{contactTitle}</h2>
								<ContactForm />
							</Fade>
						</section>
					</div>
				)

IndexPageTemplate.propTypes = {
	heroSwiper: PropTypes.shape({
		title: PropTypes.string,
		subtitle: PropTypes.string,
		images: PropTypes.array
	}),
	biography: PropTypes.string,
	author: PropTypes.string,
	tagline: PropTypes.string,
	contactTitle: PropTypes.string
}

const IndexPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark

	return (
		<Layout>
			<IndexPageTemplate
				title={frontmatter.heroSwiper.title}
				subtitle={frontmatter.heroSwiper.subtitle}
				heroSwiper={frontmatter.heroSwiper}
				biography={frontmatter.biography.text}
				author={frontmatter.biography.author}
				tagline={frontmatter.biography.tagline}
				contactTitle={frontmatter.contact.title}
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
				heroSwiper {
					title
					subtitle
					images {
						image {
							childImageSharp {
								fluid(maxWidth: 2048, quality: 100) {
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
				}
			}
		}
	}
`
