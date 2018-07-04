import getMediciConst from "../Constants";

export const initialState = {
  inPrgress: false,
  error: null,
  listaMedici: null
};

export default function getMediciBySpecializare(state = initialState, action) {
  switch (action.type) {
    case getMediciConst.GET_MEDICI_IN_PROGRESS:
      {
        state = {
          ...state,
          inPrgress: true,
          error: null,
          listaMedici: null
        };
         break;
      }
     case getMediciConst.GET_MEDICI_SUCCESS:{
         state={
             ...state,
             inPrgress:false,
            listaMedici:action.payload
         };
         break;
     }
     case getMediciConst.GET_MEDICI_FAILURE:{
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
