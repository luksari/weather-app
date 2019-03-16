import { combineEpics } from 'redux-observable';

import * as epics from '../actions/epics';

export default combineEpics(...Object.values(epics));