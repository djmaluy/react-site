import React, { Component } from "react";
import { Form } from "react-bootstrap";

class FormGroupCheckbox extends Component {
  render() {
    return (
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
    );
  }
}

export default FormGroupCheckbox;
