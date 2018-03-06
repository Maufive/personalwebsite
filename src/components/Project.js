import React from "react";
import Link from "gatsby-link";
import TiGithub from "react-icons/lib/ti/social-github";
// import IoCss from 'react-icons/lib/io/social-css3';

const Project = ({ props }) => ({
	render() {
		return (
			<div className={"project-container col-12 flex"}>
				<div className="tablet-info">
					<ul>
						{this.props.tech.map(tech => <li>{tech}</li>)}
						<div className={"button-div"}>
							<a className={"project-link"} href={this.props.gitLink}>
								GitHub
								<TiGithub />
							</a>
							<a className={"project-link primary"} href={this.props.demoLink}>
								Demo
							</a>
						</div>
					</ul>
				</div>
				<div className={"pointy"} />
				<div className={"project-item"}>
					<h1>{this.props.title}</h1>
					<div className={"project-background"}>
						<img src={this.props.imageUrl} />
						<div className={"project-overlay"}>
							<ul>{this.props.tech.map(tech => <li>{tech}</li>)}</ul>
							<div className={"button-div"}>
								<a className={"project-link"} href={this.props.gitLink}>
									GitHub
									<TiGithub />
								</a>
								<a
									className={"project-link primary"}
									href={this.props.demoLink}
								>
									Demo
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="project-date">{this.props.date}</div>
			</div>
		);
	}
});

export default Project;
