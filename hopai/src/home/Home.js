import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Mission from './Mission.js';
import "./Home.css"

class Home extends Component {
  render() {
    return(
      <div className="Home" style={{ height: '4000px', marginLeft: '50px', marginRight: '50px' }}>

        {/* <PageHeader>Hop <small>AI</small></PageHeader> */}

        <Mission />

        <Panel>
          <Panel.Heading>
            <Panel.Title>Our Team</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <span style={{ marginRight: '150px' }}>
              <a href='/about'><i>Board of Advisors</i></a>
            </span>
            <span style={{ marginLeft: '150px' }}>
              <a href='/about'><i>Committee</i></a>
            </span>
          </Panel.Body>
        </Panel>

      </div>
    );
  }
}

export default Home;
