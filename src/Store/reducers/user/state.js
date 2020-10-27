import {
    GET_CURRENT_USER_REQUEST, GET_CURRENT_USER_RESPONSE, GET_CURRENT_USER_FAILURE, GET_SESSION,
    GET_PERSONAL_INFO_FAILURE, GET_PERSONAL_INFO_RESPONSE, GET_PERSONAL_INFO_REQUEST,
    GET_BACK_ACCOUNT_FAILURE, GET_BACK_ACCOUNT_REQUEST, GET_BACK_ACCOUNT_RESPONSE,
    LOGOUT_SESSION_RESPONSE
} from "./actions";

const authInitialState = {
    session: "",
    error: null,
    isLoading: false
};

export const auth = (state = authInitialState, action) => {
    switch (action.type) {
        case GET_CURRENT_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case GET_CURRENT_USER_RESPONSE:
            localStorage.setItem("session", JSON.stringify(action.session.session));
            return {
                ...state,
                isLoading: false,
                session: action.session.session,
                error: null
            }
        case GET_CURRENT_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        case GET_SESSION: {
            return {
                ...state,
                session: action.session,
                isLoading: false,
                error: null
            }
        }
        case LOGOUT_SESSION_RESPONSE: {
            return {
                ...state,
                session: [],
                isLoading: false,
                error: null
            }
        }
        default:
            return state;
    }
}

const userInitialState = {
    user: [],
    error: null,
    isLoading: false
};

export const user = (state = userInitialState, action) => {
    switch (action.type) {
        case GET_PERSONAL_INFO_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case GET_PERSONAL_INFO_RESPONSE:
            return {
                ...state,
                isLoading: false,
                user: action.user.data,
                error: null
            }
        case GET_PERSONAL_INFO_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}

const backAccountInitialState = {
    account: [],
    error: null,
    isLoading: false
};

export const account = (state = backAccountInitialState, action) => {
    switch (action.type) {
        case GET_BACK_ACCOUNT_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null
            }
        case GET_BACK_ACCOUNT_RESPONSE:
            return {
                ...state,
                isLoading: false,
                account: action.account.data,
                error: null
            }
        case GET_BACK_ACCOUNT_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return state;
    }
}