import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import { GET_LOCATION_BEGIN, GET_LOCATION_FAILURE, GET_LOCATION_SUCCESS, SELECT_LOCATION } from './constants';

export const getMyLocation = createAsyncAction(
    GET_LOCATION_BEGIN,
    GET_LOCATION_SUCCESS,
    GET_LOCATION_FAILURE
)<undefined, Position, string>();

export const selectLocation = createStandardAction(SELECT_LOCATION)<Position|string>();

