/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import {styles} from './config/theme/app-theme';
import {NavigationScreen} from './routes/NavigationScreen';

function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.background}>
        <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
        <CalculatorScreen />
      </View> */}
      <NavigationScreen />
    </NavigationContainer>
  );
}

export default App;
