import { combineEpics } from 'redux-observable';

import * as todosEpics from '../actions/epics';

export default combineEpics(...Object.values(todosEpics));