import React, { Component } from 'react';
import {Navbar, Nav, MenuItem, NavDropdown} from 'react-bootstrap';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NotFound from './NotFound.js';
import About from './home/About.js'
import Discuss from './discuss/Discuss.js'
import Connect from './connect/Connect.js'
import Explore from './explore/Explore.js'
import Imagine from './imagine/Imagine.js'

class NavBar extends Component {
  render() {
    return (
        <Router>
          <div>
            <Navbar className="Navbar" fixedTop fluid>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="./">HopAI</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                <NavDropdown eventkey={1} title="EXPLORE">
                  <MenuItem eventKey={1.1}>Spotlight</MenuItem>
                  <MenuItem eventKey={1.2}>Events</MenuItem>
                  <MenuItem eventKey={1.3}>Workshops</MenuItem>
                  <MenuItem eventKey={1.4}>Gallery</MenuItem>
                </NavDropdown>
                <NavDropdown eventkey={2} title="DISCUSS">
                  <MenuItem eventKey={2.1} href="/discuss">Blog</MenuItem>
                  <MenuItem eventKey={2.2}>Contribute</MenuItem>
                </NavDropdown>
                <NavDropdown eventkey={3} title="COLLABORATE">
                  <MenuItem eventKey={3.1}>Ideas</MenuItem>
                  <MenuItem eventKey={3.2}>Projects</MenuItem>
                  <MenuItem eventKey={3.3}>Community</MenuItem>
                </NavDropdown>
              </Nav>
            </Navbar>

            <Switch>
              <Route exact path="/" component={About} />
              <Route path="/discuss/" component={Discuss} />
              <Route path="/explore/" component={Explore} />
              <Route path="/imagine/" component={Imagine} />
              <Route path="/connect/" component={Connect} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default NavBar;
