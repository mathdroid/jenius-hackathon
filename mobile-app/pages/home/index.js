import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

import TextInput from './text-input';

const RootView = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default class Home extends React.Component {
  render() {
    const { navigation } = this.props;
    const navigateTo = to => () => navigation.navigate(to);
    return (
      <RootView>
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput pressHandler={navigateTo('Bandersnatch')} />
      </RootView>
    );
  }
}
