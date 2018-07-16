import Constants from "../Constants";
import Api from "../../Api/Api";

export default function appointmentsAction(token, id) {
  return async function (dispach) {
    dispach({
      type: Constants.GET_APPOINTMENTS_IN_PROGRESS
    });
    try {
      const resp = await fetch(Api.getAppointmentsUrl + id, {
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
        type: Constants.GET_APPOINTMENTS_SUCCESS,
        payload: json
      });

    } catch (error) {
      dispach({
        type: Constants.GET_APPOINTMENTS_FAILURE,
        payload: error
      });
    }
  };
}
