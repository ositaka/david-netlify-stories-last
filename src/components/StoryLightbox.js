import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const StoryLightbox = ({ gallery }) => {
	return (
		<>
			{gallery.map(image => (
				<div key={image.title}>
					<h4>{image.title}</h4>
					<p>{image.model}</p>
					<PreviewCompatibleImage imageInfo={image} />
				</div>
			))}
		</>
	)
}

StoryLightbox.propTypes = {
	slides: PropTypes.arrayOf(
		PropTypes.shape({
			image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
			title: PropTypes.string,
			model: PropTypes.string
		})
	)
}

export default StoryLightbox
