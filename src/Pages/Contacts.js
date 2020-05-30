import React, { Component } from "react";
import {
  Container,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
  FormCheck,
  Button,
} from "react-bootstrap";

class Contacts extends Component {
  render() {
    return (
      <Container style={{ width: "600px" }}>
        <h1 className="mt-4 text-center">Contacts us</h1>
        <Form>
          <FormGroup controlId="formBasicEmail">
            <FormLabel>Email addres</FormLabel>
            <FormControl type="email" placeholder="Enter email" />
            <FormText className="text-muted">
              You will never walk alone
            </FormText>
          </FormGroup>
          <FormGroup controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </FormGroup>
          <Form.Group controlId="formBasicCheckbox">
            <FormCheck type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Contacts;
