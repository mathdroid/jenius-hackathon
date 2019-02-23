import React from 'react';
import { Text, View, Button } from 'react-native';
import styled from 'styled-components/native';
import { Font } from 'expo';

import TimedInput from '../../components/TimedInput';
import questions from '../../data/questions';

const RootView = styled(View)`
  flex: 1;
  background-color: #16161d;
  align-items: center;
  justify-content: center;
  border-top-width: 0;
  border-color: white;
`;

const InterText = styled(Text)`
  font-family: 'inter-regular';
  color: white;
  ${'' /* font-size: 32; */}
`;

export default class App extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#16161D',
      shadowColor: 'transparent',
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',
  };

  constructor(props) {
    super(props);

    this.interval = undefined;
    this.state = {
      showAnswers: false,
      duration: 10,
      currentQuestion: undefined,
      prevAnswer: undefined,
      score: 0,
      isActive: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'inter-bold': require('../../assets/fonts/Inter-Bold.ttf'),
      'inter-regular': require('../../assets/fonts/Inter-Regular.ttf'),
      'inter-extralight': require('../../assets/fonts/Inter-ExtraLight-BETA.ttf'),
    });
    this.setState({
      currentQuestion: questions.question,
      isActive: true,
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startInterval = () => {
    this.interval = setInterval(() => this.tick(), 1000);
  };

  stopInterval = () => {
    clearInterval(this.interval);
    this.interval = undefined;
  };

  handleShowAnswers = () => {
    this.startInterval();
    this.setState({
      showAnswers: true,
    });
  };

  handleAnswer = key => {
    this.stopInterval();
    this.setState(prevState => ({
      duration: key.nextQ ? 10 : 0,
      showAnswers: false,
      prevAnswer: key.label,
      score: prevState.score + key.score,
      currentQuestion: key.nextQ ? key.nextQ : undefined,
    }));
  };

  tick() {
    const { currentQuestion, duration } = this.state;

    this.setState(state => ({
      duration: state.duration - 1,
    }));

    if (duration === 0) {
      this.stopInterval();
      this.handleAnswer(currentQuestion.A[Math.floor(Math.random() * currentQuestion.A.length)]);
    }
  }

  render() {
    const { duration, currentQuestion, prevAnswer, score, isActive, showAnswers } = this.state;

    if (currentQuestion) {
      return (
        <RootView>
          <Text>{duration}</Text>
          <InterText>{currentQuestion.Q}</InterText>
          {showAnswers ? (
            <TimedInput
              answers={currentQuestion.A}
              pressHandler={this.handleAnswer}
              isEnabled={isActive}
            />
          ) : (
            <Button
              color={'white'}
              title="Show Answers"
              onPress={() => {
                this.setState({
                  showAnswers: true,
                });
                this.startInterval();
              }}
            />
          )}
          <Text>Score: {score}</Text>
          {prevAnswer && <Text>{prevAnswer}</Text>}
        </RootView>
      );
    }

    return (
      <RootView>
        <Text>Score: {score}</Text>
      </RootView>
    );
  }
}
