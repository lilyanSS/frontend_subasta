import { combineReducers } from 'redux';

import * as User from './user/state'


// Root Reducer, needs a previous state and action
export const rootReducer = combineReducers({
    ...User
});
