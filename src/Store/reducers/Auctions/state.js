import {
    GET_AUCTIONS_LAUCHED_FAILURE, GET_AUCTIONS_LAUCHED_RESPONSE, GET_AUCTIONS_LAUCHED_REQUEST,
    CREATE_OFFER_FAILURE, CREATE_OFFER_REQUEST, CREATE_OFFER_RESPONSE, RESET_OFFER_CREATED

} from './action';

const auctionsLaunchedInitialState = {
    list: [],
    error: null,
    isLoading: false
};

export const launches = (state = auctionsLaunchedInitialState, action) => {
    switch (action.type) {
        case GET_AUCTIONS_LAUCHED_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case GET_AUCTIONS_LAUCHED_RESPONSE:
            return {
                ...state,
                isLoading: false,
                list: action.list,
                error: null
            }
        case GET_AUCTIONS_LAUCHED_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}

const offerCreatedInitialState = {
    data: [],
    error: null,
    isLoading: false
};

export const offerCreated = (state = offerCreatedInitialState, action) => {
    switch (action.type) {
        case CREATE_OFFER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case CREATE_OFFER_RESPONSE:
            return {
                ...state,
                isLoading: false,
                data: action.offer,
                error: null
            }
        case CREATE_OFFER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case RESET_OFFER_CREATED: {
            return {
                ...state,
                data: action.offer,
                error:null
            }
        }
        default:
            return state;
    }
}