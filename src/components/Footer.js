import React from 'react'
import instagramIcon from '../img/social/instagram.svg'
import useSiteMetadata from './SiteMetadata'
import Fade from 'react-reveal/Fade'

const Footer = () => {
	const { email, instagram } = useSiteMetadata()

		return (
			<>
				<aside className="site-by">
					Site by&nbsp;<a href="https://mediacreators.studio" title="Media Creators Studio">mediacreators.studio</a>
				</aside>
				<footer className="footer">
					<Fade bottom>
						<div className="content">
							<span>Contact me</span>
							<a href={`mailto: ${email}`}>{email}</a>
						</div>
						<div className="content social">
							<span>Follow me</span>
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
			</>
		)
}

export default Footer
