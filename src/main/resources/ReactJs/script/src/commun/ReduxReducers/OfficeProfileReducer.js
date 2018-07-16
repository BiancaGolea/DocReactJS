import Constants from "../Constants";

export const initialState = {
    inProgress: false,
    error: null,
    officeInfo: null,
};

export default function officeProfileReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.GET_OFFICEPROFILE_IN_PROGRESS:
            {
                state = {
                    ...state,
                    inProgress: true,
                    error: null,
                    officeInfo: null,
                };
                break;
                return state;
            }
        case Constants.GET_OFFICEPROFILE_SUCCESS:
            {
                state = {
                    ...state,
                    inProgress: false,
                    officeInfo: action.payload
                };

                break;
                return state;
            }
        case Constants.GET_OFFICEPROFILE_FAILURE:
            {
                state = {
                    ...state,
                    inProgress: null,
                    error: action.payload
                };
                break;
                return state;
            }
        default:
            break;
    }
    return state;
}