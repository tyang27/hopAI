import React, { Component } from "react";
import colors from "../colors";

export default class MainHero extends Component {
  render() {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          flexDirection: "column",
          backgroundColor: "white",
        }}
      >
        <h2
          style={{
            fontFamily: "Helvetica",
            fontWeight: "bold",
            color: "#333",
            fontSize: "4rem",
            textTransform: "uppercase",
          }}
        >
          Our Team
        </h2>

        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "3rem 0",
          }}
        >
          <a
            href="#"
            style={{
              fontFamily: "Helvetica",
              fontWeight: "bold",
              color: colors.lightBlue,
              fontSize: "2rem",
              textTransform: "uppercase",
            }}
          >
            Advisors
          </a>
          <a
            href="#"
            style={{
              fontFamily: "Helvetica",
              fontWeight: "bold",
              color: colors.lightBlue,
              fontSize: "2rem",
              textTransform: "uppercase",
            }}
          >
            Comittee
          </a>
          <a
            href="#"
            style={{
              fontFamily: "Helvetica",
              fontWeight: "bold",
              color: colors.lightBlue,
              fontSize: "2rem",
              textTransform: "uppercase",
            }}
          >
            Join Us
          </a>
        </div>
      </div>
    );
  }
}
