import loginConstants from "../Constants"; 

export const initialState = {
   inProgress:false,
   token:null,
   error:null,
   username:null,
   isMedic:false,
   idMedic:null,
};
 
export default function loginReducer(state = initialState, action) {
    switch(action.type){
        case loginConstants.LOGIN_IN_PROGRESS:{ 
            state={
                ...state,
                inProgress:true,
                token:null,
                error:null,
                isMedic:false,
                idMedic:null

            };
            break;
        }
        case loginConstants.LOGIN_SUCCES:{
            state={
                ...state,
                inProgress:false,
                token:action.payload,
                
            };
            break;
           } 
           case loginConstants.LOGIN_FAILURE:{
            state={
                ...state,
                inProgress:false,
               error:action.payload,
            };
            break;
           }
           case loginConstants.ADD_USERNAME:{

               state={
                   ...state,
                   username:action.payload,
               };
               break;
           }
           case loginConstants.SET_STATUS:{
                   state={
                   ...state,
                   isMedic:true,
               }
               break;
           }

           case loginConstants.SET_ID_MED:{
               state={
                   ...state,
                   idMedic:action.payload,
               }
           }
    }
    return state;
}