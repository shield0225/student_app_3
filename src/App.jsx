import React from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import Header from "./Header";
import InputForm from "student_app_1/InputForm";
import "./index.css";

const App = () => (
  <Container>
    <Header />
    <InputForm />
  </Container>
);
ReactDOM.render(<App />, document.getElementById("app"));
