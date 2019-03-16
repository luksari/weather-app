import { RootAction, RootState, Services } from 'MyTypes';
import { createStore, applyMiddleware} from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';
import services from '../services';
import { composeWithDevTools } from 'redux-devtools-extension';



export const epicMiddleware = createEpicMiddleware<
  RootAction,
  RootAction,
  RootState,
  Services
>({
  dependencies: services,
});


const enhancer = composeWithDevTools(
  applyMiddleware(epicMiddleware));

// create store
const store = createStore(rootReducer, enhancer);

epicMiddleware.run(rootEpic); 

// export store singleton instancey
export default store;