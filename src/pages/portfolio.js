import React from "react";
import Project from "../components/Project";
import MyMusicImg from "../img/mymusic-thumb.png";
import MatsAkeImg from "../img/matsake-thumb.png";
import JamImg from "../img/jam-thumb.png";
import SimonSaysImg from "../img/simon-says-thumb.png";
import ColorGameImg from "../img/color-game-thumb.png";
import GoatImg from "../img/goattv-thumb.png";

import ScrollAnimation from "react-animate-on-scroll";

const Portfolio = () => ({
	render() {
		return (
			<div className={"portfolio-page flex"}>
				<div className="timeline" />
				<ScrollAnimation
					animateIn="slide-in"
					animateOut="slide-out-right"
					offset={150}
				>
					<Project
						title={"GOAT TV"}
						description={"Upptäck nya filmer och serier!"}
						tech={["React", "ES6 JavaScript", "SCSS"]}
						imageUrl={GoatImg}
						gitLink={"https://github.com/Maufive/maudb"}
						demoLink={"https://maudb.surge.sh/"}
						date={"2018 / 02 / 25"}
					/>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="slide-in"
					animateOut="slide-out-left"
					offset={150}
				>
					<Project
						title={"mymusic"}
						description={
							"Kolla statistik på vilken musik du lyssnat på via Spotify/LastFM."
						}
						tech={["React", "ES6 JavaScript", "SCSS"]}
						imageUrl={MyMusicImg}
						gitLink={"https://github.com/Maufive/mymusic"}
						demoLink={"https://maufive.github.io/mymusic/"}
						date={"2017 / 11 / 02"}
					/>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="slide-in"
					animateOut="slide-out-right"
					offset={150}
				>
					<Project
						title={"JAM"}
						description={
							"Webb-app byggd med Spotify's Web API, ReactJS och NodeJS"
						}
						tech={["React", "NodeJS", "SCSS", "ES6 JavaScript"]}
						imageUrl={JamImg}
						gitLink={"https://github.com/Maufive/test-jam"}
						demoLink={"#"}
						date={"2017 / 09 / 28"}
					/>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="slide-in"
					animateOut="slide-out-left"
					offset={150}
				>
					<Project
						title={"ELON Mats-Åke på Teg"}
						description={
							"Hemsida gjort på uppdrag av ett lokalt ELON-företag för deras butik i Umeå."
						}
						tech={["HTML5", "CSS3", "JS"]}
						imageUrl={MatsAkeImg}
						gitLink={"https://github.com/Maufive/Matsake"}
						demoLink={"https://www.elonumea.se/"}
						date={"2017 / 07 / 20"}
					/>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="slide-in"
					animateOut="slide-out-right"
					offset={150}
				>
					<Project
						title={"Simon Says Game"}
						description={"Enkelt spel gjort i vanilla-js."}
						tech={["HTML5", "CSS3", "ES6 JavaScript"]}
						imageUrl={SimonSaysImg}
						gitLink={"https://github.com/Maufive/simon-says"}
						demoLink={"https://maufive.github.io/simon-says/"}
					/>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="slide-in"
					animateOut="slide-out-left"
					offset={150}
				>
					<Project
						title={"Color Guessing Game"}
						description={"Spel skrivet helt i vanilla-js."}
						tech={["HTML5", "CSS3", "ES6 JavaScript"]}
						imageUrl={ColorGameImg}
						gitLink={"https://github.com/Maufive/color-game"}
						demoLink={"https://maufive.github.io/color-game/"}
					/>
				</ScrollAnimation>
			</div>
		);
	}
});

export default Portfolio;