import { CLEAR_ERRORS } from "../constants/ticketConstants";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from "../constants/userConstant";

const initialState = { user: []}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };
        case LOGIN_FAIL:
            return {
                loading: true,
                isAuthenticated: false,
                user: null,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        case LOGOUT_SUCCESS:
            return {
                state: [],
                isAuthenticated: false,
            };
        default:
            return state;
    }   
};


