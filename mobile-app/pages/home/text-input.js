import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

export default ({ pressHandler = () => null }) => (
  <View>
    <TextInput />
    <Text>I am a text input</Text>
    <TouchableOpacity onPress={pressHandler}>
      <Text>Bandersnatch me</Text>
    </TouchableOpacity>
  </View>
);
