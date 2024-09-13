import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles, colors} from '../../config/theme/app-theme';

interface PropsPrimaryButton {
  onPress: () => void;
  label?: string;
}

const PrimaryButton = ({onPress, label}: PropsPrimaryButton) => {
  return (
    <View
      style={{
        backgroundColor: colors.lightGray,
        width: 50,
        borderRadius: 100,
        height: 50,
        justifyContent: 'center',
        marginTop: 20,
        marginRight: 20,
      }}>
      <Pressable onPress={() => onPress()}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontWeight: '400',
          }}>
          {label}{' '}
        </Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
