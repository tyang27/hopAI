import React, { Component } from 'react';
import "./Create.css";
import { Panel, Navbar, Nav, MenuItem, PageHeader } from 'react-bootstrap';
import Idea from './Idea.js';

class Create extends Component {

  render() {

    const questions = [
      'Words1',
      'Words2'
    ];
    return (
      <div className="Create" style={{ height: '4000px', marginLeft: '50px', marginRight: '50px' }}>

        {/* <PageHeader>Create <small>AI</small></PageHeader> */}

        <Navbar className="Navbar" fluid>
          <Nav bsStyle="pills">
            <MenuItem href="#Ideas">Ideas</MenuItem>
            <MenuItem href="#Projects">Projects</MenuItem>
            <MenuItem href="#Community">Community</MenuItem>
          </Nav>
        </Navbar>

        <div id='Ideas'>
          <Panel>
            <Panel.Heading>
              <Panel.Title>Ideas</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <div>
                <Idea problem="PROBLEM" background="BACKGROUND" questions={questions.map(function(q) {return <p>q</p>;})} />
                <hr xs="5" />
                <Idea />
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

export default Create;
