import React, { Component } from "react";
import { FormGroup, Form } from "react-bootstrap";

class FormGroupTextarea extends Component {
  render() {
    return (
      <FormGroup controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </FormGroup>
    );
  }
}

export default FormGroupTextarea;
