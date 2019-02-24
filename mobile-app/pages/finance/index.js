import React from 'react';
import styled from 'styled-components/native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Logo from '../../assets/splash.png';
import FinanceBudgetScreen from './budget';
import FinanceReportsScreen from './reports';

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

const TabNavigator = createMaterialTopTabNavigator(
  {
    Budget: FinanceBudgetScreen,
    Reports: FinanceReportsScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;

        switch (routeName) {
          case 'Budget': {
            return <Icon name="md-wallet" size={25} color={tintColor} />;
          }
          case 'Reports': {
            return <Icon name="md-stats" size={25} color={tintColor} />;
          }
          default: {
            return <Icon name="md-wallet" size={25} color={tintColor} />;
          }
        }
        // You can return any component that you like here!
      },
    }),
    tabBarOptions: {
      showIcon: true,
      showLabel: false,
      indicatorStyle: {
        backgroundColor: 'magenta',
      },
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        width: 100,
        height: 64,
      },
      style: {
        backgroundColor: '#000',
      },
      activeTintColor: 'magenta',
      inactiveTintColor: '#ddd',
    },
  },
);

TabNavigator.navigationOptions = {
  headerStyle: {
    backgroundColor: '#000',
    shadowColor: 'transparent',
    borderBottomWidth: 0,
  },
  headerTintColor: '#ddd',
  headerRight: (
    <ImageWrapper aspectRatio={1.88}>
      <StyledImage source={Logo} />
    </ImageWrapper>
  ),
};
export default TabNavigator;
