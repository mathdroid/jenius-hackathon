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

const Banner = styled(View)`
  background-color: rgb(0, 164, 222);
`;
const BannerText = styled(Text)`
  color: #fff;
`;
const HiBanner = name => (
  <Banner>
    <BannerText>{name}</BannerText>
  </Banner>
);

export default class Home extends React.Component {
  render() {
    const { navigation } = this.props;
    const navigateTo = to => () => navigation.navigate(to);
    return (
      <RootView>
        <HiBanner name={'Budi'} />
        <TextInput pressHandler={navigateTo('Bandersnatch')} />
      </RootView>
    );
  }
}
