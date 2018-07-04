import getProfilCabinet from "../Constants";

export const initialState={
    inProgress: false,
    error:null,
    dateCabinet:null,
};

export default function profilCabinet(state = initialState, action){
    switch(action.type){
        case getProfilCabinet.GET_PROFILCABINET_IN_PROGRESS:
        {console.log("progress")
        state={
            ...state,
            inProgress:true,
            error:null,
            dateCabinet:null,
        };
        break;
    }
        case getProfilCabinet.GET_PROFILCABINET_SUCCESS:
        {
            console.log("succes")
            state={
                ...state,
                inProgress:false,
                dateCabinet:action.payload
            };
           
            break;
        }
        case getProfilCabinet.GET_PROFILCABINET_FAILURE:
        {console.log("error")
            state={
                ...state,
                inProgress:null,
                error:action.payload
            };
            break;
        }
}
return state;
}