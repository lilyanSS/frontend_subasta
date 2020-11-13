import {GET_VEHICLES_FAILURE, GET_VEHICLES_RESPONSE, GET_VEHICLES_REQUEST,
CREATE_AUCTION_FAILURE, CREATE_AUCTION_RESPONSE, CREATE_AUCTION_REQUEST, RESET_AUCTION

} from './actions';

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
                vehicles: action.vehicles,
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

const auctionInitialState = {
    auction: [],
    error: null,
    isLoading: false
};

export const auction = (state = auctionInitialState, action) => {
    switch (action.type) {
        case CREATE_AUCTION_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case CREATE_AUCTION_RESPONSE:
            return {
                ...state,
                isLoading: false,
                auction: action.auction,
                error: null
            }
        case CREATE_AUCTION_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case RESET_AUCTION:{
            return{
                ...state,
                auction: action.auction
            }
        }    
        default:
            return state;
    }
}