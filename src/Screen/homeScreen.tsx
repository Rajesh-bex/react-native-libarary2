import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { commonData } = useSelector((state: any) => state.TestReducer);
  const { name } = commonData;

  const onClick = () => {
    dispatch({ type: 'LIB_FIRST_SCREEN' });
    navigation.navigate('secondEdit');
  };

  return (
    <View>
      <Text>this is home screen{+' ' + name}</Text>
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
