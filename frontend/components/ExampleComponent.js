import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const StyledButton = styled.button`
  width: 5rem;
  height: 2rem;
  outline: none;
  border: none;
  background-color: ${props => props.clickedCount % 2 ? '#00cc00' : '#cc0000'};
  border-radius: .25rem;
  transform: translate(${props => props.clickedCount % 4 > 1 ? '100px' : '0'}, ${props => props.clickedCount % 4 > 0 && props.clickedCount % 4 < 3 ? '100px' : '0'});
  transition: all .2s ease-out;
`;

export default function ExampleComponent() {

  const [clickedCount, setClickedCount] = useState(0);

  const onClick = async () => {
    await axios.get('/something');
    setClickedCount(clickedCount + 1);
  }

  return (
    <StyledButton clickedCount={clickedCount} onClick={onClick}>Click me</StyledButton>
  )
}