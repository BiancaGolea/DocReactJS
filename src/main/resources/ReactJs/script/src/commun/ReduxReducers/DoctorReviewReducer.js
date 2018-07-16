import Constants from "../Constants";

export const initialState = {
  inPrgress: false,
  error: null,
  doctorReviewList: null
};

export default function doctorReviewReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.GET_DOCREVIEW_IN_PROGRESS:
      {
        state = {
          ...state,
          inPrgress: true,
          error: null,
          doctorReviewList: null
        };
        break;
        return state;
      }
    case Constants.GET_DOCREVIEW_SUCCESS:
      {
        state = {
          ...state,
          inPrgress: false,
          doctorReviewList: action.payload
        };
        break;
        return state;
      }
    case Constants.GET_DOCREVIEW_FAILURE:
      {
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