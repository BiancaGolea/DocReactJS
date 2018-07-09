import Constants from "../Constants";

export const initialState = {
    inPrgress: false,
    error: null,
    servicesList: null
  };

  export default function servicesReducer(state = initialState, action){
    switch (action.type) {
        case Constants.GET_SERVICES_IN_PROGRESS:
          {
            state = {
              ...state,
              inPrgress: true,
              error: null,
              servicesList: null
            };
             break;
          }
         case Constants.GET_SERVICES_SUCCESS:
         {   
             state={
                 ...state,
                 inPrgress:false,
                servicesList:action.payload
             };
             break;
         }
         case Constants.GET_SERVICES_FAILURE:
         {   
             state={
                 ...state,
                 inPrgress:false,
                error:action.payload
             };
             break;
         }
         default: break;
      }
      return state;
  }
