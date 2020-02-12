import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

const StorySwiper = ({ gallery }) => {
	const params = {
		slidesPerView: 1,
		loop: true,
		speed: 900,
		autoplay: {
			delay: 12000,
			disableOnInteraction: false
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true
		}
	}

	return (
		<>
			<a href="javascript:history.back()">Go Back</a>
			<Swiper {...params}>
				{gallery.map(image => (
					<div key={image.title}>
						<PreviewCompatibleImage imageInfo={image} />
						<h4>{image.title}</h4>
						<p>{image.model}</p>
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
