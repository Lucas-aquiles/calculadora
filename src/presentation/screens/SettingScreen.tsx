import React from 'react';
import {Linking, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../config/theme/app-theme';
import PrimaryButton from '../components/PrimaryButton';
import {useNavigation} from '@react-navigation/native';

const SettingScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Reemplaza la URL con la dirección a la que deseas redirigir
    Linking.openURL('https://rootsoftware.com.ar/politicas');
  };

  return (
    <View style={styles.background}>
      <View
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-start',
        }}>
        <PrimaryButton
          onPress={() => navigation.navigate('Home' as never)}
          label="Back"
        />
      </View>
      <View style={{marginHorizontal: 'auto', marginVertical: 40}}>
        <TouchableOpacity onPress={handlePress}>
          <Text
            style={{
              color: 'white',
              fontSize: 22,
            }}>
            Politicas de Privacidad
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;
