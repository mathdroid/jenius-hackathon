import React, {Component} from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

export default class Reports extends Component {
  render() {
    return (
      <Container style={{backgroundColor: "black"}}>
        <Content padder>
          <Card >
            <CardItem header bordered>
              <Text>Net Worth</Text>
            </CardItem>
            <CardItem bordered style={{backgroundColor: "beige"}}>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
            <CardItem header bordered>
              <Text>Cash Flow</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  NativeBase is a free and open source framework that enable
                  developers to build
                  high-quality mobile apps using React Native iOS and Android
                  apps
                  with a fusion of ES6.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
