import React from 'react';
import TiMail from 'react-icons/lib/ti/mail';
import TiGithub from 'react-icons/lib/ti/social-github';
import TiFacebook from 'react-icons/lib/ti/social-facebook';
import TiTwitter from 'react-icons/lib/ti/social-twitter';

const MainCard = () => {
  return (
    <div className={'container'}>
      <div className={'avocado'}>
        <div className={'avatar'} />
      </div>
      <div className={'bio'}>
        <h1>Niklas Albinsson</h1>
        <h3>Front-End Utvecklare</h3>
        <p>
          Jag gillar att bygga hemsidor, appar och annat web-relaterat. Skriv någon
          mer personlig info om mig själv här. Borde inte vara mycket längre än
          såhär.
        </p>
        <div className={'contact'}>
          <span>Kontakt: </span>
          <TiMail />
          <TiGithub />
          <TiFacebook />
          <TiTwitter />
        </div>
      </div>
    </div>
  );
};

export default MainCard;
