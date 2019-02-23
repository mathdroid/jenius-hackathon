import React, { Component } from 'react';
import { Animated, Easing, View } from 'react-native';

import { RootView, Button, InterText, TextContainer } from './components';
import Animation from './components/animation';
import FontLoader from './components/font-loader';

import lottieRocket from './lottie-rocket.json';
import questions from './questions.json';

class QuestionContainer extends Component {
  state = {
    showAnswers: false,
  };

  showAnswers = () => {
    this.setState({ showAnswers: true });
  };

  randomizeChoice = () => {
    const { question } = this.props;
    this.chooseAnswer(question.A[Math.floor(Math.random() * question.A.length)]);
  };

  chooseAnswer = q => () => {
    const { changeQuestion } = this.props;
    this.setState({ showAnswers: false });
    changeQuestion(q);
  };

  render() {
    const { question, finish } = this.props;
    const { showAnswers } = this.state;
    return (
      <>
        <TextContainer>
          <InterText>{question.Q}</InterText>
        </TextContainer>
        <View>
          {showAnswers ? (
            question.A.map((q, i) => (
              <Button
                key={q.label}
                title={q.label}
                color={`hsl(${120 + (i - 0.5) * 60}, 83%, 60%)`}
                onPress={this.chooseAnswer(q)}
              />
            ))
          ) : (
            <Button
              title={question.isFinished ? 'Lihat hasil' : 'Pilih jawaban'}
              onPress={question.isFinished ? finish : this.showAnswers}
            />
          )}
        </View>
      </>
    );
  }
}

class BandersnatchPage extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#16161D',
      shadowColor: 'transparent',
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',
  };

  state = {
    isQuizStarted: false,
    isQuizFinished: false,
    rocketProgress: new Animated.Value(0),
    question: null,
    disableButtonPress: false,
    score: 0,
  };

  reset = () => {
    this.setState({
      isQuizStarted: false,
      isQuizFinished: false,
      rocketProgress: new Animated.Value(0),
      question: null,
      disableButtonPress: false,
      score: 0,
    });
  };

  componentDidMount() {
    const { rocketProgress } = this.state;
    Animated.timing(rocketProgress, {
      toValue: 0.75,
      duration: 2500,
      easing: Easing.linear,
    }).start();
  }

  startQuiz = () => {
    const { rocketProgress } = this.state;
    this.setState({ disableButtonPress: true });

    Animated.timing(rocketProgress, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
    }).start(() => {
      this.setState({ isQuizStarted: true, question: questions.question });
    });
  };

  finishQuiz = () => {
    this.setState({ isQuizFinished: true });
  };

  changeQuestion = q => {
    this.setState(state => ({
      question: q.nextQ || { Q: 'Finished', isFinished: true },
      score: state.score + q.score,
    }));
  };

  render() {
    const {
      rocketProgress,
      isQuizStarted,
      question,
      disableButtonPress,
      isQuizFinished,
      score,
    } = this.state;
    return (
      <FontLoader
        fonts={{
          'inter-bold': require('../../assets/fonts/Inter-Bold.ttf'),
          'inter-regular': require('../../assets/fonts/Inter-Regular.ttf'),
          'inter-extralight': require('../../assets/fonts/Inter-ExtraLight-BETA.ttf'),
        }}
      >
        <RootView>
          {isQuizStarted ? (
            isQuizFinished ? (
              <InterText>{score}</InterText>
            ) : question ? (
              <QuestionContainer
                question={question}
                changeQuestion={this.changeQuestion}
                finish={this.finishQuiz}
              />
            ) : null
          ) : (
            <>
              <Animation
                source={lottieRocket}
                progress={rocketProgress}
                style={{
                  flex: 1,
                }}
              />
              <InterText flex={1} ta="center">
                Hi. I wanna play a game
              </InterText>
              <Button disabled={disableButtonPress} onPress={this.startQuiz} title="Mulai kuis" />
            </>
          )}
        </RootView>
      </FontLoader>
    );
  }
}

export default BandersnatchPage;
