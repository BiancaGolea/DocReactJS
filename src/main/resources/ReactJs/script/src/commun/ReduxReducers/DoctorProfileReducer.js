import Constants from "../Constants";

export const initialState = {
  inPrgress: false,
  error: null,
  doctorInfo: null
};

export default function doctorProfileReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.GET_DOCTORPROFILE_IN_PROGRESS: {
      state = {
        ...state,
        inPrgress: true,
        error: null,
        doctorInfo: null
      };
      break;
      return state;
    }
    case Constants.GET_DOCTORPROFILE_SUCCESS: {
      state = {
        ...state,
        inPrgress: false,
        doctorInfo: action.payload
      };
      break;
      return state;
    }

    case Constants.GET_DOCTORPROFILE_FAILURE: {
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
