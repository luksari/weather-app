import { RootAction } from 'MyTypes';
import { LocationModel } from 'MyModels';
import { combineReducers } from 'redux';
import { getType } from 'typesafe-actions';

import * as locationActions from '../actions/locationActions';

export type SandboxState = {
    isLoadingLocation: boolean;
    location: LocationModel;
};

export const locationReducer = combineReducers<SandboxState, RootAction>({
    isLoadingLocation: (state = false, action) => {
        switch(action.type) {
            case getType(locationActions.getMyLocation.request):
                return true;
            case getType(locationActions.getMyLocation.success):
            case getType(locationActions.getMyLocation.failure):
                return false;
            default:
                return state;
        }
    },
    location: (state = {} as LocationModel, action) => {
        switch(action.type){
            case getType(locationActions.getMyLocation.failure):
                return {} as LocationModel;
            case getType(locationActions.getMyLocation.success):
                return action.payload
            default:
                return state;
        }
    }
})