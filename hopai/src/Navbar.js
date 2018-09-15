import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
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
                <NavItem eventKey={1} href="/discuss">Discuss</NavItem>
                <NavItem eventKey={2} href="/explore">Explore</NavItem>
                <NavItem eventKey={3} href="/imagine">Imagine</NavItem>
                <NavItem eventKey={4} href="/connect">Connect</NavItem>
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
