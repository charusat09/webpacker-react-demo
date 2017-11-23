import React from 'react';
import img01 from '../../img/portfolio/01.jpg';
import img02 from '../../img/portfolio/02.jpg';
import img03 from '../../img/portfolio/03.jpg';
import img04 from '../../img/portfolio/04.jpg';
import img05 from '../../img/portfolio/05.jpg';
import img06 from '../../img/portfolio/06.jpg';
import img07 from '../../img/portfolio/07.jpg';
import img08 from '../../img/portfolio/08.jpg';

const Portfolio = () => {
  return(
    <div id="works-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Portfolio</h2>
          <hr/>
          <div className="clearfix"></div>
        </div>
        <div className="categories">
          <ul className="cat">
            <li>
              <ol className="type">
                <li><a href="#" data-filter="*" className="active">All</a></li>
                <li><a href="#" data-filter=".web">Web Design</a></li>
                <li><a href="#" data-filter=".app">App Development</a></li>
                <li><a href="#" data-filter=".branding">Branding</a></li>
              </ol>
            </li>
          </ul>
          <div className="clearfix"></div>
        </div>
        <div className="row">
          <div className="portfolio-items">
            <div className="col-sm-6 col-md-3 col-lg-3 web">
              <div className="portfolio-item">
                <div className="hover-bg"> <a href={img01} rel="prettyPhoto">
                  <div className="hover-text">
                    <h4>Project Title</h4>
                    <small>Web Design</small>
                    <div className="clearfix"></div>
                  </div>
                  <img src={img01} className="img-responsive" alt="Project Title"></img> </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 app">
              <div className="portfolio-item">
                <div className="hover-bg"> <a href={img02} rel="prettyPhoto">
                  <div className="hover-text">
                    <h4>Project Title</h4>
                    <small>App Development</small>
                    <div className="clearfix"></div>
                  </div>
                  <img src={img02} className="img-responsive" alt="Project Title"></img> </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 web">
              <div className="portfolio-item">
                <div className="hover-bg"> <a href={img03} rel="prettyPhoto">
                  <div className="hover-text">
                    <h4>Project Title</h4>
                    <small>Web Design</small>
                    <div className="clearfix"></div>
                  </div>
                  <img src={img03} className="img-responsive" alt="Project Title"></img> </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 web">
              <div className="portfolio-item">
                <div className="hover-bg"> <a href={img04} rel="prettyPhoto">
                  <div className="hover-text">
                    <h4>Project Title</h4>
                    <small>Web Design</small>
                    <div className="clearfix"></div>
                  </div>
                  <img src={img04} className="img-responsive" alt="Project Title"></img> </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 app">
              <div className="portfolio-item">
                <div className="hover-bg"> <a href={img05} rel="prettyPhoto">
                  <div className="hover-text">
                    <h4>Project Title</h4>
                    <small>App Development</small>
                    <div className="clearfix"></div>
                  </div>
                  <img src={img05} className="img-responsive" alt="Project Title"></img> </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 branding">
              <div className="portfolio-item">
                <div className="hover-bg"> <a href={img06} rel="prettyPhoto">
                  <div className="hover-text">
                    <h4>Project Title</h4>
                    <small>Branding</small>
                    <div className="clearfix"></div>
                  </div>
                  <img src={img06} className="img-responsive" alt="Project Title"></img> </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 branding app">
              <div className="portfolio-item">
                <div className="hover-bg"> <a href={img07} rel="prettyPhoto">
                  <div className="hover-text">
                    <h4>Project Title</h4>
                    <small>App Development, Branding</small>
                    <div className="clearfix"></div>
                  </div>
                  <img src={img07} className="img-responsive" alt="Project Title"></img> </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 col-lg-3 web">
              <div className="portfolio-item">
                <div className="hover-bg"> <a href={img08} rel="prettyPhoto">
                  <div className="hover-text">
                    <h4>Project Title</h4>
                    <small>Web Design</small>
                    <div className="clearfix"></div>
                  </div>
                  <img src={img08} className="img-responsive" alt="Project Title"></img> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
