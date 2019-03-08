/// <reference path="../store/types.d.ts"/>
/// <reference path="../services/types.d.ts"/>
import { RootAction, RootState, Services } from 'MyTypes';

import { createStore, applyMiddleWare} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';
import services from '../services';
import { compose } from 'redux';

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({
  dependencies: services,
});

const middlewares = [epicMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));

// rehydrate state on app start
const initialState = {};

// create store
const store = createStore(rootReducer, initialState, enhancer);

epicMiddleware.run(rootEpic);

// export store singleton instance
export default store;