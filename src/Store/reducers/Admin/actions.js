// Imports 
import axios from 'axios';
// App Imports
import { ROUTES } from '../../../constants/api_backend';
import { validUrl } from '../../../functions/validate';

export const GET_VEHICLES_REQUEST = "GET_VEHICLES_REQUEST";
export const GET_VEHICLES_RESPONSE = "GET_VEHICLES_RESPONSE";
export const GET_VEHICLES_FAILURE = "GET_VEHICLES_FAILURE";

export function getVehicles() {
    let route = validUrl(ROUTES.PROVIDER);
    return dispatch => {
        dispatch({
            type: GET_VEHICLES_REQUEST,
            isLoading: true
        });
        return axios.get(route.url)
            .then((response) => {
                dispatch({
                    type: GET_VEHICLES_RESPONSE,
                    vehicles: response.data,
                    isLoading: false
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_VEHICLES_FAILURE,
                    error: error
                })
            })
    }
}

export const CREATE_AUCTION_REQUEST = "CREATE_AUCTION_REQUEST";
export const CREATE_AUCTION_RESPONSE = "CREATE_AUCTION_RESPONSE";
export const CREATE_AUCTION_FAILURE = "CREATE_AUCTION_FAILURE";

export function createAuction({ session, base_price, id_vehicle,auction_date }) {
    let params = { session, base_price, id_vehicle,auction_date };
    let isJson = true;
    let route = validUrl(ROUTES.AUCTION, params, isJson);
    return dispatch => {
        dispatch({
            type: CREATE_AUCTION_REQUEST,
            isLoading: true
        });
        return axios.post(route.url, route.params, route.headers)
            .then((response) => {
                dispatch({
                    type: CREATE_AUCTION_RESPONSE,
                    auction: response.data,
                    isLoading: false
                })
            })
            .catch((error) => {
                dispatch({
                    type: CREATE_AUCTION_FAILURE,
                    error: error.response.data
                })
            })
    }
}

export const RESET_AUCTION = "RESET_AUCTION";
export const resetAuction = () => (dispatch) => {
    dispatch({
        type: RESET_AUCTION,
        auction: []
    })

}