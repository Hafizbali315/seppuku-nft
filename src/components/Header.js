import { useState } from 'react'
import Navbar from './Navbar'

import HeaderSectionBg from '../assets/images/HeaderBg1.png'

const Header = () => {
	const [countValue, setCountValue] = useState(4)

	const increment = () => {
		if (countValue >= 0 && countValue < 9) {
			setCountValue(countValue + 1)
		}
	}

	const decrement = () => {
		if (countValue <= 9 && countValue > 0) {
			setCountValue(countValue - 1)
		}
	}

	return (
		<div className="header">
			<Navbar />

			<div className="content_section">
				<h1>SEPPUKU</h1>

				<div className="counter">
					<button className="count" onClick={decrement}>
						{' '}
						-{' '}
					</button>
					<div className="input_container">{countValue}</div>
					<button className="count" onClick={increment}>
						{' '}
						+{' '}
					</button>
				</div>

				<button className="mint_btn">mint</button>
			</div>

			<div className="bg">
				<img src={HeaderSectionBg} alt="headerbg" />
			</div>
		</div>
	)
}

export default Header
