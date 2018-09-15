import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Mission from './Mission.js';
import AboutPage from '../about/AboutPage.js';
import "./About.css"

class About extends Component {
  render() {
    return(
      <div className="About">
        <Row>
          <Mission />
        </Row>
        <Row>
          <AboutPage />
        </Row>
      </div>
    );
  }
}

export default About;
