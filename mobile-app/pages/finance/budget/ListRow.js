/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components/native';
import { Text, View, TextInput } from 'react-native';

const RootView = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
  border-bottom-width: 1px;
  border-bottom-color: #3f3f3f;
`;

const RowHeading = styled(View)`
  flex: 1 1 auto;
`;

const RowHeadingText = styled(Text)`
  font-size: 14px;
  color: #fff;
  font-family: ${props =>
    props.bold ? 'inter-bold' : props.light ? 'inter-extralight' : 'inter-regular'};
`;

const RowItem = styled(View)`
  width: 23%;
`;

const RowItemText = styled(Text)`
  font-size: 14px;
  color: ${props => (props.red ? 'red' : '#fff')};
  font-family: ${props =>
    props.bold ? 'inter-bold' : props.light ? 'inter-extralight' : 'inter-regular'};
  text-align: right;
`;

const FormInput = styled(TextInput)`
  margin: 0;
  padding: 0;
  color: #fff;
  text-align: right;
`;

export default function ListRow({ isIncome, item, onRowChange }) {
  const { key, label, budgeted, spent, balance, income } = item;

  if (isIncome && income) {
    return (
      <RootView>
        <RowHeading>
          <RowHeadingText>{label}</RowHeadingText>
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
        <RowHeadingText>{label}</RowHeadingText>
      </RowHeading>
      <RowItem>
        <RowItemText>{budgeted}</RowItemText>
      </RowItem>
      <RowItem>
        <FormInput
          keyboardType="numeric"
          placeholder="..."
          placeholderTextColor="#666"
          value={spent.toString()}
          onChangeText={text => onRowChange(text ? parseInt(text, 10) : 0, key)}
        />
      </RowItem>
      <RowItem>
        <RowItemText red={balance < 0}>{balance}</RowItemText>
      </RowItem>
    </RootView>
  );
}
