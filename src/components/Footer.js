import React from 'react'
import facebookIcon from '../img/social/facebook.svg'
import instagramIcon from '../img/social/instagram.svg'
import useSiteMetadata from './SiteMetadata'
import Fade from 'react-reveal/Fade'

const Footer = () => {
	const { email, facebook, instagram } = useSiteMetadata()

		return (
			<footer className="footer">
				<Fade bottom>
					<div className="content">
						<span>Contact me</span>
						<a href={`mailto: ${email}`}>{email}</a>
					</div>
					<div className="content social">
						<span>Follow me</span>
						<a title="facebook" href={`${facebook}`}>
							<img
								src={facebookIcon}
								alt="Facebook"
								style={{ width: '1em', height: '1em' }}
							/>
						</a>
						<a title="instagram" href={`${instagram}`}>
							<img
								src={instagramIcon}
								alt="Instagram"
								style={{ width: '1em', height: '1em' }}
							/>
						</a>
					</div>
				</Fade>
			</footer>
		)
}

export default Footer
