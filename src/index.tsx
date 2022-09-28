import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './Screen/homeScreen';
import { EditScreen } from './Screen/editScreen';

const SecondCustomAPP = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="secondHome" component={HomeScreen} />
      <Stack.Screen name="secondEdit" component={EditScreen} />
    </Stack.Navigator>
  );
};

export default SecondCustomAPP;
