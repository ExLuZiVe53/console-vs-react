import React from 'react';
import styled from 'styled-components';
import { Title } from './Title.jsx';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;
  color: white;
`;

export const App = () => {
  return (
    <AppWrapper>
      <Title>fsdah</Title>
    </AppWrapper>
  );
};
