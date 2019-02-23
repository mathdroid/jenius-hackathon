import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const RootView = styled(View)`
  flex: 1;
  background-color: #16161d;
  align-items: stretch;
  justify-content: space-between;
  border-top-width: 0;
  border-color: white;
`;

export const ButtonWrapper = styled(View)`
  background-color: ${props => props.color || '#4e4'};
  padding: 16px;
  margin: 0 16px 16px 16px;
`;

export const InterText = styled(Text)`
  font-family: ${props =>
    `inter` + (props.bold ? '-bold' : props.light ? '-extralight' : '-regular')};
  color: ${props => props.color || 'white'};
  font-size: 20px;
  text-align: ${props => props.ta || 'left'};
  ${props => props.flex && `flex: ${props.flex};`}
`;

export const Button = ({ onPress = () => null, title = 'Button', color, ...props }) => (
  <TouchableOpacity onPress={onPress} {...props}>
    <ButtonWrapper color={color}>
      <InterText ta={'center'}>{title}</InterText>
    </ButtonWrapper>
  </TouchableOpacity>
);

export const TextContainer = styled(View)`
  padding: 16px;
`;
