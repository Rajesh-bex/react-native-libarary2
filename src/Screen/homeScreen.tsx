import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';

export const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch({ type: 'FIRST_SCREEN' });
    navigation.navigate('secondEdit');
  };
  return (
    <View>
      <Text>this is home screen</Text>
      <TextInput style={styleSheet.inputContainer} />
      <Button title="GoNext" onPress={() => onClick()} />
    </View>
  );
};

const styleSheet = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
});
