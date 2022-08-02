const TeamCard = ({ name, designation }) => {
	return (
		<div className="team_card">
			<h3>{name}</h3>
			<h6>{designation}</h6>
		</div>
	)
}

export default TeamCard
