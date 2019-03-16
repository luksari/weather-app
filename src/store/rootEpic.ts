import { combineEpics } from 'redux-observable';
import {fetchWeatherEpic, getMyLocationEpic} from '../actions/epics';

export default combineEpics(fetchWeatherEpic, getMyLocationEpic);