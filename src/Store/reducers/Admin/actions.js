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