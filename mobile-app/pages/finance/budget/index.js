import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const RootView = styled(View)`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #000;
`;

const StyledText = styled(Text)`
  color: #fff;
`;

export default function FinanceBudgetScreen() {
  return (
    <RootView>
      <StyledText>FinanceBudgetView</StyledText>
    </RootView>
  );
}
