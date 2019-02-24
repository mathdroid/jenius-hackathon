/* eslint-disable global-require */
import React from 'react';
import styled, { css } from 'styled-components/native';
import { Text, ScrollView, View, Dimensions } from 'react-native';
import { BarChart, LineChart, Grid, YAxis } from 'react-native-svg-charts';
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
  margin-top: ${props => (props.header && !props.first ? 16 : 0)};
  background-color: ${props => (props.header ? 'transparent' : '#333')};
`;

const initialSalary = 9000;
const burnRate = 350;
const burnRateChart = new Array(30).fill(9000).map((_, i) => initialSalary - i * 350);
const burnRateInDays = initialSalary / burnRate;

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
            <View style={{ height: 200, flexDirection: 'row' }}>
              <YAxis
                data={[2000400, 3151400, 2600000, 2300000, 2000000]}
                contentInset={{ top: 20, bottom: 20 }}
                svg={{
                  fill: 'grey',
                  fontSize: 10,
                }}
                numberOfTicks={10}
                formatLabel={value => `Rp${value}`}
              />
              <LineChart
                style={{ flex: 1, marginLeft: 8 }}
                svg={{ stroke: 'magenta' }}
                contentInset={{ top: 20, bottom: 20, left: 20 }}
                data={[2000400, 3151400, 2600000, 2300000, 2000000]}
              >
                <Grid />
              </LineChart>
            </View>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
            <StyledText header>Cash Flow</StyledText>
          </CardItem>
          <CardItem bordered>
            <View style={{ height: 200, flexDirection: 'row' }}>
              <YAxis
                data={burnRateChart}
                contentInset={{ top: 20, bottom: 20 }}
                svg={{
                  fill: 'grey',
                  fontSize: 10,
                }}
                numberOfTicks={10}
                formatLabel={value => `Rp${value}`}
              />
              <BarChart
                style={{ flex: 1, marginLeft: 8 }}
                svg={{ fill: 'magenta' }}
                contentInset={{ top: 20, bottom: 20 }}
                data={burnRateChart}
              >
                <Grid />
              </BarChart>
            </View>
            <View
              style={{
                marginVertical: 8,
              }}
            >
              <StyledText
                style={{
                  textAlign: 'center',
                  fontFamily: 'inter-regular',
                  color: '#fff',
                }}
              >
                Burn Rate:
              </StyledText>
              <Text
                bold
                style={{
                  textAlign: 'center',
                  fontFamily: 'inter-bold',
                  fontSize: 24,
                  color: 'magenta',
                }}
              >
                {Math.ceil(burnRateInDays)} days
              </Text>
            </View>
          </CardItem>
        </Card>
      </RootView>
    </FontLoader>
  );
}
