import React from 'react';
import img01 from '../../img/team/01.jpg';
import img02 from '../../img/team/02.jpg';
import img03 from '../../img/team/03.jpg';
import img04 from '../../img/team/04.jpg';


const Team = () => {
  return(
    <div id="team-section">
      <div className="container">
        <div className="section-title">
          <h2>Meet the Team</h2>
          <hr/>
        </div>
        <div id="row">
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              <img src={img01} alt="..." className="team-img"></img>
              <div className="caption">
                <h3>John Doe</h3>
                <p>Founder</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              <img src={img02} alt="..." className="team-img"></img>
              <div className="caption">
                <h3>Mike Doe</h3>
                <p>Web Designer</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              <img src={img03} alt="..." className="team-img"></img>
              <div className="caption">
                <h3>Jane Doe</h3>
                <p>Creative Director</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 team">
            <div className="thumbnail">
              <img src={img04} alt="..." className="team-img"></img>
              <div className="caption">
                <h3>Larry Show</h3>
                <p>Project Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
