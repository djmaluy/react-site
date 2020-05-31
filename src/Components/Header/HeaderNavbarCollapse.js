import React, { Component } from "react";
import { Nav, Form, Button } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

class HeaderNavbarCollapse extends Component {
  render() {
    return (
      <NavbarCollapse id="resposive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contacts">Contacts</Nav.Link>
          <Nav.Link href="/blog">Blog</Nav.Link>
        </Nav>
        <Form inline>
          <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </NavbarCollapse>
    );
  }
}

export default HeaderNavbarCollapse;
