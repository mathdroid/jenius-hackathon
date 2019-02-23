import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const ButtonRoot = styled(TouchableOpacity)`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 35px;
  padding-left: 16.5px;
  padding-right: 16.5px;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #8fbc5a;
  border-radius: 2px;
`;

const ButtonText = styled(Text)`
  color: #8fbc5a;
  font-size: 14px;
`;

export default function Button({ title, lowercase, ...rest }) {
  return (
    <ButtonRoot {...rest}>
      <ButtonText>{lowercase ? title : title.toUpperCase()}</ButtonText>
    </ButtonRoot>
  );
}
