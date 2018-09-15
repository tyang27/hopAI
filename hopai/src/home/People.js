import React, { Component } from 'react';
import {Row, Col, Image, Panel} from 'react-bootstrap';
import "./People.css"

class Person extends Component {
  render() {
    return (
      <Panel>
        <h2>{this.props.name}</h2>
        <Image src={require('./jiali.jpeg')} thumbnail responsive />
      </Panel>
    );
  }
}

class People extends Component {
  render() {
    return(
        <Col xs={16} md={8} className="People">
          <h1>People</h1>
          <h2>Board</h2>
          <Row className="BoardRow">
            <Col xs={8} md={3} className="member">
              <Person name="Member1" image="./jiali.jpeg"/>
            </Col>
            <Col xs={8} md={3} className="member">
              <Person name="Member2" image= "/"/>
            </Col>
            <Col xs={8} md={3} className="member">
              <Person name="Member3" image= "/"/>
            </Col>
          </Row>
          <h2>Faculty partners</h2>
        </Col>
    );
  }
}

export default People;
