import { CLEAR_ERRORS, TICKET_REQUEST, TICKET_FAIL, GET_TICKET_FAIL, GET_TICKET_SUCCESS, GET_TICKET_REQUEST, TICKET_CREATE, LOGOUT_SUCCESS, DELETE_TICKET_REQUEST, DELETE_TICKET_SUCCESS, DELETE_TICKET_FAIL } from "../constants/ticketConstants";
import axios from "axios";




export const newTicket = ( ticketData ) => async (dispatch) => {
    const { ticket_no, ticket_desc } = ticketData;
    const token = localStorage.getItem("token")

    try {
        dispatch ({ type: TICKET_REQUEST});

        const config = { headers: { "Content-Type": "application/json", "x-auth-token": token }};

        const userTicket = await axios.post(
            'http://localhost:5000/api/newTicket',
             { ticket_no, ticket_desc },
             config,
        )

        dispatch ({
            type: TICKET_CREATE,
            payload: userTicket,
        });
        dispatch(getTickets());

    } catch (error) {
        dispatch ({ 
            type: TICKET_FAIL,
            payload: error.response
        });
        
    }
};

export const getTickets = () => async (dispatch) => {

    const getToken = localStorage.getItem("token")

    try {
        dispatch ({ type: GET_TICKET_REQUEST});
        

        const config = { headers: { "Content-Type": "application/json", "x-auth-token": getToken}};

        const getTicket = await axios.get(
            'http://localhost:5000/api/tickets',
             config,
        )
        
        dispatch ({
                type: GET_TICKET_SUCCESS,
                payload: getTicket,
        });

    } catch (error) {
        dispatch ({ 
            type: GET_TICKET_FAIL,
            payload: error.response
        });
        
    }
}


export const delTickets = (id) => async (dispatch) => {
    const delToken = localStorage.getItem("token")


    try {
        dispatch ({ type: DELETE_TICKET_REQUEST});

        const delUserTicket = id;

        const config = { headers: { "Content-Type": "application/json", "x-auth-token": delToken}};

        const delTicket = await axios.delete(
            `http://localhost:5000/api/ticket/${delUserTicket}`,
             config,
        )
        
        dispatch ({
                type: DELETE_TICKET_SUCCESS,
                payload: delTicket,
        });
        dispatch(getTickets())


    } catch (error) {
        dispatch ({ 
            type: DELETE_TICKET_FAIL,
            payload: error.response
        });
        
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
};

export const logout = () => async (dispatch) => {
    

    dispatch({
        type: LOGOUT_SUCCESS
    })
} 
