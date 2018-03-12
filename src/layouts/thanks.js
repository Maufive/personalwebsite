import React from "react";
import Link from "gatsby-link";

export default () => (
	<div className={"tack-container"}>
		<h1>Tack för ditt meddelande! 👏</h1>
		<p>Jag kommer att återkomma till dig så snart jag kan! </p>
    <Link to="/">Tillbaka</Link>
	</div>
);
