import appConstants from "../Constants";

export default function setStatus(token,username) {
  return async function(dispatch) {
    try {
        console.log(token+" si "+username)
      const url =
        "http://localhost:8080/" + username + "/checkRole";
      const resp = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        }
      });
      
      const json=await resp.json();

      if(resp.status==302){
        dispatch({ type: appConstants.SET_ID_DOCTOR, payload:json })
        dispatch({ type: appConstants.SET_STATUS });

      }
    } catch (error) {
      console.log(error);
    }
  };
}
