import React from "react";
import Link from "gatsby-link";
import MobileNav from "./MobileNav";

const Navigation = () => (
	<nav className="Navigation">
		<ul className="desktop nav-list">
			<Link to="/portfolio/" activeClassName="active-link">PORTFOLIO</Link>
			<Link to="/blog/" activeClassName="active-link">BLOGG</Link>
		</ul>
		<MobileNav />
	</nav>
);

const Header = () => (
	<div className="Header">
		<Link className="logo-link" to="/">
			<div className="brand-name">NIKLAS ALBINSSON</div>
		</Link>
		<Navigation />
	</div>
);

export default Header;
