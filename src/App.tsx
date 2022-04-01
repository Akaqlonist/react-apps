import React from 'react';
import logo from './logo.svg';
import {
  Button,
  Code,
  Image,
  Text,
  Flex,
  Square,
  Spacer,
} from '@chakra-ui/react';

function App() {
  return (
    <Flex padding={100} direction={'column'} align='center' height={'100vh'}>
      <Square size={500}>
        <Image src={logo} alt='logo' />
      </Square>
      <Text fontSize={'2xl'}>
        Edit <Code>src/App.tsx</Code> and save to reload.
      </Text>
      <Button variant='link'>Learn React</Button>
      <Spacer />
    </Flex>
  );
}

export default App;
