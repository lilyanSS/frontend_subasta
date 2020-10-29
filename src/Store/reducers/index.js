import { combineReducers } from 'redux';

import * as User from './user/state';
import * as Vehicles from './Admin/state';


// Root Reducer, needs a previous state and action
export const rootReducer = combineReducers({
    ...User,
    ...Vehicles
    
});
