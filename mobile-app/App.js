import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './pages/home';
import FinanceScreen from './pages/finance';
import BandersnatchScreen from './pages/bandersnatch';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Finance: {
      screen: FinanceScreen,
    },
    Bandersnatch: {
      screen: BandersnatchScreen,
    },
  },
  {
    initialRouteName: 'Bandersnatch',
  },
);

export default createAppContainer(AppNavigator);
