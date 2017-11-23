import React from 'react';

const Service = () => {
  return(
    <div id="services-section">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <hr />
        </div>
        <div className="space"></div>
        <div className="row">
          <div className="col-md-3 col-sm-6 service"> <i className="fa fa-desktop"></i>
            <h4>Web design</h4>
            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
          </div>
          <div className="col-md-3 col-sm-6 service"> <i className="fa fa-gears"></i>
            <h4>App Development</h4>
            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque.</p>
          </div>
          <div className="col-md-3 col-sm-6 service"> <i className="fa fa-pie-chart"></i>
            <h4>Analystics</h4>
            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
          </div>
          <div className="col-md-3 col-sm-6 service"> <i className="fa fa-line-chart"></i>
            <h4>Marketing</h4>
            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque.</p>
          </div>
        </div>
        <div className="space"></div>
        <div className="row">
          <div className="col-md-3 col-sm-6 service"> <i className="fa fa-shopping-cart"></i>
            <h4>eCommerce</h4>
            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
          </div>
          <div className="col-md-3 col-sm-6 service"> <i className="fa fa-file-text-o"></i>
            <h4>Content Development</h4>
            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque.</p>
          </div>
          <div className="col-md-3 col-sm-6 service"> <i className="fa fa-rocket"></i>
            <h4>Branding</h4>
            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.</p>
          </div>
          <div className="col-md-3 col-sm-6 service"> <i className="fa fa-camera"></i>
            <h4>Video & Photography</h4>
            <p>Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
