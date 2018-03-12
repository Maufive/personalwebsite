import React from "react";
import Img from "gatsby-image";
import FaGithub from "react-icons/lib/fa/github";
import FaFacebook from "react-icons/lib/fa/facebook";
import FaTwitter from "react-icons/lib/fa/twitter";
import FaInstagram from "react-icons/lib/fa/instagram";
import FaCheck from "react-icons/lib/fa/check";
import Profilbild from "../img/profil.jpg";
import ContactForm from "../layouts/ContactForm";

const MainCard = ({ data }) => {
	return (
		<div className="index-page">
			<div className={"container col flex main-card"}>
				<div className="bio-container col-12 flex">
					<div className={"avatar-container"}>
						<Img
							className={'avatar'}
							sizes={data.profileImage.sizes}
						/>
						{console.log(data.profileImage.sizes)}
					</div>
					<div className={"col flex col-8"}>
						<h1 className={"main-heading"}>Niklas Albinsson</h1>
						<h3 className={"sub-heading"}>Javascript Utvecklare</h3>
						<p>
							Hej! 👋 Här hittar du mitt portfolio där jag visar upp olika
							web-appar och hemsidor jag byggt samt en blogg där jag skriver om
							mina bedrifter. Jag är en självlärd webutvecklare från Umeå som
							skapar hemsidor, appar och annat web-relaterat. Mitt fokus ligger
							på Front-End utveckling men plockar även upp en del Back-End på
							vägen i mitt lärande. För tillfället så tar jag gärna på mig
							frilansarbete i olika storlekar och former. <br /> Har du några
							funderingar så tveka inte att fylla i kontaktformuläret nedan.
						</p>
					</div>
				</div>
				<div
					className={"col-12 flex"}
					style={{ marginTop: "25px", justifyContent: "space-between" }}
				>
					<div className={"contact-list col-3 flex col"}>
						<ul>
							<li>
								<a href="https://www.facebook.com/niklas.albinsson">
									<FaFacebook /> Facebook
								</a>
							</li>
							<li>
								<a href="https://github.com/Maufive/">
									<FaGithub /> Github
								</a>
							</li>
							<li>
								<a href="#">
									<FaTwitter /> Twitter
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/niklasalbinsson/">
									<FaInstagram /> Instagram
								</a>
							</li>
						</ul>
					</div>
					<div className={"col-8 flex center contact-form"}>
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainCard;

export const pageQuery = graphql`
	query ProfileImageQuery {
		profileImage: imageSharp(id: { regex: "/profil/" }) {
			sizes(maxWidth: 938) {
				...GatsbyImageSharpSizes
			}
		}
	}
`;
