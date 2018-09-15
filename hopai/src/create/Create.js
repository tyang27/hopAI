import React, { Component } from 'react';
import "./Create.css";
import { Panel, Navbar, Nav, MenuItem, PageHeader } from 'react-bootstrap';
import Idea from './Idea.js';

class IdeaPanel extends Component {
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
      },
      {
        title: 'Healthcare',
        background: 'Smart hospitals optimize and automate healthcare processes. In the future, we may interface with AI in the form of pervasive computing to monitor handwashing, service robots that perform repetitive tasks, and algorithms that automate medical diagnosis.',
        question: [
      'How do we create AI framework that patients and doctors both trust and understand?',
      'HIPAA ensures privacy of a patient\'s medical data. How can we build AI systems that conform to these privacy regulations?',
      'What criteria or compromises must be satisfied to build this technology responsibly?'
        ],
        link: [
          {httplink:'https://www.hhs.gov/hipaa/index.html',
            desc:'HIPAA'},
          {httplink:'https://arxiv.org/abs/1708.00163',
            desc:'Vision-Based Smart Hospitals to Monitor Handwashing'}
        ]
      }
    ]
    return(
        <div id='Ideas'>
          <Panel>
            <Panel.Heading>
              <Panel.Title>Ideas</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              {ideas.map(function(item, i) {
                return (<div>
                    <Idea
                    problem={item.title}
                    background={item.background}
                    questions={item.question.map(q => <p>{q}</p>)}
                    link={item.link.map(l => <p><a href={l.httplink}>{l.desc}</a></p>)}/>
                    <hr xs="5"/>
                    </div>
                ); 
              })}
            </Panel.Body>
          </Panel>
        </div>
        );
  }
}

class ProjectPanel extends Component {
  render() {
    return(
        <div id='Projects'>
          <Panel style={{ height: '200px' }}>
            <Panel.Heading>
              <Panel.Title>Projects</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <div>
              Coming soon...
              </div>
            </Panel.Body>
          </Panel>
        </div>
        );
  }
}

class DatasetPanel extends Component {
  render() {
    return(
        <div id='Datasets'>
          <Panel>
            <Panel.Heading>
              <Panel.Title>Useful datasets</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <div>
              <h4>Healthcare</h4>
              <p>MIMIC - Electronic health records, requires academic access</p>
              </div>
            </Panel.Body>
          </Panel>
        </div>
        );
  }
}

class Create extends Component {

  render() {
    return (
      <div className="Create" style={{ height: '4000px', marginLeft: '50px', marginRight: '50px' }}>

        <Navbar className="Navbar" fluid>
          <Nav bsStyle="pills">
            <MenuItem href="#Ideas">Ideas</MenuItem>
            <MenuItem href="#Projects">Projects</MenuItem>
            <MenuItem href="#Community">Community</MenuItem>
          </Nav>
        </Navbar>

        <IdeaPanel />

        <ProjectPanel />

        <DatasetPanel />
      </div>

    );
  }
}

export default Create;
