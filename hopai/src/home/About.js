import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import Mission from './Mission.js';
import Events from './Events.js';
import People from './People.js';
import "./About.css"

class About extends Component {
  render() {
    return(
      <div className="About">
        <Mission />
        <Row className="show-grid">
          <Events />
          <People />
        </Row>
      </div>
    );
  }
}

export default About;
