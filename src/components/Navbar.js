/* eslint-disable */
import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import instagram from '../img/social/instagram.svg'

const Navbar = class extends React.Component {
	render() {
		return (
			<nav
				className="navbar is-transparent"
				role="navigation"
				aria-label="main-navigation"
			>
				<div className="container">
					<div id="navMenu" className="navbar-menu">
						<div className="navbar-start has-text-centered">
							<a
								className="navbar-item"
								title="instagram"
								href="https://instagram.com/the_davidalioth/"
							>
								<img
									src={instagram}
									alt="Instagram"
									style={{ width: '1.2em', height: '1.2em' }}
								/>
							</a>
						</div>
						<div className="navbar-end has-text-centered">
							<button
								className="navbar-item"
								onClick={() => scrollTo('#stories')}
							>
								Stories
							</button>
							<button
								className="navbar-item"
								onClick={() => scrollTo('#inquiries')}
							>
								Inquiries
							</button>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar
