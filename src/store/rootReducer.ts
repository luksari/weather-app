import { combineReducers } from 'redux';

import { weatherReducer } from '../reducers/reducer';

const rootReducer = combineReducers({
    weatherReducer: weatherReducer
});

export default rootReducer;