import { createMaterialTopTabNavigator } from 'react-navigation';

import FinanceBudgetScreen from './budget';
import FinanceReportsScreen from './reports';

const TabNavigator = createMaterialTopTabNavigator(
  {
    Budget: FinanceBudgetScreen,
    Reports: FinanceReportsScreen,
  },
  {
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: 'magenta',
      },
      labelStyle: {
        fontSize: 12,
      },
      tabStyle: {
        width: 100,
      },
      style: {
        backgroundColor: '#000',
      },
    },
  },
);

export default TabNavigator;
