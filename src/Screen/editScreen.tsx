import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';

const { width } = Dimensions.get('screen');

export const EditScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>this is edit screen</Text>
      <TextInput style={styleSheet.inputContainer} />
      <Button title={'Go pro'} onPress={() => navigation.navigate('Home')} />
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
