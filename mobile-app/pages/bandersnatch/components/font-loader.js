import React, { Component } from 'react';
import { Font } from 'expo';
import { Animated, Easing } from 'react-native';

import { RootView } from './index';
import Animation from './animation';
import loaderAnimation from './lottie-loader.json';

class FontLoader extends Component {
  state = {
    progress: new Animated.Value(0),
    isLoaded: false,
    shouldStopAnimating: false,
  };

  async componentDidMount() {
    const { fonts } = this.props;
    this.startAnimation();
    await Font.loadAsync(fonts);
    this.setState({ isLoaded: true });
  }

  startAnimation = () => {
    const { progress } = this.state;
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
    }).start(this.onAnimationFinish);
  };

  onAnimationFinish = () => {
    const { isLoaded } = this.state;
    if (isLoaded) {
      this.setState({ shouldStopAnimating: true });
    } else {
      this.startAnimation();
    }
  };

  render() {
    const { children } = this.props;
    const { isLoaded, shouldStopAnimating, progress } = this.state;

    return isLoaded && shouldStopAnimating ? (
      children
    ) : (
      <RootView>
        <Animation source={loaderAnimation} loop={false} progress={progress} />
      </RootView>
    );
  }
}

export default FontLoader;
