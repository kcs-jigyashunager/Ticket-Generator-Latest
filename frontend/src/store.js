import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools} from "redux-devtools-extension";
import { userReducer } from "./redux/reducers/userReducer";
import { signupReducer } from "./redux/reducers/signupReducer"
import thunk from "redux-thunk";
import { delTicketReducer, editTicketReducer, getTicketReducer, ticketReducer } from "./redux/reducers/ticketReducer";

const reducer = combineReducers({
    user: userReducer,
    signup: signupReducer,
    ticket: ticketReducer,
    getTicket: getTicketReducer,
    delTicket: delTicketReducer,
    editTicket: editTicketReducer,

});

let initialState = {};


const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(thunk))
    );


export default store;