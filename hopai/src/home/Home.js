import React, { Component } from 'react';
import { PageHeader, Row } from 'react-bootstrap';
import Mission from './Mission.js';
import AboutPage from '../about/AboutPage.js';
import "./Home.css"

class Home extends Component {
  render() {
    return(
      <div className="Home" style={{ height: '4000px', marginLeft: '25px', marginRight: '25px' }}>

        <PageHeader>Hop <small>AI</small></PageHeader>

        <Mission />

      </div>
    );
  }
}

export default Home;
