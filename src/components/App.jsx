import React from 'react';
import styled from 'styled-components';
import { Title } from './Title.jsx';
import { Flex } from './Flex.jsx';
import { Console } from './Console.jsx';
import { Button } from './Button.jsx';

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
      <Flex justify={'center'}>
        <Title>Console cmd 2022. Ulbi TV</Title>
      </Flex>
      <Flex direction="column" margin={'10px 0'}>
        <Console />
        <Button color="green" outlined align="flex-end">
          Click me
        </Button>
      </Flex>
    </AppWrapper>
  );
};
