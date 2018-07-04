import getRecenziiMediciConst from "../Constants";

export const initialState = {
    inPrgress: false,
    error: null,
    listaRecenziiMedici: null
  };

  export default function getRecenziiMedici(state = initialState, action) {
    switch (action.type) {
      case getRecenziiMediciConst.GET_RECENZIIMEDICI_IN_PROGRESS:
        {
          state = {
            ...state,
            inPrgress: true,
            error: null,
            listaRecenziiMedici: null
          };
           break;
        }
       case getRecenziiMediciConst.GET_RECENZIIMEDIC_SUCCESS:{
           state={
               ...state,
               inPrgress:false,
              listaRecenziiMedici:action.payload
           };
           break;
       }
       case getRecenziiMediciConst.GET_RECENZIIMEDICI_FAILURE:{
           state={
               ...state,
               inPrgress:false,
              error:action.payload
           };
           break;
       }
    }
    return state;
  
  }