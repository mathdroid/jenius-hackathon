import React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

const Card = styled(View)`
  background-color: beige;
`;

const CardItem = styled(View)``;

export default function FinanceReportsScreen() {
  return (
    <View>
      <Card>
        <CardItem header bordered>
          <Text>Net Worth</Text>
        </CardItem>
        <CardItem bordered style={{ backgroundColor: 'beige' }}>
          <Text>
            NativeBase is a free and open source framework that enable developers to build
            high-quality mobile apps using React Native iOS and Android apps with a fusion of ES6.
          </Text>
        </CardItem>
        <CardItem header bordered>
          <Text>Cash Flow</Text>
        </CardItem>
        <CardItem bordered>
          <Text>
            NativeBase is a free and open source framework that enable developers to build
            high-quality mobile apps using React Native iOS and Android apps with a fusion of ES6.
          </Text>
        </CardItem>
      </Card>
    </View>
  );
}
