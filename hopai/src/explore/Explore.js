import React, { Component } from 'react';
import "./Explore.css";
import { Panel, Navbar, Nav, MenuItem, PageHeader } from 'react-bootstrap';

class Explore extends Component {
  render() {
    return (
      <div className="Explore" style={{ height: '4000px', marginLeft: '25px', marginRight: '25px' }}>

        <PageHeader>Explore <small>AI</small></PageHeader>

        <Navbar className="Navbar" fluid>
          <Nav bsStyle="pills">
            <MenuItem href="#Spotlight">Spotlight</MenuItem>
            <MenuItem href="#Events">Events</MenuItem>
            <MenuItem href="#Workshops">Workshops</MenuItem>
            <MenuItem href="#Gallery">Gallery</MenuItem>
          </Nav>
        </Navbar>

        <div id='Spotlight'>
          <Panel style={{ height: '300px' }}>
            <Panel.Heading>
              <Panel.Title>Spotlight</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <div>
                <p>content...</p>
              </div>
            </Panel.Body>
          </Panel>
        </div>

        <div id='Events'>
          <Panel style={{ height: '300px' }}>
            <Panel.Heading>
              <Panel.Title>Events</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <div>
                <p>content...</p>
              </div>
            </Panel.Body>
          </Panel>
        </div>

        <Panel id='Workshops' style={{ height: '300px' }}>
          <Panel.Heading>
            <Panel.Title>Workshops</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <div>
              <p>content...</p>
            </div>
          </Panel.Body>
        </Panel>

        <Panel id='Gallery' style={{ height: '300px' }}>
          <Panel.Heading>
            <Panel.Title>Gallery</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <div>
              <p>
                content...  
              </p>
            </div>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default Explore;
