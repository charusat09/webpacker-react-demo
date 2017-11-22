import React, {PropTypes} from 'react';

const WelcomePage = () => {
  return (
    <div>
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
            <a className="navbar-brand" href="index.html">Optics</a> </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#home" className="page-scroll">Home</a></li>
              <li><a href="#about-section" className="page-scroll">About</a></li>
              <li><a href="#services-section" className="page-scroll">Services</a></li>
              <li><a href="#works-section" className="page-scroll">Portfolio</a></li>
              <li><a href="#team-section" className="page-scroll">Team</a></li>
              <li><a href="#contact-section" className="page-scroll">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default WelcomePage;
