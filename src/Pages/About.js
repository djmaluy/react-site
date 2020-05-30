import React, { Component } from "react";
import {
  Container,
  TabContainer,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <>
        <Container>
          <TabContainer id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column mt-2">
                  <NavItem>
                    <NavLink eventKey="first">Design</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink eventKey="second">Team</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink eventKey="third">Programming</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink eventKey="fourth">Frameworks</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink eventKey="fifth">Libraries</NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col sm={9}>
                <TabContent className="mt-2">
                  <TabPane eventKey="first">
                    <img
                      className="w-100"
                      src="https://img.freepik.com/free-vector/abstract-technology-particle-background_52683-25766.jpg?size=626&ext=jpg"
                      alt="."
                    />
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also into electronic typesetting, remaining
                      essentially unchanged. It was popularised in the 1960s
                      with the release of Letraset sheets containing Lorem Ipsum
                      passages, and more recently with desktop publishing
                      software including versions of Lorem Ipsum.
                    </p>
                  </TabPane>
                </TabContent>
                <TabContent className="mt-2">
                  <TabPane eventKey="second">
                    <img
                      className="w-100"
                      src="https://miro.medium.com/max/8800/1*n1EJGeirkzKciuW9-A2A_A.jpeg"
                      alt=".."
                    />
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries
                    </p>
                  </TabPane>
                </TabContent>
                <TabContent className="mt-2">
                  <TabPane eventKey="third">
                    <img
                      className="w-100"
                      src="https://www.bgosoftware.com/blog/wp-content/uploads/2016/03/insidepost_coding.jpg"
                      alt=".."
                    />
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries
                    </p>
                  </TabPane>
                </TabContent>
                <TabContent className="mt-2">
                  <TabPane eventKey="fourth">
                    <img
                      className="w-100"
                      src="https://miro.medium.com/max/1848/1*k4tw8soAC2lUhn6XxNGFMg.png"
                      alt=".."
                    />
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries
                    </p>
                  </TabPane>
                </TabContent>
                <TabContent>
                  <TabPane eventKey="fifth">
                    <img
                      className="w-100"
                      src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/120553748/original/2dc420075a54ae0692c6c6d8594b04319069ec4e/code-in-10-programming-languages-frameworks-libraries-platforms-tools.jpg"
                      alt=".."
                    />
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries
                    </p>
                  </TabPane>
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
