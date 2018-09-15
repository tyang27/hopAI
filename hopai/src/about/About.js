import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class About extends Component {
  render() {
    return(
      <div className="About" style={{ height: '4000px', marginLeft: '50px', marginRight: '50px' }}>

        {/* <PageHeader>About <small>HopAI</small></PageHeader> */}

        <Panel>
          <Panel.Heading>
            <Panel.Title>Our Motivation</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <p>
              Artificial Intelligence (AI) is a field of technology that is changing the world at an extraordinary pace. All sectors and industries will be influenced by the impacts of AI, including governments, schools, hospitals, and courtrooms. Unfortunately, the technology is often applied and developed with little consideration for its risks and potential challenges for society. As the upcoming generation that will be most affected by this technology, it is our responsibility to promote safe AI implementation and usage. 
            </p>
            <p>
              Given AI’s ability to transcend borders and disciplines, a safe outcome can only be achievable through multidisciplinary and global collaboration. However, a gap persists between different fields of expertise, beginning in academia, that stifles possible conversations and collaborations that can lead to great innovation and creativity. Johns Hopkins University, with its international reach and diverse talent, can help to reverse this trend. And HopAI aims to support university dialogue committed to a future of safe and responsible AI practice. 
            </p>
          </Panel.Body>
        </Panel>

        <Panel>
          <Panel.Heading>
            <Panel.Title>Our Mission</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <p>
              HopAI strives to connect students and academics from different fields of study and levels of expertise who share a common interest and curiosity for Artificial Intelligence (AI). It provides a platform for this diverse community to educate one another and others about AI, and to examine the present and future issues and impacts of AI from varying perspectives. Through multidisciplinary discussion and debate, HopAI encourages awareness of work in varying fields of study and create an integrative network across the Johns Hopkins institute. It cultivates interdisciplinary conversation and collaboration that is crucial for innovation and success as both students and academics alike, while also fostering the design and implementation of safe technology.
            </p>
          </Panel.Body>
        </Panel>

        <Panel>
          <Panel.Heading>
            <Panel.Title>Committee</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Panel style={{ paddingBottom: '10px' }}>
              <h4>Jiali Zhang</h4>
              <div>
                <img style={{ width: '300px' }} src={require('./jiali.jpeg')} />
              </div>
              <div style={{ padding: '5px' }}>
                <i>Undergrad at hopkins</i>
              </div>
              <div>
                <p>Jiali studies stuff and likes bio things and ai</p>
              </div>
            </Panel>

            <Panel style={{ paddingBottom: '5px' }}>
              <h4>Will David</h4>
              <div>
                <img style={{ width: '300px' }} src={require('./jiali.jpeg')} />
              </div>
              <div style={{ padding: '5px' }}>
                <i>Undergrad at hopkins</i>
              </div>
              <div>
                <p>Jiali studies stuff and likes bio things and ai</p>
              </div>
            </Panel>
          </Panel.Body>
        </Panel>

        <Panel>
          <Panel.Heading>
            <Panel.Title>Board of Advisors</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default About;
