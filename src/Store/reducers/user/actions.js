// Imports 
import axios from 'axios';
// App Imports
import { ROUTES } from '../../../constants/api_backend';
import { validUrl } from '../../../functions/validate';

export const GET_CURRENT_USER_REQUEST = "GET_CURRENT_USER_REQUEST";
export const GET_CURRENT_USER_RESPONSE = "GET_CURRENT_USER_RESPONSE";
export const GET_CURRENT_USER_FAILURE = "GET_CURRENT_USER_FAILURE";

export function setLogin(email, password) {
    let params = { password, email };
    let isJson = true
    let route = validUrl(ROUTES.LOGIN, params, isJson);
    return dispatch => {
        dispatch({
            type: GET_CURRENT_USER_REQUEST,
            isLoading: true
        });
        return axios.post(route.url, route.params, route.headers)
            .then((response) => {
                dispatch({
                    type: GET_CURRENT_USER_RESPONSE,
                    session: response.data,
                    isLoading:false
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_CURRENT_USER_FAILURE,
                    error: error.response.data
                })
            })
    }
}