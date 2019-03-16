import { createAsyncAction, createStandardAction } from 'typesafe-actions';

import { FETCH_WEATHER_BEGIN, FETCH_WEATHER_FAILURE, FETCH_WEATHER_SUCCESS, SELECT_LOCATION, INVALIDATE_LOCATION } from './constants';
import { WeatherModel, ErrorModel, LocationModel } from 'MyModels';

export const fetchWeather = createAsyncAction(
    FETCH_WEATHER_BEGIN,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE
)<string, WeatherModel, ErrorModel>();

export const selectLocation = createStandardAction(SELECT_LOCATION)<LocationModel>();
export const invalidateLocation = createStandardAction(INVALIDATE_LOCATION)<LocationModel>();

