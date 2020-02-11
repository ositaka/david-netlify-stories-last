import React from 'react'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'

const Footer = class extends React.Component {
	render() {
		return (
			<footer className="footer has-background-black has-text-white-ter">
				<div className="content has-text-centered">Contact me: Email</div>
				<div className="content has-text-centered social">
					<a title="facebook" href="https://facebook.com">
						<img
							src={facebook}
							alt="Facebook"
							style={{ width: '1em', height: '1em' }}
						/>
					</a>
					<a title="instagram" href="https://instagram.com">
						<img
							src={instagram}
							alt="Instagram"
							style={{ width: '1em', height: '1em' }}
						/>
					</a>
				</div>
			</footer>
		)
	}
}

export default Footer
