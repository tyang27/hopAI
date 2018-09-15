import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import "./Discuss.css";


class Discuss extends Component {
  render() {
    return (
      <div className="Discuss">
        <Panel>
          <Panel.Heading>
            <Panel.Title>Blog</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <div>
              <p>content...</p>
            </div>
          </Panel.Body>
        </Panel>

        <Panel>
          <Panel.Heading>
            <Panel.Title>Contribute</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <div>
              <p>content...</p>
            </div>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default Discuss;
