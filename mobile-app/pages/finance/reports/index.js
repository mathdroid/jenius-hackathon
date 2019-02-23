/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components/native';
import { Text, ScrollView, View, Dimensions } from 'react-native';
import { LineChart, Grid, YAxis } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import FontLoader from '../../bandersnatch/components/font-loader';

const RootView = styled(ScrollView)`
  flex: 1;
  padding: 16px;
  background-color: #000;
`;

const StyledText = styled(Text)`
  margin-bottom: ${props => (props.header ? 8 : 0)};
  color: #fff;
  font-family: ${props => (props.header ? 'inter-bold' : 'inter-regular')};
  font-size: ${props => (props.header ? 32 : 16)};
`;

const Card = styled(View)``;

const CardItem = styled(View)`
  display: flex;
  margin-top: ${props => (props.header && !props.first ? 16 : 0)};
  background-color: ${props => (props.header ? 'transparent' : '#333')};
  height: 100px;
`;

export default function FinanceReportsScreen() {
  return (
    <FontLoader
      fonts={{
        'inter-bold': require('../../../assets/fonts/Inter-Bold.ttf'),
        'inter-regular': require('../../../assets/fonts/Inter-Regular.ttf'),
        'inter-extralight': require('../../../assets/fonts/Inter-ExtraLight-BETA.ttf'),
      }}
    >
      <RootView>
        <Card>
          <CardItem header first bordered>
            <StyledText header>Net Worth</StyledText>
          </CardItem>
          <CardItem bordered>
            <LineChart
              style={{ flex: 1 }}
              svg={{ stroke: 'rgb(134, 65, 244)' }}
              contentInset={{ top: 20, bottom: 20 }}
              data={[2000400, 3151400, 2600000, 2300000, 2000000]}
            >
              <Grid />
            </LineChart>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
            <StyledText header>Cash Flow</StyledText>
          </CardItem>
          <CardItem bordered>
            <StyledText>
              NativeBase is a free and open source framework that enable developers to build
              high-quality mobile apps using React Native iOS and Android apps with a fusion of ES6.
            </StyledText>
          </CardItem>
        </Card>
      </RootView>
    </FontLoader>
  );
}
