import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './pages/home';
import BandersnatchScreen from './pages/bandersnatch';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Bandersnatch: {
      screen: BandersnatchScreen,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
