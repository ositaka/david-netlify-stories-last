import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
	const data = entry.getIn(['data']).toJS()

	if (data) {
		return (
			<IndexPageTemplate
				title={data.title}
				subtitle={data.subtitle}
				heroSwiper={data.slides || { images: [] }}
				biography={data.text}
				author={data.author}
				tagline={data.tagline}
				contactTitle={data.title}
				email={data.email}
				// intro={data.intro || { blurbs: [] }}
			/>
		)
	} else {
		return <div>Loading...</div>
	}
}

IndexPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	getAsset: PropTypes.func,

	// heroSwiper: PropTypes.shape({
	// 	title: PropTypes.string,
	// 	subtitle: PropTypes.string,
	// 	images: PropTypes.array
	// }),
	// biography: PropTypes.string,
	// author: PropTypes.string,
	// tagline: PropTypes.string,
	// contactTitle: PropTypes.string,
	// email: PropTypes.string
}

export default IndexPagePreview
