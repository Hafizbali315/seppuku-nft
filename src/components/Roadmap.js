import RoadmapSectionBg from '../assets/images/RoadmapSectionBg.png'
import RoadmapLeftImg from '../assets/images/RoadmapLeftImg.png'

const Roadmap = () => {
	return (
		<div className="roadmap" id="roadmap">
			<div className="content_container">
				<div className="content">
					<h2>Roadmap</h2>
					<p>
						The Seppuku team is about delivering. Not empty promises. For this reason we will not have your everyday roadmap you see with
						every project. We will focus on delivering quality to our community when it is ready, and no sooner. We have ideas and plans on
						things for the project, but will not give dates until it is 100% ready.
					</p>
				</div>

				<div className="img_section">
					<img src={RoadmapLeftImg} alt="" />
				</div>
			</div>

			<div className="bg">
				<img src={RoadmapSectionBg} alt="RoadmapSectionBg" />
			</div>
		</div>
	)
}

export default Roadmap
