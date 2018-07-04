import appConstants from "../Constants";

export default function setSpecializare(specializare){
    return async function (dispatch){
        console.log("specializarea:"+specializare)
      dispatch({type:appConstants.SET_SPECIALIZARE,payload:specializare});
    }
  }