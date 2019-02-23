import React from 'react';
import styled from 'styled-components/native';
import { Text, View } from 'react-native';

const RootView = styled(View)`
  display: flex;
  flex-direction: row;
  padding: 8px 0;
  border-bottom-width: 2px;
  border-bottom-color: #3f3f3f;
`;

const RowHeading = styled(View)`
  flex: 1 1 auto;
`;

const RowHeadingText = styled(Text)`
  color: ${props => props.color || '#fff'};
  font-weight: 700;
`;

const RowItem = styled(View)`
  width: 22%;
`;

const RowItemText = styled(Text)`
  color: #fff;
  font-weight: 400;
  text-align: right;
`;

export default function ListHeader({ color, isIncome, title }) {
  if (isIncome) {
    return (
      <RootView>
        <RowHeading>
          <RowHeadingText color={color}>{title}</RowHeadingText>
        </RowHeading>
        <RowItem>
          <RowItemText>Masuk</RowItemText>
        </RowItem>
      </RootView>
    );
  }

  return (
    <RootView>
      <RowHeading>
        <RowHeadingText color={color}>{title}</RowHeadingText>
      </RowHeading>
      <RowItem>
        <RowItemText>Dianggarkan</RowItemText>
      </RowItem>
      <RowItem>
        <RowItemText>Keluar</RowItemText>
      </RowItem>
      <RowItem>
        <RowItemText>Sisa</RowItemText>
      </RowItem>
    </RootView>
  );
}
