import React from 'react';
import { Text, ScrollView, Image, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

const PaneWrapper = styled(View)`
  flex: 1;
  align-self: stretch;
  background-color: white;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  margin: 4px 0;
  border-top-width: 2px;
  border-color: rgb(0, 164, 222);
`;

const PaneTitle = styled(View)`
  border-bottom-width: 1px;
  border-color: rgba(200, 200, 200, 1);
  padding: 16px;
`;

const PaneMenuItem = styled(View)`
  border-bottom-width: 1px;
  border-color: rgba(200, 200, 200, 1);
  padding: 16px;
`;

const CardText = styled(Text)`
  font-size: 16px;
  ${props => props.bold && 'font-weight: bold;'}
`;

const Pane = ({ title, menu = [] }) => (
  <PaneWrapper>
    <PaneTitle>
      <CardText bold>{title}</CardText>
    </PaneTitle>
    {menu.map(({ icon, label, cta }) => (
      <PaneMenuItem key={label}>
        <Image source={icon} />
        <CardText>
          {label} {cta} {JSON.stringify(icon)}
        </CardText>
      </PaneMenuItem>
    ))}
  </PaneWrapper>
);

export default Pane;
