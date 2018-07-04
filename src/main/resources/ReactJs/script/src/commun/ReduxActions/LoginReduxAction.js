import loginConstants from "../Constants";
import loginUrl from "../../Api/Api"; 

export default function loginUser(username, password) {
    return async function (dispatch) {
      dispatch({ type: loginConstants.LOGIN_IN_PROGRESS})
      try {
        const resp = await fetch(loginUrl.loginUrl, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: username,
            password: password,
          })
        });
        const json = await resp.json();
        if(json==null || resp.status!==200){
            throw new Error(json.error);
        }
        dispatch({ type: loginConstants.LOGIN_SUCCES,payload:json.Token})
        dispatch({type:loginConstants.ADD_USERNAME,payload:username})
      } catch (err) {
        console.log("Error --:" + err.message);
        dispatch({ type: loginConstants.LOGIN_FAILURE,payload:err.message})
      }
    };
  }

 