import { fetchWeather } from './actions';
import { Epic } from 'redux-observable';

const fetchWeatherFlow: Epic<RootAction, RootAction>