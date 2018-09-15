import React, { Component } from 'react';
import { Panel, Col } from 'react-bootstrap';
import "./Mission.css";

class Mission extends Component {
  render() {
    return (
      <div className="Mission">
        <Panel>
          <Panel.Heading>
            <Panel.Title>Our Mission</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <p>Bringing together tomorrow's leaders to promote innovative, safe, and responsible AI.</p>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default Mission;
