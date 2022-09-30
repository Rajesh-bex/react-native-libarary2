import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './Screen/homeScreen';
import { EditScreen } from './Screen/editScreen';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

const SecondCustomAPP = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name="secondHome" component={HomeScreen} />
        <Stack.Screen name="secondEdit" component={EditScreen} />
      </Stack.Navigator>
    </Provider>
  );
};

export default SecondCustomAPP;
