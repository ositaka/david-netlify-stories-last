import React from 'react'
import PropTypes from 'prop-types'
import { StoryGalleryTemplate } from '../../templates/story-post'

const StoryPostPreview = ({ entry, getAsset }) => {
	const entryGallery = entry.getIn(['data', 'gallery', 'images'])
	const images = entryGallery ? entryGallery.toJS() : []

	return (
		<StoryGalleryTemplate
			gallery={{ images }}
			// gallery={data.gallery || { images: [] }}
		/>
	)
}

StoryPostPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	getAsset: PropTypes.func

	// test - maybe not be needed
	// gallery: PropTypes.shape({
	// 	images: PropTypes.array
	// })
}

export default StoryPostPreview