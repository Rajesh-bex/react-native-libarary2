import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { AwsfirstScreen } = useSelector((state: any) => state.TestReducer);
  const onClick = () => {
    dispatch({ type: 'AWS_FIRST_SCREEN' });
    navigation.navigate('secondEdit');
  };

  console.log(AwsfirstScreen);

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
