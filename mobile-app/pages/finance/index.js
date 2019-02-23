import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import FinanceBudgetScreen from './budget';
import FinanceReportsScreen from './reports';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../assets/splash.png')}
        style={{ height: 64, resizeMode: 'contain' }}
      />
    );
  }
}

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
  headerTitle: <LogoTitle />,
};
export default TabNavigator;
