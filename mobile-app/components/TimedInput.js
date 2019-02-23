import React from 'react';
import { AppRegistry, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export default class TimedInput extends React.Component {
  static defaultProps = {
    duration: 10,
  };

  constructor(props) {
    super(props);

    this.state = {
      selected: undefined,
      duration: this.props.duration,
      isEnabled: false,
    };
  }

  tick() {
    this.setState(state => ({
      duration: state.duration - 1,
    }));

    if (this.state.duration === 0) {
      clearInterval(this.interval);
    }
  }

  handlePress(key) {
    if (this.state.isEnabled && this.state.duration !== 0) {
      this.setState({ selected: key, isEnabled: false });
      clearInterval(this.interval);
      this.props.pressHandler(key);
    }
  }

  componentDidMount() {
    this.setState({ isEnabled: true });
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    this.setState({ isEnabled: false });
    clearInterval(this.interval);
  }

  render() {
    const { question, answers, pressHandler } = this.props;
    const { selected, duration } = this.state;

    return (
      <>
        <QuestionText>
          {question} {duration}
        </QuestionText>
        {answers.map(data => {
          return (
            <View key={data}>
              {selected === data ? (
                <Checkbox>
                  <Text>isChecked {data}</Text>
                </Checkbox>
              ) : (
                <Checkbox onPress={() => this.handlePress(data)}>
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
