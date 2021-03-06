import Constants from "../Constants";

export const initialState = {
  inProgress: false,
  error: null,
  specializationList: null,
  selectedSpecialization: null
};

export default function specializationsReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.GET_SPECIALIZATIONS_IN_PROGRESS: {
      state = {
        ...state,
        inProgress: true,
        specializationList: null,
        error: null
      };
      break;
      return state;
    }
    case Constants.GET_SPECIALIZATIONS_SUCCESS: {
      state = {
        ...state,
        inProgress: false,
        specializationList: action.payload
      };
      break;
      return state;
    }
    case Constants.GET_SPECIALIZATIONS_FAILURE: {
      state = {
        ...state,
        inProgress: false,
        error: action.payload
      };
      break;
      return state;
    }
    case Constants.SET_SPECIALIZATION: {
      state = {
        ...state,
        inProgress: true,
        selectedSpecialization: action.payload
      };
      break;
      return state;
    }
    default:
      break;
  }
  return state;
}
