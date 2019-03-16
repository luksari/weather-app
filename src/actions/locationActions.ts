import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import { SELECT_LOCATION, INVALIDATE_LOCATION, REQUEST_MY_LOCATION, RECEIVE_MY_LOCATION, REJECT_MY_LOCATION } from './constants';
import { LocationModel } from 'MyModels';

export const getMyLocation = createAsyncAction(
    REQUEST_MY_LOCATION,
    RECEIVE_MY_LOCATION,
    REJECT_MY_LOCATION
)<undefined, LocationModel, string>();

export const selectLocation = createStandardAction(SELECT_LOCATION)<LocationModel>();
export const invalidateLocation = createStandardAction(INVALIDATE_LOCATION)<LocationModel>();
