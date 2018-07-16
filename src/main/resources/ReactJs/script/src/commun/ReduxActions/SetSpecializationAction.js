import Constants from "../Constants";

export default function setSpecialization(specialization) {
  return async function (dispatch) {
    dispatch({
      type: Constants.SET_SPECIALIZATION,
      payload: specialization
    });
  }
}