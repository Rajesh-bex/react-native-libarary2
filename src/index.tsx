import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './Screen/homeScreen';
import { EditScreen } from './Screen/editScreen';
import { Provider } from 'react-redux';
import { persister, store } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

const SecondCustomAPP = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Stack.Navigator>
          <Stack.Screen name="secondHome" component={HomeScreen} />
          <Stack.Screen name="secondEdit" component={EditScreen} />
        </Stack.Navigator>
      </PersistGate>
    </Provider>
  );
};

export default SecondCustomAPP;
