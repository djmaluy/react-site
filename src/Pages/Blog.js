import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ReactPost from "../Components/Blog/ReactPost";
import AngularPost from "../Components/Blog/AngularPost";
import VuePost from "../Components/Blog/VuePost";
import CategoriesList from "../Components/Blog/CategoriesList";
import SideWidget from "../Components/Blog/SideWidget";

class Blog extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md="9">
              <h2 className="text-center mt-3">Frameworks</h2>
              <ReactPost />
              <AngularPost />
              <VuePost />
            </Col>
            <Col md="3">
              <h5 className="text-center mt-5"> Categories </h5>
              <CategoriesList />
              <SideWidget />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Blog;
