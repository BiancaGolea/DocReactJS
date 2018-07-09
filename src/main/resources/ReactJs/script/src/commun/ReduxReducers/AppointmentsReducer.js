import Constants from "../Constants";

export const initialState = {
  inProgress: false,
  error: null,
  appointmentsList: null
};

export default function appointmentsReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.GET_APPOINTMENTS_IN_PROGRESS: {
      state = {
        ...state,
        inProgress: true,
        error: null,
        appointmentsList: null
      };
      break;
    }
    case Constants.GET_APPOINTMENTS_SUCCESS: {
      state = {
        ...state,
        inProgress: false,
        error: null,
        appointmentsList: action.payload
      };
      break;
    }
    case Constants.GET_APPOINTMENTS_FAILURE: {
      state = {
        ...state,
        inProgress: false,
        error: action.paylod,
        appointmentsList: null
      };
      break;
    }
    default: break;
  }
  return state;
}
