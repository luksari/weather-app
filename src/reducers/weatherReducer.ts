import { RootAction } from 'MyTypes';
import { WeatherModel, ErrorModel } from 'MyModels';
import { combineReducers } from 'redux';
import { getType } from 'typesafe-actions';

import * as weatherActions from '../actions/weatherActions';

export type weatherState = {
    isLoadingWeather: boolean;
    weather: WeatherModel;
    error: ErrorModel
};

export const weatherReducer = combineReducers<weatherState, RootAction>({
    isLoadingWeather: (state = false, action) => {
        switch(action.type) {
            case getType(weatherActions.fetchWeather.request):
                return true;
            case getType(weatherActions.fetchWeather.success):
            case getType(weatherActions.fetchWeather.failure):
                return false;
            default:
                return state;
        }
    },
    weather: (state = {} as WeatherModel, action) => {
        switch(action.type){
            case getType(weatherActions.fetchWeather.failure):
                return {} as WeatherModel;
            case getType(weatherActions.fetchWeather.success):
                return action.payload
            default:
                return state;
        }
    },

    error: (state = {} as ErrorModel, action) => {
        switch(action.type){
            case getType(weatherActions.fetchWeather.failure):
                return action.payload;
            case getType(weatherActions.fetchWeather.success):
                return {} as ErrorModel;
            default: return state;
        }
    }
   
})