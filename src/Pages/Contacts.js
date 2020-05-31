import React, { Component } from "react";
import { Container, Form } from "react-bootstrap";
import FormGroupEmail from "../Components/ContactsUs/FormGroupEmail";
import FormGroupTextarea from "../Components/ContactsUs/FormGroupTextarea";
import FormGroupCheckbox from "../Components/ContactsUs/FormGroupCheckbox";
import ButtonForm from "../Components/ContactsUs/ButtonForm";

class Contacts extends Component {
  render() {
    return (
      <Container style={{ width: "600px" }}>
        <h1 className="mt-4 text-center">Contacts us</h1>
        <Form>
          <FormGroupEmail />
          <FormGroupTextarea />
          <FormGroupCheckbox />
          <ButtonForm />
        </Form>
      </Container>
    );
  }
}

export default Contacts;
