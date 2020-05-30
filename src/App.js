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
      </Container>
    </>
  );
}

export default App;
