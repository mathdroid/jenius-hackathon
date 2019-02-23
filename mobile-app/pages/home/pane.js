import React from 'react';
import { Text, Image, View } from 'react-native';
import styled from 'styled-components/native';
import Button from '../../components/Button';

const PaneWrapper = styled(View)`
  display: flex;
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
  border-color: rgb(237, 237, 237);
  padding: 16px;
`;

const PaneMenuItem = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-color: rgb(237, 237, 237);
  padding: 16px;
`;

const MenuView = styled(View)`
  display: flex;
  flex-direction: column;
`;

const CardText = styled(Text)`
  margin-bottom: ${props => (props.subheading ? '8px' : 0)};
  font-size: ${props => (props.subheading ? 14 : 16)};

  color: ${props => (props.bold ? 'rgb(125, 125, 125)' : 'rgb(165, 165, 165)')};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`;

const MenuIcon = styled(Image)`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  resize-mode: contain;
`;

const Pane = ({ title, menu = [] }) => (
  <PaneWrapper>
    <PaneTitle>
      <CardText bold>{title}</CardText>
    </PaneTitle>
    {menu.map(({ icon, label, cta, onCta }) => (
      <PaneMenuItem key={label}>
        <MenuIcon source={icon} />
        <MenuView>
          <CardText subheading>{label}</CardText>
          <Button title={cta} onPress={onCta} />
        </MenuView>
      </PaneMenuItem>
    ))}
  </PaneWrapper>
);

export default Pane;
