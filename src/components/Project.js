import React from 'react';
import Link from 'gatsby-link';
import TiGithub from 'react-icons/lib/ti/social-github';
// import IoCss from 'react-icons/lib/io/social-css3';

const Project = ({ props }) => ({
  render() {
    return (
      <div className={'project-item'}>
        <div className={'image-bg'}>
          <img src={this.props.imageUrl} />
          <div className={'project-info'}>
            <h3>{this.props.title}</h3>
            <p>{this.props.description}</p>
            <div className={'button-div'}>
              <a className={'project-link'} href={this.props.gitLink}>
                GitHub 
                <TiGithub />
              </a>
              <a className={'project-link primary'} href={this.props.demoLink}>
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Project;
