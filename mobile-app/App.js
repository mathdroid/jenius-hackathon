import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './pages/home';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);
