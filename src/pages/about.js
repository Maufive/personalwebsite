import React from "react";
import FaCheck from "react-icons/lib/fa/check";

export default ({ data }) => (
	<div className="about-page flex">
		<div className="container about flex center">
			<h1 className={"main-heading"}>Om mig</h1>
			<div className={"flex"}>
				<div className={"col-8 flex about-text"}>
					<p>
						26 år gammal kille född och uppfostrad i Umeå. Lär mig själv
						webbutveckling på fritiden i hopp av att byta branch. Fokus ligger
						på Front-End utveckling men försöker snappa upp en del Back-End
						påvägen. Tar gärna på mig frilansarbete för att hjälpa både dig och
						mig.
					</p>
				</div>
				{/* <div className="horizontal-divider" /> */}
				<div className={"col-4 flex skills"}>
					<ul>
            <li><FaCheck /> ReactJS</li>
            <li><FaCheck /> ES6/7 Javascript</li>
            <li><FaCheck /> GraphQL</li>
            <li><FaCheck /> SCSS / SASS</li>
            <li><FaCheck /> NodeJS</li>
            <li><FaCheck /> Figma</li>
          </ul>
				</div>
			</div>
		</div>
	</div>
);

export const query = graphql`
	query AboutQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
