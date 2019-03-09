import { createAsyncAction } from 'typesafe-actions';
import { FETCH_WEATHER_BEGIN, FETCH_WEATHER_FAILURE, FETCH_WEATHER_SUCCESS } from './constants';
import { RootWeather } from 'MyModels';

export const fetchWeather = createAsyncAction(
    FETCH_WEATHER_BEGIN,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE
)<string, RootWeather, string>();



