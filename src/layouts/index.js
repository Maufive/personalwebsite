import React from "react";
import "../scss/index.scss";
import Header from "./Header";
import { Helmet } from "react-helmet";

class TemplateWrapper extends React.Component {
	render() {
		return (
			<div className={"page-wrapper"}>
				<Helmet>
					<meta charSet="utf-8" />
					<title>{`Niklas Albinsson | Portfolio`}</title>
					<meta
						name={`description`}
						content={`Niklas Albinsson webutvecklare och webdesigner från Umeå. Jag hjälper dig med din hemsida för privatpersoner och företag.`}
					/>
				</Helmet>
				<div className={"content-wrapper"}>
					<Header />
					{this.props.children()}
				</div>
			</div>
		);
	}
}

// const TemplateWrapper = ({ children }) => {
// 	return (
// 		<div className={"page-wrapper"}>
//       <div className={"content-wrapper"}>
//         <Header profile={this.props.data.profileImage} />
//         {children()}
//       </div>
// 		</div>
// 	);
// };

export default TemplateWrapper;
