import React, { Component } from "react";
import { NavbarBrand } from "react-bootstrap";
import logo from "../../assets/logo.jpg";

class HeaderLogo extends Component {
  render() {
    return (
      <NavbarBrand href="/">
        <img
          src={logo}
          width="50"
          height="35"
          alt="logo"
          className="d-inline-block align-top"
        />
        React site
      </NavbarBrand>
    );
  }
}

export default HeaderLogo;
