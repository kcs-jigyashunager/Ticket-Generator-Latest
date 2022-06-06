import { CLEAR_ERRORS } from "../constants/ticketConstants";
import { SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS, LOGOUT_SUCCESS } from "../constants/userConstant";

const initialState = { user: []}

export const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };
        case SIGNUP_FAIL:
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


