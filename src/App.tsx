/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import '../gesture-handler';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {styles} from './config/theme/app-theme';
import {NavigationScreen} from './routes/NavigationScreen';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'black',
  },
};

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <NavigationScreen />
    </NavigationContainer>
  );
}

export default App;
