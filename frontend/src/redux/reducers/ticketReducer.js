import { TICKET_FAIL, TICKET_REQUEST, CLEAR_ERRORS, GET_TICKET_FAIL, GET_TICKET_SUCCESS, GET_TICKET_REQUEST, TICKET_CREATE, LOGOUT_SUCCESS,
      DELETE_TICKET_SUCCESS, DELETE_TICKET_FAIL, DELETE_TICKET_REQUEST, EDIT_TICKET_FAIL, EDIT_TICKET_REQUEST, EDIT_TICKET_SUCCESS } from "../constants/ticketConstants";

const initialState = { user: []}

export const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
        case TICKET_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            };
        case TICKET_CREATE:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };
        case TICKET_FAIL:
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

const ticketState = { ticket: []}

export const getTicketReducer = (state = ticketState, action) => {
    switch (action.type){
    case GET_TICKET_REQUEST:
        return {
            loading: true,
            isAuthenticated: false,
        };        
    case GET_TICKET_FAIL:
        return {
            loading: true,
            isAuthenticated: true,
            ticket: null,
            error: action.payload
        };
    case GET_TICKET_SUCCESS:
        return {
            ...state,
            loading: false,
            isAuthenticated: true,
            ticket: action.payload.data,
        };
    case LOGOUT_SUCCESS:
        return {
            state: [],
            isAuthenticated: false,
        };
    default:
         return state;}}



const editTicketState = { user: []}

export const editTicketReducer = (state = editTicketState, action) => {
    switch (action.type) {
        case EDIT_TICKET_REQUEST:
            return {
                loading: true,
                isAuthenticated: false
            };
        case EDIT_TICKET_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload,
            };
        case EDIT_TICKET_FAIL:
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


const delTicketState = { ticket: []}

export const delTicketReducer = (state = delTicketState, action) => {
    switch (action.type){
    case DELETE_TICKET_REQUEST:
        return {
            loading: true,
            isAuthenticated: false,
        };        
    case DELETE_TICKET_FAIL:
        return {
            loading: true,
            isAuthenticated: true,
            ticket: null,
            error: action.payload
        };
    case DELETE_TICKET_SUCCESS:
        return {
            ...state,
            loading: false,
            isAuthenticated: true,
            ticket: action.payload.data,
        };
    case LOGOUT_SUCCESS:
        return {
            state: [],
            isAuthenticated: false,
        };
    default:
         return state;}}