import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo }) => {
	const imageStyle = { borderRadius: '0' }
	const { alt = '', childImageSharp, image } = imageInfo

	if (!!image && !!image.childImageSharp) {
		return (
			// original - <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
			// fix for "react-id-swiper" // more at: https://spectrum.chat/gatsby-js/general/i-am-having-trouble-with-imagesharp-plugin-when-used-in-react-id-swiper~6785e7ad-47f5-4371-a358-5297157816c5
			<Img
				style={imageStyle}
				fluid={image.childImageSharp.fluid}
				alt={alt}
				loading="eager"
				imgStyle={{
					opacity: 1,
					transition: 'all 600ms ease',
					backgroundColor: 'rgba(0,0,0,.3)',
				}}
				placeholderStyle={{
					opacity: 0,
					transition: 'all 600ms ease',
					backgroundColor: 'rgba(0,0,0,.3)' 
				}}
			/>
		)
	}

	if (!!childImageSharp) {
		return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
	}

	if (!!image && typeof image === 'string')
		return <img style={imageStyle} src={image} alt={alt} />

	return null
}

PreviewCompatibleImage.propTypes = {
	imageInfo: PropTypes.shape({
		alt: PropTypes.string,
		childImageSharp: PropTypes.object,
		image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
		style: PropTypes.object
	}).isRequired
}

export default PreviewCompatibleImage
