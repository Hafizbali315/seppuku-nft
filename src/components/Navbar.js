import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

import EtherscanIcon from '../assets/images/EtherscanIcon.png'
import OpenseaIcon from '../assets/images/OpenseaIcon.png'
import TwitterIcon from '../assets/images/TwitterIcon.png'
import DiscordIcon from '../assets/images/DiscordIcon.png'

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false)

	return (
		<div className="navbar">
			<ul className="links">
				<li>
					<a className="link" href="#home">
						Home
					</a>
				</li>
				<li>
					<a className="link" href="#honor">
						Honor
					</a>
				</li>
				<li>
					<a className="link" href="#lore">
						Lore
					</a>
				</li>
				<li>
					<a className="link" href="#team">
						team
					</a>
				</li>
				<li>
					<a className="link" href="#faq">
						faq
					</a>
				</li>
			</ul>

			<ul className="social_links">
				<li>
					<a className="link" href="https://etherscan.io/">
						<img src={EtherscanIcon} alt="EtherscanIcon" />
					</a>
				</li>
				<li>
					<a className="link" href="https://opensea.io/">
						<img src={OpenseaIcon} alt="OpenseaIcon" />
					</a>
				</li>
				<li>
					<a className="link" href="https://twitter.com/">
						<img src={TwitterIcon} alt="TwitterIcon" />
					</a>
				</li>
				<li>
					<a className="link" href="https://discord.com/">
						<img src={DiscordIcon} alt="DiscordIcon" />
					</a>
				</li>
			</ul>

			<div className="mobile_navbar">
				<div className="logo">SEPPUKU</div>
				<div className="hamburger">
					{showMobileMenu ? (
						<span onClick={() => setShowMobileMenu(false)} className="icon">
							{' '}
							X{' '}
						</span>
					) : (
						<GiHamburgerMenu onClick={() => setShowMobileMenu(true)} className="icon" />
					)}
				</div>
			</div>

			{showMobileMenu && (
				<ul className="mobile_menu">
					<li>
						<a className="link" onClick={() => setShowMobileMenu(false)} href="#home">
							Home
						</a>
					</li>
					<li>
						<a className="link" onClick={() => setShowMobileMenu(false)} href="#honor">
							Honor
						</a>
					</li>
					<li>
						<a className="link" onClick={() => setShowMobileMenu(false)} href="#lore">
							Lore
						</a>
					</li>
					<li>
						<a className="link" onClick={() => setShowMobileMenu(false)} href="#team">
							team
						</a>
					</li>
					<li>
						<a className="link" onClick={() => setShowMobileMenu(false)} href="#faq">
							faq
						</a>
					</li>

					<li>
						<ul className="social_links">
							<li>
								<a className="link" onClick={() => setShowMobileMenu(false)} href="https://etherscan.io/">
									<img src={EtherscanIcon} alt="EtherscanIcon" />
								</a>
							</li>
							<li>
								<a className="link" onClick={() => setShowMobileMenu(false)} href="https://opensea.io/">
									<img src={OpenseaIcon} alt="OpenseaIcon" />
								</a>
							</li>
							<li>
								<a className="link" onClick={() => setShowMobileMenu(false)} href="https://twitter.com/">
									<img src={TwitterIcon} alt="TwitterIcon" />
								</a>
							</li>
							<li>
								<a className="link" onClick={() => setShowMobileMenu(false)} href="https://discord.com/">
									<img src={DiscordIcon} alt="DiscordIcon" />
								</a>
							</li>
						</ul>
					</li>
				</ul>
			)}
		</div>
	)
}

export default Navbar
