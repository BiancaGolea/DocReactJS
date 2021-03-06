import Constants from "../Constants";

export const initialState = {
  inPrgress: false,
  error: null,
  scheduleList: null
};

export default function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.GET_SCHEDULE_IN_PROGRESS: {
      state = {
        ...state,
        inPrgress: true,
        error: null,
        scheduleList: null
      };
      break;
      return state;
    }
    case Constants.GET_SCHEDULE_SUCCESS: {
      state = {
        ...state,
        inPrgress: false,
        scheduleList: action.payload
      };
      break;
      return state;
    }
    case Constants.GET_SCHEDULE_FAILURE: {
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
