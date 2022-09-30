import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from './RootReducer';

const reducer = (state: any, action: any) => {
  return rootReducer(state, action);
};

const logger = createLogger();

let middleware: any[] = [];
middleware = [...middleware, thunk];

export const store = createStore(
  reducer,
  compose(applyMiddleware(...middleware, logger))
);
