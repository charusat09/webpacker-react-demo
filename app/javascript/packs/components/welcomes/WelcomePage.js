import React, {PropTypes} from 'react';
import Navigation from './Navigation';
import Header from './Header';
import About from './About';
import Service from './Service';
import Portfolio from './Portfolio';
import Team from './Team';
import Contact from './Contact';
import Social from './Social';
import Footer from './Footer';

const WelcomePage = () => {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Service />
      <Portfolio />
      <Team />
      <Contact />
      <Social />
      <Footer />
    </div>
  );
};

export default WelcomePage;
