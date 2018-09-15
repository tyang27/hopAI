import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import "./Idea.css";

class Idea extends Component {
  render() {

    return (
        <div className="Idea">
        <h3>{this.props.problem}</h3>

        <h4>Background</h4>
        <p>{this.props.background}</p>

        <h4>Questions</h4>
        {this.props.questions}

        <h4>Resources</h4>
        <p><a href="">Link</a></p>
        </div>
      );
  }
}

export default Idea;
