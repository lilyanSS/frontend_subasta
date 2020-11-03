import {GET_AUCTIONS_LAUCHED_FAILURE, GET_AUCTIONS_LAUCHED_RESPONSE, GET_AUCTIONS_LAUCHED_REQUEST} from './action';

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