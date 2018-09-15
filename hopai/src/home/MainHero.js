import React, { Component } from "react";

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
        }}
      >
        <img
          src={require("../hopAILogo.png")}
          style={{
            height: 256,
          }}
        />
      </div>
    );
  }
}
