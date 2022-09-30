import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const { width } = Dimensions.get('screen');

export const EditScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const { secondScreen } = useSelector((state: any) => state.CommonTestReducer);
  const onClick = () => {
    dispatch({ type: 'LIB_SECOND_SCREEN' });
    dispatch({ type: 'SECOND_SCREEN' });
    navigation.navigate('Home');
  };
  console.log(secondScreen, 'firstScreen');
  return (
    <View>
      <Text>this is edit screen</Text>
      <TextInput style={styleSheet.inputContainer} />
      <Button title={'Go pro'} onPress={() => onClick()} />
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
