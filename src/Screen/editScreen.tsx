import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export const EditScreen = () => {
  return (
    <View>
      <Text>this is edit screen</Text>
      <TextInput style={styleSheet.inputContainer} />
    </View>
  );
};

const styleSheet = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: 'red',
    width: 0.8 * width,
    color: 'white',
  },
});
