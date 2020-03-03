import React from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'
import './StorySwiper.css'
import Close from '../img/close.svg'

const StorySwiper = ({ gallery }) => {
	const params = {
		slidesPerView: 1,
		loop: false,
		speed: 900,
		grabCursor: true,
		preloadImages: false,
		autoplay: {
			delay: 12000,
			disableOnInteraction: false
		},
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next'
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		keyboard: {
			enabled: true,
			onlyInViewport: false
		}
	}

	return (
		<>
			<AniLink
				cover
				direction="left"
				to="/#stories"
				className="close-story"
				bg="#000"
				duration={1}
			>
				<img
					src={Close}
					alt="Close this story"
					style={{ width: '1.75em', height: '1.75em' }}
				/>
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
