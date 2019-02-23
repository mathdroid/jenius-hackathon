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
      currentQuestion: undefined,
      prevAnswer: undefined,
      score: 0,
    };
  }

  componentDidMount() {
    this.setState({
      currentQuestion: questions.question,
    });
  }

  render() {
    const { currentQuestion, prevAnswer, score } = this.state;
    return (
      <RootView>
        {currentQuestion && (
          <TimedInput
            question={currentQuestion.Q}
            answers={currentQuestion.A}
            pressHandler={key => {
              this.setState(prevState => ({
                prevAnswer: key.label,
                score: prevState.score + key.score,
                currentQuestion: key.nextQ ? key.nextQ : undefined,
              }));
            }}
          />
        )}
        <Text>Score: {score}</Text>
        {prevAnswer && currentQuestion && <Text>{prevAnswer}</Text>}
      </RootView>
    );
  }
}
