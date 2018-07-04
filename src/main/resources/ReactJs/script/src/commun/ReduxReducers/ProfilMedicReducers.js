import getProfilMedic from "../Constants";

export const initialState = {
  inPrgress: false,
  error: null,
  dateMedic: null
};

export default function profilMedic(state = initialState, action) {
  switch (action.type) {
    case getProfilMedic.GET_PROFILMEDIC_IN_PROGRESS: {
      state = {
        ...state,
        inPrgress: true,
        error: null,
        dateMedic: null
      };
      break;
    }
    case getProfilMedic.GET_PROFILMEDIC_SUCCESS: {
      state = {
        ...state,
        inPrgress: false,
        dateMedic: action.payload
      };
      break;
    }

    case getProfilMedic.GET_PROFILMEDIC_FAILURE: {
      state = {
        ...state,
        inPrgress: false,
        error: action.payload
      };
      break;
    }
  }
  return state;
}
