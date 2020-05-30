import React from "react";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />

      <Container>
        <h1>Just do it!</h1>
        <Button variant="warning">Button</Button>
      </Container>
    </>
  );
}

export default App;
