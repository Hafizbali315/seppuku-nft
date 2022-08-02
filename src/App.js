import Header from './components/Header'
import Honor from './components/Honor'
import Roadmap from './components/Roadmap'
import Lore from './components/Lore'
import Teams from './components/Teams'
import Faqs from './components/Faqs'

import FaqsRedDrops from './assets/images/FaqsRedDrops.png'
import RoadmapRedDrops from './assets/images/RoadmapRedDrops.png'
import VerticalSword from './assets/images/VerticalSword.png'

function App() {
	return (
		<div className="App">
			<Header />
			<Honor />

			<div className="roadmap_graphics">
				<Roadmap />

				<img className="red_drops" src={RoadmapRedDrops} alt="RoadmapRedDrops" />
				<img className="sword" src={VerticalSword} alt="VerticalSword" />
			</div>

			<Lore />
			<Teams />

			<div className="faq_graphics">
				<Faqs />

				<img className="red_drops" src={FaqsRedDrops} alt="FaqsRedDrops" />
			</div>
		</div>
	)
}

export default App
