import Constants from "../Constants";

export const initialState={
    inProgress: false,
    error: null,
    officesList: null,
}

export default function getCabinete(state = initialState, action){
    switch (action.type){
        case Constants.GET_OFFICES_IN_PROGRESS:
        {
            state = {
                ...state,
                inPrgress: true,
                error: null,
                officesList: null
        };
        break;
    }
    case Constants.GET_OFFICES_SUCCESS:
    {
        state = {
            ...state,
            inPrgress: false,
            officesList: action.payload,
    };
    break;
}
case Constants.GET_OFFICES_FAILURE:
{
    state = {
        ...state,
        inPrgress: false,
        error:action.payload,
};
break;

}
}
return state;
}