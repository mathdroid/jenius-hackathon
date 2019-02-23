import React from 'react';
import { AppRegistry, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export default class TimedInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: undefined,
    };
  }

  render() {
    const { question, answers, duration } = this.props;
    const { selected } = this.state;

    return (
      <>
        <QuestionText>{question}</QuestionText>
        {answers.map((data, key) => {
          return (
            <View key={data}>
              {selected === key ? (
                <Checkbox>
                  <Text>{data} isChecked</Text>
                </Checkbox>
              ) : (
                <Checkbox
                  onPress={() => {
                    this.setState({ selected: key });
                  }}
                >
                  <Text>{data}</Text>
                </Checkbox>
              )}
            </View>
          );
        })}
      </>
    );
  }
}

const QuestionText = styled(Text)`
  margin-bottom: 4px;
`;

const Checkbox = styled(TouchableOpacity)`
  padding: 4px 8px;
`;

AppRegistry.registerComponent('Jenius KYCK', () => TimedInput);
