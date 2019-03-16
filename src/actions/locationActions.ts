import { createAsyncAction } from 'typesafe-actions';
import { GET_LOCATION_BEGIN, GET_LOCATION_FAILURE, GET_LOCATION_SUCCESS } from './constants';

export const getMyLocation = createAsyncAction(
    GET_LOCATION_BEGIN,
    GET_LOCATION_SUCCESS,
    GET_LOCATION_FAILURE
)<undefined, Position, string>();

