import appConstants from '../Constants';

export const initialState={
    inProgress:false,
    error:null,
    specializareList: null,
    specializareSelectata:null
}

export default function specializariReducer(state=initialState,action){
    switch (action.type){
        case appConstants.GET_SPECIALIZARI_IN_PROGRESS:{
            state={
                ...state,
                inProgress:true,
                specializareList:null,
                error:null
            };
            break;
        }
        case appConstants.GET_SPECIALIZARI_SUCCESS:{
            state={
                ...state,
                inProgress:false,
                specializareList:action.payload,
            };
            break;
        }
        case appConstants.GET_SPECIALIZARI_FAILURE:{
            state={
                ...state,
                inProgress:false,
                error:action.payload
            };
            break;
        }
        case appConstants.SET_SPECIALIZARE:{
            state={
                ...state,
                inProgress:true,
                specializareSelectata:action.payload,
            };
            break;
        }
    }
    return state;
}