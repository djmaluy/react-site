import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class QACard extends Component {
  render() {
    return (
      <>
        <Card>
          <Card.Img
            variant="top"
            src="https://previews.123rf.com/images/puhhha/puhhha1802/puhhha180200817/96381589-it-team-working-in-office-people-programming-on-computer-young-programmers-typing-data-code-on-keybo.jpg"
            alt="."
          />
          <Card.Body>
            <Card.Title className="text-center">QA</Card.Title>
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

export default QACard;
