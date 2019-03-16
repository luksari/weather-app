import { combineReducers } from 'redux';

import { weatherReducer } from '../reducers/weatherReducer';
import { locationReducer } from '../reducers/locationReducer';

const rootReducer = combineReducers({
    weatherReducer,
    locationReducer,
});

export default rootReducer;