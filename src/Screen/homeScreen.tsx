import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { AwesTestReducer } = useSelector((state: any) => state);
  const onClick = () => {
    dispatch({ type: 'LIB_FIRST_SCREEN' });
    navigation.navigate('secondEdit');
  };

  console.log(AwesTestReducer.firstScreen || '');

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
