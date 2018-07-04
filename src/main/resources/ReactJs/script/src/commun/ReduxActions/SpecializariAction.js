import appConstants from "../Constants";
import getSpecializariUrl from "../../Api/Api";

export default function specializareList(token) {
  return async function(dispach) {
    dispach({ type: appConstants.GET_SPECIALIZARI_IN_PROGRESS });
    try {
      const resp = await fetch(getSpecializariUrl.getSpecializariUrl, {
        method: "GET",
        headers: {
            Authorization:token,
            "Content-Type": "application/json"
        },
      });
      const json = await resp.json();
      if (json == null || resp.status !== 200 ) {
        throw new Error(json);
      }
      dispach({ type: appConstants.GET_SPECIALIZARI_SUCCESS, payload: json });
    } catch (error) {
        console.log("Error :"+JSON.stringify(error))
      dispach({ type: appConstants.GET_SPECIALIZARI_FAILURE, payload: error });
    }
  };
}
