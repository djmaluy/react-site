import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class DevelopersCard extends Component {
  render() {
    return (
      <>
        <Card>
          <Card.Img
            variant="top"
            src="https://media.glassdoor.com/l/e6/62/42/42/joking-around.jpg"
            alt="."
          />
          <Card.Body>
            <Card.Title className="text-center">Developers</Card.Title>
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

export default DevelopersCard;
