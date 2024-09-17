import React from 'react';
import {Pressable, Text, PixelRatio, Dimensions} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress?: () => void;
}
const {width, height} = Dimensions.get('window'); // Obtener dimensiones de la pantalla

const pixelRatio = PixelRatio.get();

const CalculatorBottom = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  blackText = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => ({
        ...styles.button,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 0.45 * width : 0.2 * width,
      })}>
      <Text
        style={{...styles.buttonText, color: blackText ? 'black' : 'white'}}>
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorBottom;
