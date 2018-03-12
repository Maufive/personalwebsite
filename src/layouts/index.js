import React from "react";
import "../scss/index.scss";
import Header from "./Header";

class TemplateWrapper extends React.Component {
	render() {
		return (
			<div className={"page-wrapper"}>
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
