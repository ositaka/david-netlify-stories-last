import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const StoryGalleryPreview2 = ({ entry, widgetFor }) => {
	const data = entry.getIn(['data']).toJS()

	if (data) {
		return (
			<>
				<BlogPostTemplate gallery={data.gallery || { images: [] }} />
			</>
		)
	} else {
		return <div>Loading...</div>
	}
}

StoryGalleryPreview2.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func,

	// test - maybe not needed
	gallery: PropTypes.shape({
		images: PropTypes.array
	})
}

export default StoryGalleryPreview2
