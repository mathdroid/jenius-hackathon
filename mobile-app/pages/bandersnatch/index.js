import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import TimedInput from '../../components/TimedInput';
import questions from '../../data/questions';

const RootView = styled(View)`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: 10,
      currentQuestion: undefined,
      prevAnswer: undefined,
      score: 0,
      isActive: false,
    };
  }

  tick() {
    const { currentQuestion } = this.state;

    this.setState(state => ({
      duration: state.duration - 1,
    }));

    if (this.state.duration === 0) {
      this.handlePress(currentQuestion.A[Math.floor(Math.random() * currentQuestion.A.length)]);
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.setState({
      currentQuestion: questions.question,
      isActive: true,
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleAnswer = key => {
    if (this.state.duration !== 0) {
      this.setState(prevState => ({
        duration: 10,
        prevAnswer: key.label,
        score: prevState.score + key.score,
        currentQuestion: key.nextQ ? key.nextQ : undefined,
      }));
    }

    if (!key.nextQ) {
      this.setState({
        isActive: false,
        duration: 0,
      });
    }
  };

  render() {
    const { duration, currentQuestion, prevAnswer, score, isActive } = this.state;
    return (
      <RootView>
        {currentQuestion && <Text>{duration}</Text>}
        {currentQuestion && (
          <TimedInput
            question={currentQuestion.Q}
            answers={currentQuestion.A}
            pressHandler={this.handleAnswer}
            isEnabled={isActive}
          />
        )}
        <Text>Score: {score}</Text>
        {prevAnswer && currentQuestion && <Text>{prevAnswer}</Text>}
      </RootView>
    );
  }
}
