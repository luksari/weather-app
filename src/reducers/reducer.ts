import { RootAction } from 'MyTypes';
import { WeatherModel } from 'MyModels';

import { combineReducers } from 'redux';
import { getType } from 'typesafe-actions';

import * as actions from '../actions/actions';

export type SandboxState = {
    isLoadingWeather: boolean;
    weather: WeatherModel;
};



export const weatherReducer = combineReducers<SandboxState, RootAction>({
    isLoadingWeather: (state = false, action) => {
        switch(action.type) {
            case getType(actions.fetchWeather.request):
                return true;
            case getType(actions.fetchWeather.success):
            case getType(actions.fetchWeather.failure):
                return false;
            default:
                return state;
        }
    },
    weather: (state = {} as WeatherModel, action) => {
        switch(action.type){
            case getType(actions.fetchWeather.success):
                return action.payload
            default:
                return state;
        }
    }
   
})