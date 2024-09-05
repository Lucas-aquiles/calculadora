import React from 'react';
import {Pressable, Text, Alert} from 'react-native';
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

const SaveResult = ({
  label,
  color = colors.orange,
  doubleSize = false,
  blackText = false,
  onPress,
  useDataSave,
  resultSave,
}: Props) => {
  return (
    <Pressable
      onPress={useDataSave}
      onLongPress={onPress}
      style={({pressed}) => ({
        ...styles.buttonAux,
        backgroundColor: color,
        opacity: pressed ? 0.8 : 1,
        width: doubleSize ? 160 : 60,
      })}>
      {resultSave !== '0' && (
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={{
            color: colors.lightGray,
            fontSize: 20,
            position: 'absolute',
            top: -30,
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
        }}>
        {label}
      </Text>
    </Pressable>
  );
};

export default SaveResult;
