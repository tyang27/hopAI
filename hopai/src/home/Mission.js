import React, { Component } from 'react';
import {Col} from 'react-bootstrap';
import "./Mission.css";

class Mission extends Component {
  render() {
    return (
        <Col xs={12} md={8} className="Mission">
          <h1>OUR MISSION</h1>
          <h2>Bringing together tomorrow's leaders to promote innovative, safe, and responsible AI.</h2>
        </Col>
        );
  }
}

export default Mission;
