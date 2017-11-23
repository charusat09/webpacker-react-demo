import React from 'react';

const Contact = () => {
  return(
    <div id="contact-section">
      <div className="container">
        <div className="section-title center">
          <h2>Contact Us</h2>
          <hr/>
        </div>
        <div className="col-md-4">
          <h4>Contact info</h4>
          <div className="space"></div>
          <p><i className="fa fa-map-marker"></i>4321 California St,<br/>
            San Francisco, CA 12345</p>
          <div className="space"></div>
          <p><i className="fa fa-envelope-o"></i>info@company.com</p>
          <div className="space"></div>
          <p><i className="fa fa-phone"></i>+1 123 456 1234</p>
        </div>
        <div className="col-md-8">
          <h4>Leave us a message</h4>
          <form name="sentMessage" id="contactForm" noValidate>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
            </div>
            <div className="form-group">
              <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
              <p className="help-block text-danger"></p>
            </div>
            <div id="success"></div>
            <button type="submit" className="btn btn-default">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
