import React, { Component } from 'react';
import "./Create.css";
import { Panel, Navbar, Nav, MenuItem, PageHeader } from 'react-bootstrap';
import Idea from './Idea.js';

class Create extends Component {

  render() {

    const ideas = [
      {
        title: 'Government and Policy',
        background: 'Some people believe that facial recognition technology will some day replace government issued identification for international border control.',
        question: [
      'What are some security issues associated with this implementation?',
      'How do we address technology that fools AI, also known as adversial examples?',
      'What criteria or compromises must be satisfied to build this technology responsibly?'
        ],
        link: [
          {httplink:'https://cchs.gwu.edu/sites/g/files/zaxdzs2371/f/Emerging_Mobile_Tech_and_REAL_ID_FINAL.pdf',
            desc:'REAL ID'}]
      }
    ]

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
              {ideas.map(function(item, i) {
                return (<Idea
                    problem={item.title}
                    background={item.background}
                    questions={item.question.map(q => <p>{q}</p>)}
                    link={item.link.map(l => <a href={l.httplink}>{l.desc}</a>)}
                  />); 
              })}
                <hr xs="5" />
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
