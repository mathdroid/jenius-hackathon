import React, { Component } from 'react';
import styled from 'styled-components/native';
import { Animated, Easing, View, AsyncStorage, Image } from 'react-native';

import { RootView, Button, InterText, TextContainer, CountdownBar } from './components';
import Animation from './components/animation';
import FontLoader from './components/font-loader';

import Logo from '../../assets/splash.png';
import lottieRocket from './lottie-rocket.json';
import lottieFinished from './lottie-finished.json';
import lottieSuccess from './lottie-success.json';
import questions from './questions.json';

const ImageWrapper = styled(View)`
  margin-top: 5px;
  margin-bottom: 5px;
  align-self: stretch;
  width: 100%;
  aspect-ratio: ${props => props.aspectRatio || 1};
`;

const StyledImage = styled(Image)`
  flex: 1;
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;

class LogoTitle extends React.Component {
  render() {
    return (
      <ImageWrapper aspectRatio={1.88}>
        <StyledImage source={Logo} />
      </ImageWrapper>
    );
  }
}

class Lottie extends Component {
  state = {
    progress: new Animated.Value(this.props.start || 0),
  };
  componentDidMount() {
    const { duration } = this.props;
    const { progress } = this.state;
    Animated.timing(progress, {
      toValue: 1,
      duration,
      easing: Easing.linear,
    }).start();
  }

  render() {
    const { source } = this.props;
    const { progress } = this.state;
    return <Animation source={source} progress={progress} />;
  }
}

class QuestionContainer extends Component {
  initialState = {
    showAnswers: false,
    countdownStart: null,
    remainingTime: 5000,
  };

  animationFrame = null;

  state = this.initialState;

  componentWillUnmount() {
    this.clearStep();
  }

  startStep = () => {
    this.animationFrame = requestAnimationFrame(this.step);
  };

  clearStep = () => {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  };

  showAnswers = () => {
    this.setState({ showAnswers: true }, this.startStep);
  };

  step = timestamp => {
    const { duration = 5000 } = this.props;
    const { countdownStart } = this.state;
    if (!countdownStart) {
      this.setState({ countdownStart: timestamp }, this.startStep);
    } else {
      const remainingTime = countdownStart - timestamp + duration;
      if (remainingTime >= 0) {
        this.setState(() => ({ remainingTime }), this.startStep);
      } else {
        this.setState({ remainingTime: 0 }, () => {
          this.randomizeChoice();
          this.clearStep();
        });
      }
    }
  };

  randomizeChoice = () => {
    const { question } = this.props;
    this.chooseAnswer(question.A[Math.floor(Math.random() * question.A.length)])();
  };

  chooseAnswer = q => () => {
    const { changeQuestion } = this.props;
    this.setState(this.initialState, this.clearStep);
    changeQuestion(q);
  };

  render() {
    const { question, finish, duration = 5000 } = this.props;
    const { showAnswers, remainingTime } = this.state;
    return (
      <>
        {question.isFinished ? <Lottie source={lottieFinished} duration={2000} /> : null}
        <TextContainer>
          <InterText>
            {question.isFinished ? 'Selamat! Anda telah menyelesaikan Flexi Quiz!' : question.Q}
          </InterText>
        </TextContainer>
        <View>
          {showAnswers ? (
            <>
              <CountdownBar progress={(100 * remainingTime) / duration} />
              {question.A.map((q, i) => (
                <Button
                  key={q.label}
                  title={q.label}
                  colorTo={`hsl(${120 + (i - 0.5) * 180}, 83%, 60%)`}
                  onPress={this.chooseAnswer(q)}
                />
              ))}
            </>
          ) : (
            <Button
              title={question.isFinished ? 'Lihat hasil' : 'Lihat pilihan'}
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
    headerRight: <LogoTitle />,
  };

  state = {
    isQuizStarted: false,
    isQuizFinished: false,
    rocketProgress: new Animated.Value(0),
    question: null,
    disableButtonPress: false,
    score: 0,
  };

  reset = async () => {
    await AsyncStorage.multiRemove(['@bandersnatch/question', '@bandersnatch/score']);
    this.setState({
      isQuizStarted: false,
      isQuizFinished: false,
      rocketProgress: new Animated.Value(0),
      question: null,
      disableButtonPress: false,
      score: 0,
    });
  };

  async componentDidMount() {
    const { rocketProgress } = this.state;
    const [question, score] = (await Promise.all([
      AsyncStorage.getItem('@bandersnatch/question'),
      AsyncStorage.getItem('@bandersnatch/score'),
    ])).map(JSON.parse);
    this.setState({ question: question || questions.question, score: score || 0 });
    Animated.timing(rocketProgress, {
      toValue: 0.75,
      duration: 3500,
      easing: Easing.linear,
    }).start();
  }

  startQuiz = async () => {
    const { rocketProgress } = this.state;
    this.setState({ disableButtonPress: true });

    Animated.timing(rocketProgress, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
    }).start(() => {
      this.setState({ isQuizStarted: true });
    });
  };

  finishQuiz = () => {
    this.setState({ isQuizFinished: true });
  };

  changeQuestion = q => {
    const nextQ = q.nextQ || { Q: 'Finished', isFinished: true };
    this.setState(
      state => ({
        question: nextQ,
        score: state.score + q.score,
      }),
      async () => {
        const { score } = this.state;
        await Promise.all([
          AsyncStorage.setItem('@bandersnatch/question', JSON.stringify(nextQ)),
          AsyncStorage.setItem('@bandersnatch/score', JSON.stringify(score)),
        ]);
      },
    );
  };

  render() {
    const { navigation } = this.props;
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
              <>
                <TextContainer>
                  <InterText>
                    {score >= 1.5
                      ? `Selamat! Anda telah berhasil menyelesaikan Flexi Quiz dengan skor sangat baik! Mulai sekarang anda berhak mengajukan pinjaman dengan batas atas Rp 14,000,000,-`
                      : `Selamat! Anda telah menyelesaikan Flexi Quiz. Mulai sekarang anda berhak mengajukan pinjaman dengan batas atas Rp 8,000,000,-`}
                  </InterText>
                </TextContainer>
                <Lottie source={lottieSuccess} duration={7500} />
                <View>
                  <Button
                    onPress={async () => {
                      await this.reset();
                      navigation.goBack();
                      navigation.navigate('Bandersnatch');
                    }}
                    title="Ulang"
                  />
                  <Button
                    onPress={() => {
                      navigation.goBack();
                      navigation.navigate('Finance');
                      navigation.navigate('Budget');
                    }}
                    title="Buat rencana keuangan"
                  />
                </View>
              </>
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
                Halo! Selamat datang di Flexi Quiz. Sebelum anda bisa mengajukan pinjaman melalui
                FlexiCash, anda harus menjawab sejumlah soal cerita yang banyak kaitannya dengan
                kehidupan finansial sehari-hari. Selamat Mengerjakan!
              </InterText>
              <Button
                disabled={disableButtonPress}
                onPress={this.startQuiz}
                title={
                  question && question.Q !== questions.question.Q ? 'Lanjutkan kuis' : 'Mulai kuis'
                }
              />
            </>
          )}
        </RootView>
      </FontLoader>
    );
  }
}

export default BandersnatchPage;
