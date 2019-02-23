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
    const { answers } = this.props;

    this.setState(state => ({
      duration: state.duration - 1,
    }));

    if (this.state.duration === 0) {
      this.handlePress(answers[Math.floor(Math.random() * answers.length)]);
    }
  }

  handlePress(data) {
    this.setState({ selected: data, isEnabled: false });
    clearInterval(this.interval);
    this.props.pressHandler(data);
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
        {answers.map((data, key) => {
          return (
            <View key={key}>
              {selected === data ? (
                <CheckboxWrapper>
                  <Checkbox checked />
                  <Text>{data.label}</Text>
                </CheckboxWrapper>
              ) : (
                <CheckboxWrapper onPress={() => this.handlePress(data)}>
                  <Checkbox />
                  <Text>{data.label}</Text>
                </CheckboxWrapper>
              )}
            </View>
          );
        })}
      </>
    );
  }
}

const Checkbox = styled(View)`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border-width: 1px;
  border-style: solid;
  border-radius: 24px;
  border-color: ${props => (props.checked ? '#8fbc5a' : '#7d7d7d')};
`;

const QuestionText = styled(Text)`
  margin-bottom: 4px;
`;

const CheckboxWrapper = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 8px;
`;

AppRegistry.registerComponent('Jenius KYCK', () => TimedInput);
