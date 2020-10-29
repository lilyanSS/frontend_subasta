import {GET_VEHICLES_FAILURE, GET_VEHICLES_RESPONSE, GET_VEHICLES_REQUEST} from './actions';

const vehiclesInitialState = {
    vehicles: [],
    error: null,
    isLoading: false
};

export const vehicles = (state = vehiclesInitialState, action) => {
    switch (action.type) {
        case GET_VEHICLES_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case GET_VEHICLES_RESPONSE:
            return {
                ...state,
                isLoading: false,
                vehicles: action.vehicles.results,
                error: null
            }
        case GET_VEHICLES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}