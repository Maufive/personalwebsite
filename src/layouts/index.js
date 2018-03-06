import React from 'react';
import Link from 'gatsby-link';
import Footer from './Footer';
import '../scss/index.scss';

const ListLink = props => (
  <li className={'nav-item'}>
    <Link activeClassName="active" to={props.to}>
      {props.children}
    </Link>
  </li>
);

const Navigation = () => (
  <nav className="Navigation">
    <ul className="nav-list">
      <ListLink to="/portfolio/">PORTFOLIO</ListLink>
      <ListLink to="/about/">OM MIG</ListLink>
      <ListLink to="/blog/">BLOG</ListLink>
    </ul>
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

const TemplateWrapper = ({ children }) => {
  return (
    <div className={'page-wrapper'}>
      <Header />
      <div className={'content-wrapper'}>{children()}</div>
    </div>
  );
};

export default TemplateWrapper;
