import Constants from "../Constants";

export const initialState = {
  inProgress: false,
  error: null,
  appointmentsList: null
};

export default function appointmentsReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.GET_APPOINTMENTS_IN_PROGRESS:
      {
        state = {
          ...state,
          inProgress: true,
          error: null,
          appointmentsList: null
        };
        break;
        return state;
      }
    case Constants.GET_APPOINTMENTS_SUCCESS:
      {
        state = {
          ...state,
          inProgress: false,
          error: null,
          appointmentsList: action.payload
        };
        break;
        return state;
      }
    case Constants.GET_APPOINTMENTS_FAILURE:
      {
        state = {
          ...state,
          inProgress: false,
          error: action.paylod,
          appointmentsList: null
        };

        break;
        return state;
      }
    default:
      break;
  }
  return state;
}
