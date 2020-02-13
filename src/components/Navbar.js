/* eslint-disable */
import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import instagram from '../img/social/instagram.svg'

const Navbar = class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			active: true,
			navBarActiveClass: ''
		}
	}

	toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: 'is-active'
					  })
					: this.setState({
							navBarActiveClass: ''
					  })
			}
		)
	}

	render() {
		return (
			<nav
				className="navbar is-transparent"
				role="navigation"
				aria-label="main-navigation"
			>
				<div className="container">
					<div className="navbar-brand">
						{/* Hamburger menu */}
						<div
							className={`navbar-burger burger ${this.state.navBarActiveClass}`}
							data-target="navMenu"
							onClick={() => this.toggleHamburger()}
						>
							<span />
							<span />
							<span />
						</div>
					</div>
					<div
						id="navMenu"
						className={`navbar-menu ${this.state.navBarActiveClass}`}
					>
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
