import Constants from "../Constants";

export const initialState = {
    inProgress: false,
    token: null,
    error: null,
    username: null,
    isDoctor: false,
    idDoctor: null,
}; 
export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.LOGIN_IN_PROGRESS:
            {
                state = {
                    ...state,
                    inProgress: true,
                    token: null,
                    error: null,
                    isDoctor: false,
                    idDoctor: null

                };
                break;
                return state;
            }
        case Constants.LOGIN_SUCCES:
            {
                state = {
                    ...state,
                    inProgress: false,
                    token: action.payload,

                };
                break;
                return state;
            }
        case Constants.LOGIN_FAILURE:
            {
                state = {
                    ...state,
                    inProgress: false,
                    error: action.payload,
                };
                break;
                return state;
            }
        case Constants.ADD_USERNAME:
            {

                state = {
                    ...state,
                    username: action.payload,
                };
                break;
                return state;
            }
        case Constants.SET_STATUS:
            {
                state = {
                    ...state,
                    isDoctor: true,
                }
                break;
                return state;
            }

        case Constants.SET_ID_DOCTOR:
            {
                state = {
                    ...state,
                    idDoctor: action.payload,
                }
                break;
                return state;
            }
        default:
            break;
    }
    return state;
}