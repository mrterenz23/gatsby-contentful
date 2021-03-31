import React from 'react'
import { Link } from 'gatsby'

import * as headerStyles from './scss/header.module.scss'

const Header = () => {

	return (
		<header className={headerStyles.header}>
			<div className={headerStyles.headerWrapper}>
				<div className={headerStyles.headerGlobal}>
					<a className={headerStyles.headerGlobalLink}>
						Global
						<span>
			              <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
			                <path d="M0 0L5 5L10 0H0Z"></path>
			              </svg>
			            </span>
					</a>
					<Link className={headerStyles.headerLogo} to="/">
						<img src={`images/logo.png`} alt="" />
					</Link>
				</div>
				<nav className={headerStyles.headerNav}>
					<ul>
						<li>
							<Link to="/">Services</Link>
						</li>
						<li>
							<Link to="/">Cases</Link>
						</li>
						<li>
							<Link to="/">About</Link>
						</li>
						<li>
							<Link to="/">Careers</Link>
						</li>
						<li>
							<Link to="/">Thought Leadership</Link>
						</li>
						<li>
							<Link to="/">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header