import { RootAction } from 'MyTypes';
import { RootWeather } from 'MyModels';

import { combineReducers } from 'redux';
import { getType } from 'typesafe-actions';

import * as actions from '../actions/actions';

export type SandboxState = Readonly<{
    isLoadingWeather: boolean;
    weather: RootWeather;
}>;

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
weather: (state = undefined, action) => {
        switch(action.type){
            case getType(actions.fetchWeather.success):
                return action.payload;
            default: 
                return state;
        }
    }
})