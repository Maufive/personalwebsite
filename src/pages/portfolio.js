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
				<div className="projects container flex col-8">
					<Project
						title={"GOAT TV"}
						description={"Webb-app där man kan upptäcka nya filmer och serier med hjälp av tMDBs databas. Appen byggde jag som ett sätt att öva på AJAX-requests i React samt presentera datan."}
						tags={["React", "ES6 Javascript", "SCSS", "AJAX"]}
						imageUrl={GoatImg}
						gitLink={"https://github.com/Maufive/maudb"}
						demoLink={"https://maudb.surge.sh/"}
					/>
					<Project
						title={"mymusic"}
						description={
							"Har du sammankopplat ditt Spotify-konto med LastFM så kan du med hjälp av den här webb-appen se statisitk på vilken musik du lyssnat på."
						}
						tags={["React", "ES6 Javascript", "AJAX", "SCSS"]}
						imageUrl={MyMusicImg}
						gitLink={"https://github.com/Maufive/mymusic"}
						demoLink={"https://maufive.github.io/mymusic/"}
					/>
					<Project
						title={"ELON Mats-Åke på Teg"}
						description={
							"I uppdrag av ELON Mats-Åke på Teg så byggde jag en egen hemsida åt dem. Detta var mitt första uppdrag med en kund, där jag fick lära mig massor om SEO (Sökmotoroptimering), webb-hosting och Google-Analytics."
						}
						tags={["HTML5", "SEO", "CSS3", "Javascript"]}
						imageUrl={MatsAkeImg}
						gitLink={"https://github.com/Maufive/Matsake"}
						demoLink={"https://xn--matskepteg-45ad.se/"}
					/>
				</div>
			</div>
		);
	}
});

export default Portfolio;