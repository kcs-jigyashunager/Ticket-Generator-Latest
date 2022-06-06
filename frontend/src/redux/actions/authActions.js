import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, CLEAR_ERRORS, LOGOUT_SUCCESS, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAIL } from "../constants/userConstant"
import axios from "axios";
import { getTickets } from "./ticketAction";

export const login = ( data ) => async (dispatch) => {
    const { email, password } = data;

    try {
        dispatch ({ type: LOGIN_REQUEST});

        const config = { headers: { "Content-Type": "application/json" }};

        const user = await axios.post(
            'http://localhost:5000/api/login',
             { email, password },
             config,
        )

        dispatch ({
            type: LOGIN_SUCCESS,
            payload: user,
        });
        dispatch(getTickets());


    } catch (error) {
        dispatch ({ 
            type: LOGIN_FAIL,
            payload: error.response
        });
        
    }
};

export const register = ( signupData ) => async (dispatch) => {
    const { name, email, password } = signupData;

    try {
        dispatch ({ type: SIGNUP_REQUEST});

        const config = { headers: { "Content-Type": "application/json", }};

        const userSignup = await axios.post(
            'http://localhost:5000/api/register',
             { name, email, password },
             config,
        )

        dispatch ({
            type: SIGNUP_SUCCESS,
            payload: userSignup,
        });


    } catch (error) {
        dispatch ({ 
            type: SIGNUP_FAIL,
            payload: error.response
        });
        
    }
};


export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
};

export const logout = () => async (dispatch) => {
    localStorage.removeItem("token");

    dispatch({
        type: LOGOUT_SUCCESS
    })
} 