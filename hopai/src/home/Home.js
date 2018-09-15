import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import Mission from "./Mission.js";
import "./Home.css";
import MainHero from "./MainHero";
import Team from "./Team";
import Vision from "./Vision.js";

class Home extends Component {
  render() {
    return (
      <div>
        <MainHero />
        <Mission />
        <Team />
        <Vision />
      </div>
    );
  }
}

export default Home;
