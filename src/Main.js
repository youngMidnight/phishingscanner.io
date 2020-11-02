import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Registration from "./Registration";
import About from "./About";
import Scanning from "./Scanning";
import { Nav, Navbar,Container,Form, FormControl } from 'react-bootstrap';
import { Button } from 'reactstrap';




class Main extends Component {
  render() {
    return (
      <HashRouter> 
        <div id="page_wrapper">
          <ul className="header">
          <Container>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Scanner</Navbar.Brand>
            <Nav className="mr-auto">
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/About">AboutUS</NavLink></li>
            <li><NavLink to="/Registration">Registration</NavLink></li>
            <li><NavLink to="/Scanning">Scanning</NavLink></li>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Nav>
            </Navbar>
            </Container>
          </ul>
          <div className="content">
      <Form inline>
          <Route exact path="/" component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/About" component={About}/>
          <Route path="/Registration" component={Registration}/>
          <Route path="/Scanning" component={Scanning}/>

          </Form>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;