import React from "react";

import Test from "./components/Test.js";
import Container from "@mui/material/Container";
import Character from "./components/Character.js";

export default function App() {
  

  return (
    <div>
      
      <Container fixed maxWidth="lg" bgcolor="green" sx={{ height: '98vh' }} >
      <Character />
      <Test />
      
      </Container>
      
    </div>
  );
}