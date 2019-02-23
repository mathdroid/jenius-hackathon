import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styled from 'styled-components/native';
import TimedInput from './components/TimedInput';

export default class App extends React.Component {
  render() {
    return (
      <RootView>
        <Text>test</Text>
        <TimedInput />
      </RootView>
    );
  }
}

const RootView = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
