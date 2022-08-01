import HonorSectionBg from '../assets/images/HonorSectionBg.png'

const Honor = () => {
	return (
		<div className="honor">
			<div className="content_container">
				<h2>Honor</h2>
				<p>
					<span>Honor</span> - All Samurai live and die by a code. The Seppuku clan is no different. We live and die by Honor. We have 5
					core beliefs in our Honor Code.
					<br />
					<span>Strategy</span>
					<br />
					<span>Community</span>
					<br />
					<span>Generosity</span>
					<br />
					<span>Fairness</span>
					<br />
					<span>Transparency</span>
					<br />
					Our Honor Promises all line up with these Beliefs. <br />
					• 50% of all mint proceeds and secondary royalties will be put into a treasury for the project
					<br />
					• Community will be our number priority always. We will do everything to ensure a strong and loyal community
					<br />
					• Royalties will be set to 5% at the beginning of the project, then lowered to 2.5%
					<br />
					• A truly fair and random reveal, with on chain proof
					<br />• updates on use of treasury funds, funds received for treasury and future plans of the project where permitted
				</p>
			</div>

			<div className="bg">
				<img src={HonorSectionBg} alt="" />
			</div>
		</div>
	)
}

export default Honor
