import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const RootView = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default class App extends React.Component {
  render() {
    return (
      <RootView>
        <Text>I am a bandersnatch</Text>
      </RootView>
    );
  }
}
