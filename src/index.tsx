import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './Screen/homeScreen';
import { EditScreen } from './Screen/editScreen';

const SecondCustomAPP = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Screen name="secondHome" component={HomeScreen} />
      <Stack.Screen name="secondEdit" component={EditScreen} />
    </>
  );
};

export default SecondCustomAPP;
