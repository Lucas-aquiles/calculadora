import React from 'react';
import {Pressable, Text, Vibration, PixelRatio, Dimensions} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';

interface Props {
  label?: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress?: () => void;
  useDataSave?: () => void;
  resultSave?: string;
}
const pixelRatio = PixelRatio.get();
const {width, height} = Dimensions.get('window'); // Obtener dimensiones de la pantalla

const SaveResult = ({
  label,
  color = colors.orange,
  doubleSize = false,
  blackText = false,
  onPress,
  useDataSave,
  resultSave,
}: Props) => {
  const handleLongPress = () => {
    Vibration.vibrate([50, 400, 1000]);
    if (onPress) {
      onPress();
    }
  };
  return (
    <Pressable
      onPress={useDataSave}
      onLongPress={handleLongPress}
      style={({pressed}) => ({
        ...styles.buttonAux,
        backgroundColor: colors.orange,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 0.2 * width : 0.14 * width,
        height: doubleSize ? 0.2 * width : 0.14 * width,
      })}>
      {resultSave !== '0' && (
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={{
            color: colors.lightGray,
            fontSize: 0.07 * width,
            position: 'absolute',
            top: -0.06 * height,
            left: 0,
            right: 0,
            textAlign: 'center',
          }}>
          {resultSave}
        </Text>
      )}
      <Text
        style={{
          ...styles.buttonText,
          color: blackText ? 'black' : 'white',
          fontWeight: '400',
          fontSize: 0.04 * height,
        }}>
        {label}
      </Text>
    </Pressable>
  );
};

export default SaveResult;
