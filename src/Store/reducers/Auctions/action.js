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