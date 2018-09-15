import React, { Component } from "react";
import { Navbar, Nav, MenuItem, NavDropdown } from "react-bootstrap";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./home/Home.js";
import Explore from "./explore/Explore.js";
import Discuss from "./discuss/Discuss.js";
import Create from "./create/Create.js";
import About from "./about/About";
import Contact from "./contact/Contact";
import NotFound from "./NotFound.js";

class NavBar extends Component {
  render() {
    const navItemStyles = {
      fontFamily: "Helvetica",
      fontWeight: "bold",
      color: "#333",
      fontSize: "2rem",
      textTransform: "uppercase",
    };

    return (
      <Router>
        <div>
          <a href="./" style={{ position: "absolute", top: 16, left: 16 }}>
            <img
              src={require("./hopAIMark.png")}
              style={{ height: 48, width: 48 }}
            />
          </a>
          <nav
            style={{
              width: "100vw",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              paddingLeft: 96,
              paddingRight: 48,
              height: 56,
              marginTop: 16,
            }}
          >
            <a href="/explore" style={navItemStyles}>
              Explore
            </a>
            <a href="/discuss" style={navItemStyles}>
              Discuss
            </a>
            <a href="/create" style={navItemStyles}>
              Create
            </a>
            {/* <a href="/create" disabled>
                |
              </a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a> */}
          </nav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/discuss" component={Discuss} />
            <Route path="/create" component={Create} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default NavBar;
