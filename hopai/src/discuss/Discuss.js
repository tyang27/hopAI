import React, { Component } from 'react';
import "./Discuss.css";
import { Panel, Navbar, Nav, MenuItem, PageHeader } from 'react-bootstrap';

class Discuss extends Component {
  render() {
    return (
      <div className="Discuss" style={{ height: '4000px', marginLeft: '25px', marginRight: '25px' }}>

        <PageHeader>Discuss <small>AI</small></PageHeader>

        <Navbar className="Navbar" fluid>
          <Nav bsStyle="pills">
            <MenuItem href="#Ideas">Blog</MenuItem>
            <MenuItem href="#Projects">Contribute</MenuItem>
          </Nav>
        </Navbar>

        <div id='Ideas'>
          <Panel style={{ height: '300px' }}>
            <Panel.Heading>
              <Panel.Title>Ideas</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <div>
                <p>content...</p>
              </div>
            </Panel.Body>
          </Panel>
        </div>

        <div id='Projects'>
          <Panel style={{ height: '300px' }}>
            <Panel.Heading>
              <Panel.Title>Projects</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <div>
                <p>content...</p>
              </div>
            </Panel.Body>
          </Panel>
        </div>

        <Panel id='Community' style={{ height: '300px' }}>
          <Panel.Heading>
            <Panel.Title>Community</Panel.Title>
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
