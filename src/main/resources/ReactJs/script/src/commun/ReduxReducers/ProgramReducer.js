import getProgramConst from "../Constants";

export const initialState = {
    inPrgress: false,
    error: null,
    listaProgram: null
  };

  export default function getProgram(state = initialState, action){
    switch (action.type) {
        case getProgramConst.GET_PROGRAM_IN_PROGRESS:
          {
            state = {
              ...state,
              inPrgress: true,
              error: null,
              listaProgram: null
            };
             break;
          }
         case getProgramConst.GET_PROGRAM_SUCCESS:{
             state={
                 ...state,
                 inPrgress:false,
                listaProgram:action.payload
             };
             break;
         }
         case getProgramConst.GET_PROGRAM_FAILURE:{
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