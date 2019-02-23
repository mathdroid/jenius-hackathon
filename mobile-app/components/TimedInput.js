import React from 'react';
import { AppRegistry, TextInput } from 'react-native';
import styled from 'styled-components/native';

export default function TimedInput({ question, answers, duration }) {
  return (
    <FormInput
      style={{ height: 40 }}
      placeholder="Type here to translate!"
      onChangeText={text => this.setState({ text })}
    />
  );
}

const FormInput = styled(TextInput)``;

AppRegistry.registerComponent('Jenius KYCK', () => TimedInput);
