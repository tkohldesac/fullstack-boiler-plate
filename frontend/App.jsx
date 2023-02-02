import React from "react";
import ExampleComponent from "./components/ExampleComponent.js";
import Test from "./components/Test.js";
import Container from "@mui/material/Container";

export default function App() {

  return (
    <div>
      <Container fixed maxWidth="lg" bgcolor="green" sx={{ height: '98vh' }} >
      <Test />
      <ExampleComponent />
      </Container>
      
    </div>
  );
}