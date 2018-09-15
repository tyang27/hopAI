import React, { Component } from 'react';
import {Navbar, Nav, MenuItem, NavDropdown} from 'react-bootstrap';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from './home/Home.js'
import Explore from './explore/Explore.js'
import Discuss from './discuss/Discuss.js'
import Create from './create/Create.js'
import About from './about/About'
import Contact from './contact/Contact'
import NotFound from './NotFound.js';

class NavBar extends Component {
  render() {
    return (
        <Router>
          <div>
            <Navbar className="Navbar" fluid>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="./">HopAI</a>
                </Navbar.Brand>
              </Navbar.Header>
              <Nav>
                <MenuItem href="/explore">Explore AI</MenuItem>
                <MenuItem href="/discuss">Discuss AI</MenuItem>
                <MenuItem href="/create">Create AI</MenuItem>
                <MenuItem href="/about">About HopAI</MenuItem>
                <MenuItem href="/contact">Contact HopAI</MenuItem>
              </Nav>
            </Navbar>

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
