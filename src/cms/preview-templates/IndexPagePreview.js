import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
	const data = entry.getIn(['data']).toJS()

	if (data) {
		return (
			<IndexPageTemplate
				title={data.heroSwiper.title}
				subtitle={data.heroSwiper.subtitle}
				heroSwiper={data.heroSwiper}
				biography={data.biography.text}
				author={data.biography.author}
				tagline={data.biography.tagline}
				contactTitle={data.contact.title}
				email={data.contact.email}
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
	getAsset: PropTypes.func
}

export default IndexPagePreview
