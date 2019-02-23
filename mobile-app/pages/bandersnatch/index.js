import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import TimedInput from '../../components/TimedInput';

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
      hello: undefined,
    };
  }
  render() {
    return (
      <RootView>
        <TimedInput
          question="Question 1"
          answers={['answer1', 'answer2']}
          pressHandler={key => {
            this.setState({ hello: key });
          }}
        />
        {this.state.hello && <Text>{this.state.hello}</Text>}
      </RootView>
    );
  }
}
