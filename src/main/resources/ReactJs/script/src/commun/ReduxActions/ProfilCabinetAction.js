import getProfilCabinet from "../Constants";
import Api from "../../Api/Api";

export default function cabinetAction(id, token) {
  return async function(dispach) {
    dispach({ type: getProfilCabinet.GET_PROFILCABINET_IN_PROGRESS });
    try {
      const resp = await fetch(Api.getProfilCabinet + id, {
        method: "GET",
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        }
      });
      const json = await resp.json();
      if (resp.status !== 200) {
        throw new Error(json);
      }

      dispach({
        type: getProfilCabinet.GET_PROFILCABINET_SUCCESS,
        payload: json
      });
    } catch (error) {
      dispach({
        type: getProfilCabinet.GET_PROFILCABINET_FAILURE,
        payload: error
      });
    }
  };
}
