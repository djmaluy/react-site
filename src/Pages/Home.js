import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, CardDeck, Card, Button } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center mt-4">Our team</h2>
          <CardDeck>
            <Card>
              <Card.Img
                variant="top"
                src="https://media.glassdoor.com/l/e6/62/42/42/joking-around.jpg"
                alt="."
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Having experienced both sides — being a developer and a
                  development manager — I have gained a new appreciation for the
                  different perspectives and the motivations of each role.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://previews.123rf.com/images/puhhha/puhhha1802/puhhha180200817/96381589-it-team-working-in-office-people-programming-on-computer-young-programmers-typing-data-code-on-keybo.jpg"
                alt="."
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Having experienced both sides — being a developer and a
                  development manager — I have gained a new appreciation for the
                  different perspectives and the motivations of each role.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://alvar.a-blast.org/plat_forms/img/1024/team_1-1.jpg"
                alt="."
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Having experienced both sides — being a developer and a
                  development manager — I have gained a new appreciation for the
                  different perspectives and the motivations of each role.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </>
    );
  }
}

export default Home;
