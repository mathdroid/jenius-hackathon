import React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

const RootView = styled(View)`
  display: flex;
  flex-direction: row;
  padding: 8px 0;
  border-bottom-width: 1px;
  border-bottom-color: #3f3f3f;
`;

const RowHeading = styled(View)`
  flex: 1 1 auto;
`;

const RowHeadingText = styled(Text)`
  color: #fff;
  font-weight: 400;
`;

const RowItem = styled(View)`
  width: 22%;
`;

const RowItemText = styled(Text)`
  color: #fff;
  font-weight: 400;
  text-align: right;
`;

export default function ListRow({ isIncome, item }) {
  const { key, budgeted, spent, balance, income } = item;

  if (isIncome && income) {
    return (
      <RootView>
        <RowHeading>
          <RowHeadingText>{key}</RowHeadingText>
        </RowHeading>
        <RowItem>
          <RowItemText>{income}</RowItemText>
        </RowItem>
      </RootView>
    );
  }

  return (
    <RootView>
      <RowHeading>
        <RowHeadingText>{key}</RowHeadingText>
      </RowHeading>
      <RowItem>
        <RowItemText>{budgeted}</RowItemText>
      </RowItem>
      <RowItem>
        <RowItemText>{spent}</RowItemText>
      </RowItem>
      <RowItem>
        <RowItemText>{balance}</RowItemText>
      </RowItem>
    </RootView>
  );
}
