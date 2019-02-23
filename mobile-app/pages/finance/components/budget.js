import React, { Component } from 'react';
import { Container, Text, Header } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class Budget extends Component {
  render() {
    return (
      <Container>
          <Grid>
            <Col style={{ backgroundColor: '#635DB7', width: 105, height: 200 }}>
            <Text>Pengeluaran</Text></Col>
            <Col style={{ backgroundColor: '#00CE9F', width: 90, height: 200 }}>
            <Text>Dianggarkan</Text></Col>
            <Col style={{ backgroundColor: '#635DB7', height: 200 }}>
            <Text>Keluar</Text></Col>
            <Col style={{ backgroundColor: '#00CE9F', height: 200 }}>
            <Text>Sisa</Text></Col>

          </Grid>
      </Container>
    );
  }
}
