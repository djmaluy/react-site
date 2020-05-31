import React, { Component } from "react";
import { Container, TabContainer, Row, Col, TabContent } from "react-bootstrap";
import NavTab from "../Components/About/NavTab";
import FirstContentTab from "../Components/About/FirstContentTab";
import SecondContentTab from "../Components/About/SecondContentTab";
import ThirdContentTab from "../Components/About/ThirdContentTab";
import FourthContentTab from "../Components/About/FourthContentTab";
import FifthContentTab from "../Components/About/FifthContentTab";

class About extends Component {
  render() {
    return (
      <>
        <Container>
          <TabContainer id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <NavTab />
              </Col>
              <Col sm={9}>
                <TabContent className="mt-2">
                  <FirstContentTab />
                  <SecondContentTab />
                  <ThirdContentTab />
                  <FourthContentTab />
                  <FifthContentTab />
                </TabContent>
              </Col>
            </Row>
          </TabContainer>
        </Container>
      </>
    );
  }
}

export default About;
