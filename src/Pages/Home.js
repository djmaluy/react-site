import React, { Component } from "react";
import CarouselBox from "../Components/CarouselBox";
import { Container, CardDeck } from "react-bootstrap";
import DevelopersCard from "../Components/Home/DevelopersCard";
import QACard from "../Components/Home/QACard";
import DesignCard from "../Components/Home/DesignCard";

class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center mt-4">Our team</h2>
          <CardDeck>
            <DevelopersCard />
            <QACard />
            <DesignCard />
          </CardDeck>
        </Container>
      </>
    );
  }
}

export default Home;
