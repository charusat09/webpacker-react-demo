import React from 'react';

const Header = () => {
  return(
    <header className="text-center" name="home">
      <div className="intro-text">
        <h1>We are <span className="color">Optics</span></h1>
        <p>An award winning digital design and development company</p>
        <div className="clearfix"></div>
        <a href="#about-section" className="btn btn-default btn-lg page-scroll">Learn More</a>
      </div>
    </header>
  );
}

export default Header;
