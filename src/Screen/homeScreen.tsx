import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>this is home screen</Text>
      <TextInput style={styleSheet.inputContainer} />
      <Button
        title="GoNext"
        onPress={() => navigation.navigate('secondEdit')}
      />
    </View>
  );
};

const styleSheet = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
});
