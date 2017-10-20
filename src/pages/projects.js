import React from 'react';
import Project from '../components/Project';
import MatsAkeImg from '../img/matsake-thumb.png';
import JamImg from '../img/jam-thumb.png';
import BlogTemplateImg from '../img/blog-template-thumb.png';
import SimonSaysImg from '../img/simon-says-thumb.png';
import ColorGameImg from '../img/color-game-thumb.png';

const Projects = () => ({
  render() {
    return (
      <div className={'projects-grid'}>
        <Project
          title={'JAM'}
          description={
            "Webb-app byggd med Spotify's Web API, ReactJS och NodeJS"
          }
          technologies={['React', 'NodeJS']}
          imageUrl={JamImg}
          gitLink={'https://github.com/Maufive/test-jam'}
          demoLink={'#'}
        />
        <Project
          title={'ELON Mats-Åke på Teg'}
          description={
            'Hemsida gjort på uppdrag av ett lokalt ELON-företag för deras butik i Umeå.'
          }
          technologies={['HTML5', 'CSS3', 'JS']}
          imageUrl={MatsAkeImg}
          gitLink={'https://github.com/Maufive/Matsake'}
          demoLink={'https://www.elonumea.se/'}
        />
        <Project
          title={'Bootstrap Blog Template'}
          description={
            'Enkel layout för en påhittad blog. Gjord med hjälp av Bootstrap v4-alpha.'
          }
          technologies={['HTML5', 'CSS3', 'JS']}
          imageUrl={BlogTemplateImg}
          gitLink={'https://github.com/Maufive/blog-template'}
          demoLink={'https://maufive.github.io/blog-template/'}
        />
        <Project
          title={'Simon Says Game'}
          description={
            'Enkelt spel gjort i vanilla-js.'
          }
          technologies={['HTML5', 'CSS3', 'JS']}
          imageUrl={SimonSaysImg}
          gitLink={'https://github.com/Maufive/simon-says'}
          demoLink={'https://maufive.github.io/simon-says/'}
        />
        <Project
          title={'Color Guessing Game'}
          description={
            'Spel skrivet helt i vanilla-js.'
          }
          technologies={['HTML5', 'CSS3', 'JS']}
          imageUrl={ColorGameImg}
          gitLink={'https://github.com/Maufive/color-game'}
          demoLink={'https://maufive.github.io/color-game/'}
        />
      </div>
    );
  }
});

export default Projects;
