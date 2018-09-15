import React, { Component } from 'react';
import {Navbar, Nav, MenuItem, NavDropdown} from 'react-bootstrap';
import {Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import NotFound from './NotFound.js';
import About from './about/AboutPage.js'
import Home from './home/Home.js'
import Connect from './connect/Connect.js'
import Imagine from './imagine/Imagine.js'

import Explore from './explore/Explore.js'
import Discuss from './discuss/Discuss.js'
import Create from './create/Create.js'

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
                {/* <NavDropdown title="EXPLORE">
                  <MenuItem>Spotlight</MenuItem>
                  <MenuItem>Events</MenuItem>
                  <MenuItem>Workshops</MenuItem>
                  <MenuItem>Gallery</MenuItem>
                </NavDropdown> */}

                <MenuItem href="/discuss">Discuss AI</MenuItem>
                {/* <NavDropdown title="DISCUSS">
                  <MenuItem href="/blog">Blog</MenuItem>
                  <MenuItem href="/contribute">Contribute</MenuItem>
                </NavDropdown> */}

                <MenuItem href="/create">Create AI</MenuItem>
                {/* <NavDropdown title="COLLABORATE">
                  <MenuItem>>Ideas</MenuItem>
                  <MenuItem>Projects</MenuItem>
                  <MenuItem>Community</MenuItem>
                </NavDropdown> */}

                <MenuItem href="/about">About</MenuItem>
              </Nav>
            </Navbar>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/explore" component={Explore} />
              <Route path="/discuss" component={Discuss} />
              <Route path="/create" component={Create} />
              <Route path="/about" component={About} />
              <Route path="*" component={NotFound} />

              {/* <Route path="/blog/" component={Blog} />
              <Route path="/contribute" component={Contribute} />
              <Route path="/connect/" component={Connect} /> */}

              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default NavBar;
