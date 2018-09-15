import React, { Component } from 'react';
import "./Discuss.css";
import { Panel, Navbar, Nav, MenuItem, PageHeader } from 'react-bootstrap';

class Discuss extends Component {
  render() {
    return (
      <div className="Discuss" style={{ height: '4000px', marginLeft: '50px', marginRight: '50px' }}>

        <PageHeader>Discuss <small>AI</small></PageHeader>

        <Navbar className="Navbar" fluid>
          <Nav bsStyle="pills">
            <MenuItem href="#Blog">Blog</MenuItem>
            <MenuItem href="#Contribute">Contribute</MenuItem>
          </Nav>
        </Navbar>

        <div id='Blog'>
          <Panel style={{ height: '300px' }}>
            <Panel.Heading>
              <Panel.Title>Blog</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <div>
                <p>content...</p>
              </div>
            </Panel.Body>
          </Panel>
        </div>

        <div id='Contribute'>
          <Panel style={{ height: '300px' }}>
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
      </div>
    );
  }
}

export default Discuss;
