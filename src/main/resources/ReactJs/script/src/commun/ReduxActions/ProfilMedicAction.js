import getProfilMedic from "../Constants";
import Api from "../../Api/Api";

export default function medicProfil(token, id) {
  return async function(dispach) {
    dispach({ type: getProfilMedic.GET_PROFILMEDIC_IN_PROGRESS });
    try {
      const resp = await fetch(Api.getProfilMedic + id, {
        method: "GET",
        headers: {
          Authorization:token,
          "Content-Type": "application/json"
        }
      });
      const json = await resp.json();
      if (json == null || resp.status !== 200) {
        throw new Error(json);
      }
      dispach({
        type: getProfilMedic.GET_PROFILMEDIC_SUCCESS,
        payload: json
      });
    } catch (error) {
      dispach({ type: getProfilMedic.GET_PROFILMEDIC_FAILURE, payload: error });
    }
  };
}
