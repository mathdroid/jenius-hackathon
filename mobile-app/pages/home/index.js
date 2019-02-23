import React from 'react';
import { Text, ScrollView, Image, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

import TextInput from './text-input';
import cards from './cards.png';
import safe from './safe.png';
import money from './money.png';
import Pane from './pane';
import inOut from './in-out.png';
import cardCenter from './card-center.png';
import eWallet from './e-wallet.png';
import totalBalance from './total-balance.png';

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
        <HiBanner name={'Resi'} />
        <View
          style={{
            aspectRatio: 1.8,
            width: '100%',
            alignSelf: 'stretch',
            marginVertical: 5,
          }}
        >
          <Image
            source={totalBalance}
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
            aspectRatio: 1.38,
            width: '100%',
            alignSelf: 'stretch',
            marginVertical: 5,
          }}
        >
          <Image
            source={inOut}
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
            aspectRatio: 1.36,
            width: '100%',
            alignSelf: 'stretch',
            marginVertical: 5,
          }}
        >
          <Image
            source={eWallet}
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
            aspectRatio: 1.33,
            width: '100%',
            alignSelf: 'stretch',
            marginVertical: 5,
          }}
        >
          <Image
            source={cardCenter}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: 'contain',
            }}
          />
        </View>

        <TextInput pressHandler={navigateTo('Bandersnatch')} />
        <Pane
          title={'KYCK'}
          menu={[
            { icon: cards, label: 'Spending Tracker', cta: 'Ulas Pengeluaranmu' },
            { icon: safe, label: 'Budget Planner', cta: 'Rencanakan Keuanganmu' },
            {
              icon: money,
              label: 'Flexi Cash',
              cta: 'Mulai Flexi Quiz',
              onCta: navigateTo('Bandersnatch'),
            },
          ]}
        />
      </ScrollView>
    );
  }
}
