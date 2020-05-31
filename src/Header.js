import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contacts from "./Pages/Contacts";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import HeaderLogo from "./Components/Header/HeaderLogo";
import HeaderNavbarCollapse from "./Components/Header/HeaderNavbarCollapse";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <HeaderLogo />
            <NavbarToggle aria-controls="resposive-navbar-nav" />
            <HeaderNavbarCollapse />
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
