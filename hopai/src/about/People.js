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
        <div className="People">
          <Row>
              <Person name="Member1" image="./jiali.jpeg"/>
              <Person name="Member2" image="./jiali.jpeg"/>
          </Row>
          <h2>Faculty partners</h2>
        </div>
    );
  }
}

export default People;
