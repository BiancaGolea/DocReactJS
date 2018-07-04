import getProgramariConst from "../Constants";

export const initialState = {
  inProgress: false,
  error: null,
  listaProgramari: null
};

export default function getProgramari(state = initialState, action) {
  switch (action.type) {
    case getProgramariConst.GET_PROGRAMARI_IN_PROGRESS: {
      state = {
        ...state,
        inProgress: true,
        error: null,
        listaProgramari: null
      };
      break;
    }
    case getProgramariConst.GET_PROGRAMARI_SUCCESS: {
      state = {
        ...state,
        inProgress: false,
        error: null,
        listaProgramari: action.payload
      };
      break;
    }
    case getProgramariConst.GET_PROGRAMARI_FAILURE: {
      state = {
        ...state,
        inProgress: false,
        error: action.paylod,
        listaProgramari: null
      };
      break;
    }
  }
  return state;
}
