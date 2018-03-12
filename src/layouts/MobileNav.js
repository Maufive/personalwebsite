import React, { Component } from "react";
import Link from "gatsby-link";
import FaClose from 'react-icons/lib/fa/close';
import MdMenu from 'react-icons/lib/md/menu';

class MobileNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		if (this.state.open === false) {
			this.setState({ open: true });
			console.log("Open!");
		} else {
			this.setState({ open: false });
			console.log("Closed!");
		}
	}

	render() {
		return (
			<div className={`mobile-nav`}>
				<span onClick={this.toggleMenu} className="mobile-nav-icon dark"><MdMenu /></span>
				<div
					className={`mobile-nav-container ${
						this.state.open ? "open" : "closed"
					}`}
				>
					<ul>
						<li>
              <Link exact to="/" activeClassName="active-link" onClick={this.toggleMenu}>HEM</Link>
            </li>
            <li>
              <Link to="/portfolio/" activeClassName="active-link" onClick={this.toggleMenu}>PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/blog/" activeClassName="active-link" onClick={this.toggleMenu}>BLOGG</Link>
            </li>
					</ul>
					<span onClick={this.toggleMenu} className="mobile-nav-icon"><FaClose /></span>
				</div>
			</div>
		);
	}
}

export default MobileNav;
