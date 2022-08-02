import LoreSectionBg from '../assets/images/LoreSectionBg.png'
import Slider from 'react-slick'
import { Scrollbars } from 'react-custom-scrollbars'

const Lore = () => {
	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	return (
		<div className="lore" id="lore">
			<div className="content_container">
				<h2>Lore</h2>

				<Slider className="slider" {...settings}>
					<div className="story_card">
						<Scrollbars
							renderThumbVertical={({ style, ...props }) => (
								<div {...props} style={{ ...style, backgroundColor: '#a80101', width: '4px', height: '5px', marginRight: '10px' }} />
							)}
							className="text_container"
						>
							<h3>Chapter 1: The Katana</h3>
							<p>
								The Seppuku clan wasn't successful only due to their speed, strength, intelligence, and team work though. They had the best
								weapon smiths, more specifically, the Katana Kaji. The Katana Kaji played a major part in the success of the Seppuku clan.
								Many considered their weapons a perfect work of art. From the blade to the pommel, perfection. The Katana Kaji didn't just
								craft any katana and give it to the warriors. They spent days, sometimes even weeks with a warrior before starting their
								craft. It was believed they could speak to the warriors soul, knowing exactly what would work best for them. Creating
								something truly special for that warrior. Almost as if the warrior and katana were not separate souls, but instead, one
								combined. Each katana was so sacred to the warriors that in the rare instances that a warrior was lost in battle, or in
								cases of old age or other passings, the katanas were buried deep within a secret tomb known only by the Katana Kaji. They
								were never to be used again by another soul.
							</p>
						</Scrollbars>
					</div>
					<div className="story_card">
						<Scrollbars
							renderThumbVertical={({ style, ...props }) => (
								<div {...props} style={{ ...style, backgroundColor: '#a80101', width: '4px' }} />
							)}
							className="text_container"
						>
							<h3>Chapter 2: Soul of the Katana </h3>
							<p>
								Years passed, the Seppuku clan was growing stronger and faster than ever, taking land more quickly than before. Enemies fled
								their homes at the mere rumor that the Seppuku clan was heading their way. They were an unstoppable force. Until one day,
								the Seppuku clan lost their first battle. Hundreds of warriors slaughtered with no remorse. The Seppuku villagers had no
								idea, weeks passed and there was no sign of the warriors returning. Finally the village decided to send a small group of
								young samurai still in training to scout out the location of the battle, the rest of the warriors would stay and protect the
								village in case of attack. Days passed and the group of young scouts finally made it to the location. It was a complete
								blood bath. Seppuku warriors lay in pools of their own blood, heads chopped off, limbs missing, it looked as if they were
								torn apart by monsters of another sort. The scouts were terrified, they decided to flee and hurry back to the village to
								report what they saw. On their way back the scouts saw two bodies crawling slowly, leaving a trail of blood, they decided to
								get a closer look. As they got closer they were surprised to see it was a pair of Seppuku warriors. They quickly go to the
								warriors, asking them what happened in battle. They did not reply, they looked as if they had just seen a ghost, terrified
								and rambling sentences to themselves. The scouts put together a makeshift bed lift to get the warriors back to the village
								and helped. When the scouts returned with the warriors, the village was quick to aid them. They washed the warriors' wounds
								and got them fed so they could rest. While they were resting the village Fugeki was assigned to look over them. Days passed
								and the warriors still laid resting, not saying a single word outloud. But the Fugeki said their souls were deafening with
								emotions. Terror, grief, yearning, delusion, mixed with a thousand others.
								<br />
								The Fugeki didn't believe what their souls were telling them. They said they were fighting their friends, their dead
								friends. They were Monsters, Ghosts, Demons, sorts you only heard about in folklore. They didn't recognize them by their
								looks but they knew it was their friends that have passed. They were wielding their sacred weapons. There's no other
								explanation.
								<br />
								The Fugeki quickly told the village Daimyo of what the souls of the survivors said. The Daimyo didn't believe them. He said
								it was impossible, the weapons were buried deep in a secret tomb only the Katana Kaji knew the location of, there was no way
								the weapons could have been removed from there. The Daimyo ordered the Katana Kaji to take him to the secret tomb where the
								weapons were buried. They did so, and when they got to the tomb, the entrace was already opened. They knew something was
								wrong. They entered the tomb and took a look around, it was clearly disturbed, weapons scattered on the floor, missing from
								their sacred spots, broken in half. Someone must've broken in. The Daimyo and Katana Kaji looked around the tomb for any
								sort of clue to who could've caused the disturbance. The Daimyo notices a piece of cloth hanging stuck between two rocks. He
								walks over to it to take a closer look. Anger washes over him. The cloth revealed the symbol of a rival clan. They must've
								followed one of the Katana Kaji to the tomb at some point then trespassed into the tomb. Luckily the Daimyo knew exactly
								where the village was of this rival clan, he and the Katana Kaji head back to their village.
								<br />
								The Daimyo gathers the strongest warriors in the village. They're going to hit the rival clan with everything they have.
								It's a two day travel to the rival village, so they head out immediately. When they get to the village, what they see is
								nothing short of a horror story. Again, warriors lay in pools of their own blood, limbs missing and heads chopped off. "How
								is this possible?" the Daimyo asks. He looks around the village and notices a barrel filled with katanas. He takes a closer
								look, they're not just any katanas, they're the Seppuku clans sacred katanas from their lost warriors. Confused even more
								now, the Daimyo doesn't understand how this village bloodbath is nearly identical to what happened to their warriors if the
								sacred katanas were sitting here in this barrel. "Who could've done this?" he asks himself. The Daimyo orders his warriors
								to search for any clues around the village but as he does so the barrel of katanas start to rumble...
							</p>
						</Scrollbars>
					</div>
					<div className="story_card">
						<Scrollbars
							renderThumbVertical={({ style, ...props }) => (
								<div {...props} style={{ ...style, backgroundColor: '#a80101', width: '7px' }} />
							)}
							className="text_container"
						>
							<h3>Chapter 3: The Battle</h3>
						</Scrollbars>
					</div>
				</Slider>
			</div>

			<div className="bg">
				<img src={LoreSectionBg} alt="LoreSectionBg" />
			</div>
		</div>
	)
}

export default Lore
