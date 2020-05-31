import React, { Component } from "react";
import { FormGroup, Form } from "react-bootstrap";

class FormGroupEmail extends Component {
  render() {
    return (
      <FormGroup controlId="formBasicEmail">
        <Form.Label>Email addres</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">You will never walk alone</Form.Text>
      </FormGroup>
    );
  }
}

export default FormGroupEmail;
