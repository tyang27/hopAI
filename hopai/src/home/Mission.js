import React, { Component } from "react";
import { Panel, Col } from "react-bootstrap";
import "./Mission.css";
import colors from "../colors";

class Mission extends Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "100vw",
          backgroundColor: colors.lightBlue,
        }}
      >
        <h2
          style={{
            fontFamily: "Helvetica",
            fontWeight: "bold",
            color: "#fff",
            fontSize: "4rem",
            textTransform: "uppercase",
          }}
        >
          Our Mission
        </h2>

        <p
          style={{
            fontStyle: "italic",
            fontSize: "1.5rem",
            color: "rgba(255, 255, 255, 0.8)",
          }}
        >
          Bringing together tomorrow's leaders to promote innovative, safe, and
          responsible AI.
        </p>
        <a
          href="/about"
          style={{
            fontFamily: "Helvetica",
            fontWeight: "bold",
            color: "#333",
            fontSize: "1.5rem",
            textTransform: "uppercase",
          }}
        >
          Learn More
        </a>
      </div>
    );
  }
}

export default Mission;
