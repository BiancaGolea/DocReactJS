import getServiciiConst from "../Constants";

export const initialState = {
    inPrgress: false,
    error: null,
    listaServicii: null
  };

  export default function getServicii(state = initialState, action){
    switch (action.type) {
        case getServiciiConst.GET_SERVICII_IN_PROGRESS:
          {
            state = {
              ...state,
              inPrgress: true,
              error: null,
              listaServicii: null
            };
             break;
          }
         case getServiciiConst.GET_SERVICII_SUCCESS:{
             state={
                 ...state,
                 inPrgress:false,
                listaServicii:action.payload
             };
             break;
         }
         case getServiciiConst.GET_SERVICII_FAILURE:{
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
