import getCabineteConst from "../Constants";

export const initialState={
    inProgress: false,
    error: null,
    listaCabinete: null,
}

export default function getCabinete(state = initialState, action){
    switch (action.type){
        case getCabineteConst.GET_CABINETE_IN_PROGRESS:
        {
            state = {
                ...state,
                inPrgress: true,
                error: null,
                listaCabinete: null
        };
        break;
    }
    case getCabineteConst.GET_CABINETE_SUCCESS:
    {
        state = {
            ...state,
            inPrgress: false,
            listaCabinete: action.payload,
    };
    break;
}
case getCabineteConst.GET_CABINETE_FAILURE:
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