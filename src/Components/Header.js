import React, { Component } from "react";
import {
  Navbar,
  Container,
  NavbarBrand,
  NavLink,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../assets/logo.jpeg";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contacts from "../Pages/Contacts";
import About from "../Pages/About";
import Blog from "../Pages/Blog";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <NavbarBrand href="/">
              <img
                src={logo}
                width="30"
                height="30"
                alt="logo"
                className="d-inline-block align-top"
              />{" "}
              React site
            </NavbarBrand>
            <NavbarToggle aria-controls="resposive-navbar-nav" />
            <NavbarCollapse id="resposive-navbar-nav">
              <Nav className="mr-auto">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/contacts">Contacts</NavLink>
                <NavLink href="/blog">Blog</NavLink>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </NavbarCollapse>
          </Container>
        </Navbar>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contacts" component={Contacts} />
            <Route exact path="/blog" component={Blog} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default Header;
