// In App.js in a new project

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CalculatorScreen from '../presentation/screens/CalculatorScreen';
import SettingScreen from '../presentation/screens/SettingScreen';

const Stack = createNativeStackNavigator();

export const NavigationScreen = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={CalculatorScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};
