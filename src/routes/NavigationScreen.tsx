// In App.js in a new project

import {createStackNavigator} from '@react-navigation/stack';
import CalculatorScreen from '../presentation/screens/CalculatorScreen';
import SettingScreen from '../presentation/screens/SettingScreen';

const Stack = createStackNavigator();

export const NavigationScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={CalculatorScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};
