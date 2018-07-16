import Constants from "../Constants";
import Api from "../../Api/Api";

export default function scheduleAction(token, id) {
    return async function (dispach) {
        dispach({
            type: Constants.GET_SCHEDULE_IN_PROGRESS
        });
        try {
            const resp = await fetch(Api.getScheduleUrl + id, {
                method: "GET",
                headers: {
                    "Authorization": token,
                    "Content-Type": "application/json"
                },
            });
            const json = await resp.json();
            if (json == null || resp.status !== 200) {
                throw new Error(json);
            }
            dispach({
                type: Constants.GET_SCHEDULE_SUCCESS,
                payload: json
            });
        } catch (error) {
            dispach({
                type: Constants.GET_SCHEDULE_FAILURE,
                payload: error
            });
        }
    }
}