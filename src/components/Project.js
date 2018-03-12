import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import FaGlobe from 'react-icons/lib/fa/globe';
import FaGithub from 'react-icons/lib/fa/github';
import FaTag from 'react-icons/lib/fa/tag';

const Project = ({ props }) => ({
	render() {
		return (
			<div className={"project-item"}>
				<div>
					<h1 className={"main-heading"}>{this.props.title}</h1>
					<div className={"project-background"}>
						<a href={this.props.demoLink} target="_BLANK">
							<Img
									sizes={this.props.image.sizes}
									className={'project-image'}
							/>
						</a>
					</div>
					<div className={'flex button-container'}>
						<a href={this.props.demoLink} target="_BLANK"><FaGlobe /> Testa live!</a>
						<a href={this.props.gitLink} target="_BLANK"><FaGithub /> GitHub</a>
					</div>
					<div>
						<p>{this.props.description}</p>
					</div>
					<div>
						{this.props.tags.map(tag => (
							<span className="project-tag" key={tag.id}><FaTag /> {tag}</span>
						))}
					</div>
				</div>
			</div>
		);
	}
});

export default Project;
