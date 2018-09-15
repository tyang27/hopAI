import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import "./Events.css";

class Event extends Component {
  render() {
    return(
      <Row className="Event">
        <h2>{this.props.name}</h2>
        <p>{this.props.desc}</p>
        <p>Date: {this.props.date}</p>
        <a href="">Learn more</a>
      </Row>
    );
  }
}

class Events extends Component {
  render() {
    return (
        <div className="Events">
          <Event name="Pilot: Healthcare Panel" desc="Discuss AI in healthcare" date="TBD" />
          <Event name="Politics Panel" desc="Discuss AI in politics" date="TBD" />
          <Event name="Company hosted AI workshop" desc="Company presents AI problem that students try to solve" date="TBD" />
        </div>);
  }
}

export default Events;
