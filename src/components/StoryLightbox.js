// import React from 'react'
// import PropTypes from 'prop-types'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

// const StoryLightbox = ({ gallery }) => {
// 	return (
// 		<>
// 			{gallery.map(image => (
// 				<div key={image.title}>
// 					<h4>{image.title}</h4>
// 					<p>{image.model}</p>
// 					<PreviewCompatibleImage imageInfo={image} />
// 				</div>
// 			))}
// 		</>
// 	)
// }

// StoryLightbox.propTypes = {
// 	slides: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
// 			title: PropTypes.string,
// 			model: PropTypes.string
// 		})
// 	)
// }

// export default StoryLightbox

// -----------------------------------------
// ----- NEW LIGHTBOX ----------------------
// -----------------------------------------

import React from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app

const StoryLightbox = class extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			photoIndex: 0,
			isOpen: true
		}
	}

	render() {
		const { photoIndex, isOpen } = this.state

		const images = [
			'//placekitten.com/1500/500',
			'//placekitten.com/4000/3000',
			'//placekitten.com/800/1200',
			'//placekitten.com/1500/1500'
		]

		return (
			<div>
				<button type="button" onClick={() => this.setState({ isOpen: true })}>
					Open Lightbox
				</button>

				{isOpen && (
					<Lightbox
						mainSrc={images[photoIndex]}
						nextSrc={images[(photoIndex + 1) % images.length]}
						prevSrc={images[(photoIndex + images.length - 1) % images.length]}
						onCloseRequest={() => this.setState({ isOpen: false })}
						onMovePrevRequest={() =>
							this.setState({
								photoIndex: (photoIndex + images.length - 1) % images.length
							})
						}
						onMoveNextRequest={() =>
							this.setState({
								photoIndex: (photoIndex + 1) % images.length
							})
						}
					/>
				)}
			</div>
		)
	}
}

// ----------------------------------------------------
// ----------------------------------------------------
// StoryLightbox.propTypes = {
// 	slides: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
// 			title: PropTypes.string,
// 			model: PropTypes.string
// 		})
// 	)
// }

// ----------------------------------------------------
// ----------------------------------------------------
export default StoryLightbox

// -----------------------------------------
// ----- NEW PhotoSwipe --------------------
// -----------------------------------------

// import React, { useState, Fragment } from 'react'
// import PhotoSwipeWrapper from './photoSwipe'

// export default () => {
// 	const [isOpen, setIsOpen] = useState(false)
// 	const [index, setIndex] = useState(0)

// 	const items = [
// 		{
// 			src: 'https://placekitten.com/600/400',
// 			w: 600,
// 			h: 400
// 		},
// 		{
// 			src: 'https://placekitten.com/1200/900',
// 			w: 1200,
// 			h: 900
// 		}
// 	]

// 	const handleOpen = index => {
// 		setIsOpen(true)
// 		setIndex(index)
// 	}

// 	const handleClose = () => {
// 		setIsOpen(false)
// 	}

// 	console.log(items)
// 	return (
// 		<Fragment>
// 			<div>
// 				{items.map((item, i) => (
// 					<div
// 						key={i}
// 						onClick={() => {
// 							handleOpen(i)
// 						}}
// 					>
// 						Image {i}
// 					</div>
// 				))}
// 			</div>
// 			<PhotoSwipeWrapper
// 				isOpen={isOpen}
// 				index={index}
// 				items={items.large}
// 				onClose={handleClose}
// 			/>
// 		</Fragment>
// 	)
// }

// ----------------------------------------------------
// ----------------------------------------------------
// StoryLightbox.propTypes = {
// 	slides: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
// 			title: PropTypes.string,
// 			model: PropTypes.string
// 		})
// 	)
// }

// ----------------------------------------------------
// ----------------------------------------------------
// export default StoryLightbox
