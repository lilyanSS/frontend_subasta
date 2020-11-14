// Imports 
import axios from 'axios';
// App Imports
import { ROUTES } from '../../../constants/api_backend';
import { validUrl } from '../../../functions/validate';

export const GET_AUCTIONS_LAUCHED_REQUEST = "GET_AUCTIONS_LAUCHED_REQUEST";
export const GET_AUCTIONS_LAUCHED_RESPONSE = "GET_AUCTIONS_LAUCHED_RESPONSE";
export const GET_AUCTIONS_LAUCHED_FAILURE = "GET_AUCTIONS_LAUCHED_FAILURE";

export function getList() {
    let route = validUrl(ROUTES.AUCTIONS_LAUCHED);
    return dispatch => {
        dispatch({
            type: GET_AUCTIONS_LAUCHED_REQUEST,
            isLoading: true
        });
        return axios.get(route.url)
            .then((response) => {
                dispatch({
                    type: GET_AUCTIONS_LAUCHED_RESPONSE,
                    list: response.data,
                    isLoading: false
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_AUCTIONS_LAUCHED_FAILURE,
                    error: error
                })
            })
    }
}

export const CREATE_OFFER_REQUEST = "CREATE_OFFER_REQUEST";
export const CREATE_OFFER_RESPONSE = "CREATE_OFFER_RESPONSE";
export const CREATE_OFFER_FAILURE = "CREATE_OFFER_FAILURE";

export function createOffer({session, price_offered, id_vehicle,user, vehicle_in_auction }) {
    let params= {session, price_offered, id_vehicle,user, vehicle_in_auction};
    let isJson = false
    let route = validUrl(ROUTES.CREATE_OFFER, params, isJson);
    return dispatch => {
        dispatch({
            type: CREATE_OFFER_REQUEST,
            isLoading: true
        });
        return axios.post(route.url, route.params, route.headers)
            .then((response) => {
                dispatch({
                    type: CREATE_OFFER_RESPONSE,
                    offer: response.data,
                    isLoading: false
                })
            })
            .catch((error) => {
                dispatch({
                    type: CREATE_OFFER_FAILURE,
                    error: error.response.data
                })
            })
    }
}

export const RESET_OFFER_CREATED = "RESET_OFFER_CREATED";
export const resetOfferCreated = () => (dispatch) => {
    dispatch({
        type: RESET_OFFER_CREATED,
        offer: [],
        error:null
    })

}

export const INCREASED_SUPPLY_REQUEST = "INCREASED_SUPPLY_REQUEST";
export const INCREASED_SUPPLY_RESPONSE = "INCREASED_SUPPLY_RESPONSE";
export const INCREASED_SUPPLY_FAILURE = "INCREASED_SUPPLY_FAILURE";

export function getMoreSupply({session, id_vehicle}) {
    let params= {session, id_vehicle};
    let isJson = false
    let route = validUrl(ROUTES.GREATER_OFFER, params, isJson);
    return dispatch => {
        dispatch({
            type: INCREASED_SUPPLY_REQUEST,
            isLoading: true
        });
        return axios.post(route.url, route.params, route.headers)
            .then((response) => {
                dispatch({
                    type: INCREASED_SUPPLY_RESPONSE,
                    offer: response.data,
                    isLoading: false
                })
            })
            .catch((error) => {
                dispatch({
                    type: INCREASED_SUPPLY_FAILURE,
                    error: error.response.data
                })
            })
    }
}