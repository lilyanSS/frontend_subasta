import {
    GET_CURRENT_USER_REQUEST, GET_CURRENT_USER_RESPONSE, GET_CURRENT_USER_FAILURE, GET_SESSION
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
                session:action.session,
                isLoading: false,
                error: null
            }
        }
        default:
            return state;
    }
}

