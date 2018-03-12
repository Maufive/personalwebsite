import React from "react";
import "../scss/index.scss";
import Header from "./Header";

// const ListLink = props => (
// 	<li className={"nav-item"}>
// 		<Link activeClassName="active" to={props.to}>
// 			{props.children}
// 		</Link>
// 	</li>
// );

const TemplateWrapper = ({ children }) => {
	return (
		<div className={"page-wrapper"}>
      <div className={"content-wrapper"}>
        <Header />
        {children()}
      </div>
		</div>
	);
};

export default TemplateWrapper;
