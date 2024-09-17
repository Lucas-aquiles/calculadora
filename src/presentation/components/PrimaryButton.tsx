import React from 'react';
import {Pressable, Text, View, PixelRatio, Dimensions} from 'react-native';
import {styles, colors} from '../../config/theme/app-theme';

interface PropsPrimaryButton {
  onPress: () => void;
  label?: string;
}
const pixelRatio = PixelRatio.get();
const {width, height} = Dimensions.get('window'); // Obtener dimensiones de la pantalla

const PrimaryButton = ({onPress, label}: PropsPrimaryButton) => {
  return (
    <View
      style={{
        backgroundColor: colors.lightGray,
        width: 0.15 * width,
        borderRadius: 100,
        height: 0.15 * width,
        justifyContent: 'center',
        marginTop: 5 * pixelRatio,
        marginRight: 5 * pixelRatio,
      }}>
      <Pressable onPress={() => onPress()}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontWeight: '400',
            fontSize: 0.04 * width,
          }}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
