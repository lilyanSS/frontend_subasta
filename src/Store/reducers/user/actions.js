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
                    isLoading: false
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

export const GET_SESSION = "GET_SESSION";

export const getSession = () => (dispatch) => {
    if (localStorage.getItem('session') !== "" && localStorage.getItem('session') !== undefined) {
        dispatch({
            type: GET_SESSION,
            session: JSON.parse(localStorage.getItem('session'))
        })
    }
}

export const GET_PERSONAL_INFO_REQUEST = "GET_PERSONAL_INFO_REQUEST";
export const GET_PERSONAL_INFO_RESPONSE = "GET_PERSONAL_INFO_RESPONSE";
export const GET_PERSONAL_INFO_FAILURE = "GET_PERSONAL_INFO_FAILURE";

export function getPersonalInfo(session) {
    let params = { session };
    let isJson = false
    let route = validUrl(ROUTES.USER, params, isJson);
    return dispatch => {
        dispatch({
            type: GET_PERSONAL_INFO_REQUEST,
            isLoading: true
        });
        return axios.post(route.url, route.params, route.headers)
            .then((response) => {
                dispatch({
                    type: GET_PERSONAL_INFO_RESPONSE,
                    user: response.data,
                    isLoading: false
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_PERSONAL_INFO_FAILURE,
                    error: error.response.data
                })
            })
    }
}

export const GET_BACK_ACCOUNT_REQUEST = "GET_BACK_ACCOUNT_REQUEST";
export const GET_BACK_ACCOUNT_RESPONSE = "GET_BACK_ACCOUNT_RESPONSE";
export const GET_BACK_ACCOUNT_FAILURE = "GET_BACK_ACCOUNT_FAILURE";

export function getBackAccount(session) {
    let params = { session };
    let isJson = false
    let route = validUrl(ROUTES.BANK_ACCOUNT, params, isJson);
    return dispatch => {
        dispatch({
            type: GET_BACK_ACCOUNT_REQUEST,
            isLoading: true
        });
        return axios.post(route.url, route.params, route.headers)
            .then((response) => {
                dispatch({
                    type: GET_BACK_ACCOUNT_RESPONSE,
                    account: response.data,
                    isLoading: false
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_BACK_ACCOUNT_FAILURE,
                    error: error.response.data
                })
            })
    }
}

// export const
export const LOGOUT_SESSION_REQUEST = "LOGOUT_SESSION_REQUEST";
export const LOGOUT_SESSION_RESPONSE = "LOGOUT_SESSION";

export const LogoutSession = (session_key) => {
    let params = { session_key };
    let isJson = false
    let route = validUrl(ROUTES.LOGOUT, params, isJson);
    return dispatch => {
        dispatch({
            type: LOGOUT_SESSION_REQUEST,
            isLoading: true
        });
        return axios.post(route.url, route.params, route.headers)
            .then((response) => {
                localStorage.removeItem('session');
                dispatch({
                    type: LOGOUT_SESSION_RESPONSE,
                    user: null,
                    isLoading: false
                })
            }).catch((error) => {
                console.log(error, "erro")
            });
    }
}

export const GET_MY_OFFERS_REQUEST = "GET_MY_OFFERS_REQUEST";
export const GET_MY_OFFERS_RESPONSE = "GET_MY_OFFERS_RESPONSE";
export const GET_MY_OFFERS_FAILURE = "GET_MY_OFFERS_FAILURE";

export function getMyOffers(session) {
    let params = { session };
    let isJson = false
    let route = validUrl(ROUTES.MY_OFFERS, params, isJson);
    return dispatch => {
        dispatch({
            type: GET_MY_OFFERS_REQUEST,
            isLoading: true
        });
        return axios.post(route.url, route.params, route.headers)
            .then((response) => {
                dispatch({
                    type: GET_MY_OFFERS_RESPONSE,
                    myOffers: response.data,
                    isLoading: false
                })
            })
            .catch((error) => {
                dispatch({
                    type: GET_MY_OFFERS_FAILURE,
                    error: error.response.data
                })
            })
    }
}

