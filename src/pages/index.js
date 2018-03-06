import React from "react";
import TiMail from "react-icons/lib/ti/mail";
import TiGithub from "react-icons/lib/ti/social-github";
import TiFacebook from "react-icons/lib/ti/social-facebook";
import TiTwitter from "react-icons/lib/ti/social-twitter";
import ProfilePic from "../img/profil.jpeg";

const MainCard = () => {
	return (
		<div className={"container flex center main-card"}>
			<div className={"col-2"}>
				<img className={"avatar"} src={ProfilePic} />
			</div>
			<div className={"bio-container flex col-8"}>
				<h1 className={"main-heading"}>Niklas Albinsson</h1>
				<h3 className={"sub-heading"}>JavaScript Utvecklare</h3>
				<p>
					Jag gillar att bygga hemsidor, appar och annat web-relaterat. Skriv
					någon mer personlig info om mig själv här. Borde inte vara mycket
					längre än såhär.
				</p>
				<div className={"contact-list flex"}>
					<span>Kontakt: </span>
					<a href="mailto:albinssonniklas@gmail.com">
						<TiMail className={"mail-icon"} />
					</a>
					<a href="https://github.com/Maufive/">
						<TiGithub className={"github-icon"} />
					</a>
					<a href="https://www.facebook.com/niklas.albinsson">
						<TiFacebook className={"facebook-icon"} />
					</a>
					<a href="#">
						<TiTwitter className={"twitter-icon"} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default MainCard;
