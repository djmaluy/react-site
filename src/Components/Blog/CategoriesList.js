import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

class CategoriesList extends Component {
  render() {
    return (
      <div>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>HTML/CSS</ListGroup.Item>
            <ListGroup.Item>JavaScript</ListGroup.Item>
            <ListGroup.Item>Python</ListGroup.Item>
            <ListGroup.Item>Java</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  }
}

export default CategoriesList;
