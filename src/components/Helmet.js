import React from 'react';
import { Helmet } from "react-helmet";


const Helmet = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{this.props.page} | Niklas Portfolio</title>
    <meta name="description" content="Niklas Albinsson webutvecklare och webdesigner från Umeå. Jag hjälper dig med din hemsida för privatpersoner och företag." />
  </Helmet>
);

export default Helmet;