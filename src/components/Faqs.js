import FaqSectionBg from '../assets/images/FaqsBg.png'

const Faqs = () => {
	return (
		<div className="faqs" id="faq">
			<div className="content_container">
				<h2>FAQS</h2>
				<p>
					<span>Q: Why a banner project?</span>
					<br />
					A: We want to be unique, not your every day project you see pop up. We believe this will be the highest quality banner project to
					date and future chapters of the project will be the same.
				</p>

				<p>
					<span>Q: Is the team based in Japan?</span>
					<br />
					A: The team is primarily based in the US, but some in other countries as well. We have a diverse background from many cultures
					including Japanese, Native American, Latinx, American, and others.
				</p>

				<p>
					<span>Q: What are the plans after the banner and pfp drops? </span>
					<br />
					A: Chapter 3 will be something unique to the NFT scene, we will share details as we get them finalized and can share.
				</p>
			</div>

			<div className="bg">
				<img src={FaqSectionBg} alt="faq" />
			</div>
		</div>
	)
}

export default Faqs
