import { combineReducers } from 'redux';
import { TestReducer } from './TestReducer';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const commonConfig = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['commonData'],
};
export const rootReducer = combineReducers({
  TestReducer: persistReducer(commonConfig, TestReducer),
});
