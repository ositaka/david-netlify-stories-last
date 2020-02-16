import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import './StorySwiper.css'

const StorySwiper = ({ gallery }) => {
	const params = {
		slidesPerView: 1,
		loop: true,
		speed: 900,
		autoplay: {
			//
			//
			// TESTTTT
			delay: 120000,
			//
			//
			//
			disableOnInteraction: false
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	}

	return (
		<>
			<AniLink cover direction="left" to="/#stories" className="close-story" bg="#000" duration={1}>
				<h1>back</h1>
			</AniLink>
			<Swiper id="StorySwiper" {...params}>
				{gallery.map(image => (
					<div key={image.title}>
						<PreviewCompatibleImage imageInfo={image} />
						<div className="story-title">
							<h4>{image.title}</h4>
							<p>{image.model}</p>
						</div>
					</div>
				))}
			</Swiper>
		</>
	)
}

StorySwiper.propTypes = {
	gallery: PropTypes.arrayOf(
		PropTypes.shape({
			image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
			title: PropTypes.string,
			model: PropTypes.string
		})
	)
}

export default StorySwiper
