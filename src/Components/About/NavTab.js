import React, { Component } from "react";
import { Nav } from "react-bootstrap";

class NavTab extends Component {
  render() {
    return (
      <Nav variant="pills" className="flex-column mt-2">
        <Nav.Item>
          <Nav.Link eventKey="first">Design</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Team</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Programming</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fifth">Libraries</Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default NavTab;
