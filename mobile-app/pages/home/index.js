import React from 'react';
import { Text, ScrollView, Image, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import TextInput from './text-input';
import w1 from './w1.png';
import w2 from './w2.png';
import w3 from './w3.png';

// const RootView = styled(ScrollView)`
// `;

const containerStyle = StyleSheet.create({
  default: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const Banner = styled(View)`
  align-self: stretch;
  background-color: #fff;
  margin: 10px 0;
  padding: 10px 20px;
  border-radius: 2px;
`;
const BannerText = styled(Text)`
  font-size: 20px;
  color: rgb(0, 164, 222);
`;

const Bold = styled(Text)`
  font-weight: bold;
`;
const HiBanner = ({ name }) => (
  <Banner>
    <BannerText>
      Hi, <Bold>{name}</Bold>
    </BannerText>
  </Banner>
);

export default class Home extends React.Component {
  render() {
    const { navigation } = this.props;
    const navigateTo = to => () => navigation.navigate(to);
    return (
      <ScrollView
        style={{
          backgroundColor: '#f5f5f5',
        }}
        contentContainerStyle={containerStyle.default}
      >
        <HiBanner name={'Budi'} />
        <View
          style={{
            aspectRatio: 2.09,
            width: '100%',
            alignSelf: 'stretch',
            marginVertical: 5,
          }}
        >
          <Image
            source={w1}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            aspectRatio: 1.98,
            width: '100%',
            alignSelf: 'stretch',
            marginVertical: 5,
          }}
        >
          <Image
            source={w2}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'contain',
            }}
          />
        </View>

        <View
          style={{
            aspectRatio: 1.92,
            width: '100%',
            alignSelf: 'stretch',
            marginVertical: 5,
          }}
        >
          <Image
            source={w3}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'contain',
            }}
          />
        </View>

        <TextInput pressHandler={navigateTo('Bandersnatch')} />
      </ScrollView>
    );
  }
}
