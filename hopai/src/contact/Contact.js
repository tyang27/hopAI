import React, { Component } from 'react';
import { Panel, PageHeader } from 'react-bootstrap';

class Contact extends Component {
  render() {
    return(
      <div className="Contact" style={{ height: '4000px', marginLeft: '50px', marginRight: '50px' }}>

        <PageHeader>Contact <small>HopAI</small></PageHeader>

        <Panel>
          <Panel.Heading>
            <Panel.Title>Contact Us</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <p>Submit a blog... <a href="mailto:hopai.blog@gmail.com">hopai.blog@gmail.com</a></p>
            <p>Contact Will... <a href="mailto:wdavid2@jhu.edu">wdavid2@jhu.edu</a></p>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}

export default Contact;
