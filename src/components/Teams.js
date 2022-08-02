import TeamCard from './TeamCard'

import TeamSectionBg from '../assets/images/TeamSectionBg.png'

const Teams = () => {
	return (
		<div className="team" id="team">
			<div className="content_container">
				<h2>Teams</h2>

				<div className="teams_row">
					<TeamCard name="Daimyo" designation="Founder" />
					<TeamCard name="koshogumi" designation="CO-Founder + ARTIST" />
					<TeamCard name="SAB" designation="SMART CONTRACT DEV" />
					<TeamCard name="Sosuke " designation="WEB UI" />
					<TeamCard name="DEGEN" designation="WEB UX / WEB3 INTEGRATION" />
				</div>
			</div>

			<div className="bg">
				<img src={TeamSectionBg} alt="" />
			</div>
		</div>
	)
}

export default Teams
