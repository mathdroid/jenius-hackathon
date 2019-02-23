import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo';

export const RootView = styled(View)`
  flex: 1;
  background-color: #16161d;
  align-items: stretch;
  justify-content: space-between;
  border-top-width: 0;
  border-color: white;
`;

export const ButtonWrapper = styled(LinearGradient)`
  border-radius: 4px;
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

export const Button = ({
  onPress = () => null,
  title = 'Button',
  color = '#4e4',
  colorTo = '#44e',
  ...props
}) => (
  <TouchableOpacity onPress={onPress} {...props}>
    <ButtonWrapper colors={[color, colorTo]} start={[0, 0]} end={[1, 0]}>
      <InterText ta={'center'}>{title}</InterText>
    </ButtonWrapper>
  </TouchableOpacity>
);

export const TextContainer = styled(View)`
  padding: 16px;
`;

export const CountdownBar = styled(View)`
  align-self: center;
  width: ${props => props.progress || 0}%;
  height: 4px;
  background: hsl(
    0,
    ${props => (props.progress ? 100 - props.progress : 0)}%,
    ${props => (props.progress ? props.progress / 2 + 50 : 100)}%
  );
  margin: 4px 16px;
`;
