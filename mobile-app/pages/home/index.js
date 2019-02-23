import React from 'react';
import { Text, ScrollView, Image, View } from 'react-native';
import styled, { css } from 'styled-components/native';

import cards from './cards.png';
import safe from './safe.png';
import money from './money.png';
import Pane from './pane';
import inOut from './in-out.png';
import cardCenter from './card-center.png';
import eWallet from './e-wallet.png';
import totalBalance from './total-balance.png';

const RootView = styled(ScrollView)`
  background-color: #f5f5f5;
`;

const containerStyle = css`
  align-items: flex-start;
  justify-content: center;
`;

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

const ImageWrapper = styled(View)`
  margin-top: 5px;
  margin-bottom: 5px;
  align-self: stretch;
  width: 100%;
  aspect-ratio: ${props => props.aspectRatio || 1};
`;

const StyledImage = styled(Image)`
  flex: 1;
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;

const HiBanner = ({ name }) => (
  <Banner>
    <BannerText>
      Hi, <Bold>{name}</Bold>
    </BannerText>
  </Banner>
);

const Home = ({ navigation }) => {
  const navigateTo = to => () => navigation.navigate(to);

  return (
    <RootView contentContainerStyle={containerStyle}>
      <HiBanner name="Resi" />

      <ImageWrapper aspectRatio={1.8}>
        <StyledImage source={totalBalance} />
      </ImageWrapper>
      <ImageWrapper aspectRatio={1.38}>
        <StyledImage source={inOut} />
      </ImageWrapper>
      <ImageWrapper aspectRatio={1.36}>
        <StyledImage source={eWallet} />
      </ImageWrapper>
      <ImageWrapper aspectRatio={1.33}>
        <StyledImage source={cardCenter} />
      </ImageWrapper>

      <Pane
        title="KYCK"
        menu={[
          {
            icon: cards,
            label: 'Spending Tracker',
            cta: 'Ulas Pengeluaranmu',
            onCta: () => {
              navigation.navigate('Finance');
              navigation.navigate('Reports');
            },
          },
          {
            icon: safe,
            label: 'Budget Planner',
            cta: 'Rencanakan Keuanganmu',
            onCta: () => {
              navigation.navigate('Finance');
              navigation.navigate('Budget');
            },
          },
          {
            icon: money,
            label: 'Flexi Cash',
            cta: 'Mulai Flexi Quiz',
            onCta: navigateTo('Bandersnatch'),
          },
        ]}
      />
    </RootView>
  );
};
Home.navigationOptions = {
  headerStyle: {
    backgroundColor: 'rgb(0, 164, 222)',
    shadowColor: 'transparent',
    borderBottomWidth: 0,
  },
  headerTintColor: '#ddd',
};
export default Home;
