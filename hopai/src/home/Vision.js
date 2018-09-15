import React, { Component } from "react";
import { Panel, Col } from "react-bootstrap";
import colors from "../colors";

class Vision extends Component {
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
          Our Vision
        </h2>
      </div>
    );
  }
}

export default Vision;
