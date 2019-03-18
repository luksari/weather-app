import { RootAction } from 'MyTypes';
import { combineReducers } from 'redux';
import { getType } from 'typesafe-actions';

import {getMyLocation} from '../actions/locationActions';

export type locationState = {
    position: Position;
    error: boolean;
};

export const locationReducer = combineReducers<locationState, RootAction>({
    position: (state = {} as Position, action) => {
        switch(action.type){
            case getType(getMyLocation.success):
                return action.payload;
            default:
                return state;
        }
    },
    error: (state = false, action) => {
        switch(action.type){
            case getType(getMyLocation.failure):
                return true;
            default:
                return state;
        }
    }
})