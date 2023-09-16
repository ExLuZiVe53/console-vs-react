import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  padding: 18px 15px;
  font-size: 18px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  align-self: ${props => props.align || 'stretch'};
`;

export const Button = props => {
  return <StyledButton {...props} />;
};