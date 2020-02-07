import React from 'react'
import PropTypes from 'prop-types'
import { StoryGalleryTemplate } from '../../templates/story-gallery'

const StoryGalleryPreview = ({ entry, widgetFor }) => {
	// nuno
	const entryGallery = entry.getIn(['data', 'gallery', 'images'])
	const images = entryGallery ? entryGallery.toJS() : []

	// const tags = entry.getIn(['data', 'tags'])
	return (
		<StoryGalleryTemplate
			// content={widgetFor('body')}
			// description={entry.getIn(['data', 'description'])}
			// tags={tags && tags.toJS()}
			// title={entry.getIn(['data', 'title'])}
			gallery={{ images }}
			// gallery={data.gallery || { images: [] }}
		/>
	)
}

StoryGalleryPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func

	// test - maybe not needed
	// gallery: PropTypes.shape({
	// 	images: PropTypes.array
	// })
}

export default StoryGalleryPreview
