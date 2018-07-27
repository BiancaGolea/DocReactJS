import Constants from "../Constants";

export const initialState = {
  inPrgress: false,
  error: null,
  listOfDoctors: null
};

export default function doctorsBySpecializationReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case Constants.GET_DOCTORS_IN_PROGRESS: {
      state = {
        ...state,
        inPrgress: true,
        error: null,
        listOfDoctors: null
      };
      break;
      return state;
    }
    case Constants.GET_DOCTORS_SUCCESS: {
      state = {
        ...state,
        inPrgress: false,
        listOfDoctors: action.payload
      };
      break;
      return state;
    }
    case Constants.GET_DOCTORS_FAILURE: {
      state = {
        ...state,
        inPrgress: false,
        error: action.payload
      };
      break;
      return state;
    }
    default:
      break;
  }
  return state;
}
