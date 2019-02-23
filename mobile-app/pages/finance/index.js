import { createMaterialTopTabNavigator } from 'react-navigation';

import FinanceBudgetScreen from './budget';
import FinanceReportsScreen from './reports';

const TabNavigator = createMaterialTopTabNavigator({
  Budget: FinanceBudgetScreen,
  Reports: FinanceReportsScreen,
});

export default TabNavigator;
