import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const StyledButton = styled.button`
  width: 5rem;
  height: 2rem;
  outline: none;
  border: none;
  background-color: #c0c;
  border-radius: 0.25rem;
  );
  transition: all 0.2s ease-out;
`;

export default function ExampleComponent() {
  const [clickedCount, setClickedCount] = useState(0);

  const onClick = async () => {
    await axios.get("/something");
    setClickedCount(clickedCount + 1);
  };

  return (
    <StyledButton clickedCount={clickedCount} onClick={onClick}>
      Click me
    </StyledButton>
  );
}
