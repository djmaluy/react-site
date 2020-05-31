import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class DesignCard extends Component {
  render() {
    return (
      <>
        <Card>
          <Card.Img
            variant="top"
            src="https://alvar.a-blast.org/plat_forms/img/1024/team_1-1.jpg"
            alt="."
          />
          <Card.Body>
            <Card.Title className="text-center">Design</Card.Title>
            <Card.Text>
              Having experienced both sides — being a developer and a
              development manager — I have gained a new appreciation for the
              different perspectives and the motivations of each role.
            </Card.Text>
            <Button variant="primary">About team</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default DesignCard;
