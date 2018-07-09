import Constants from "../Constants";

export default function setSpecialization(specializare){
    return async function (dispatch){
      dispatch({type:Constants.SET_SPECIALIZATION,payload:specializare});
    }
  }