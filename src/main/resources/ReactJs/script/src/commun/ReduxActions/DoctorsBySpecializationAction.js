import Constants from"../Constants";
import Api from "../../Api/Api";

export default function doctorsBySpecializationAction(token,specialization){
    return async function(dispach){
        dispach({type:Constants.GET_DOCTORS_IN_PROGRESS});
        try {
            const resp = await fetch(Api.getDoctorsBySpecializationUrl+specialization, {
                method: "GET",
                headers: {
                    "Authorization":token,
                    "Content-Type": "application/json"
                },
              });
        const json=await resp.json();
        if(json==null || resp.status!==200){
            throw new Error(json);
        }
        dispach({type:Constants.GET_DOCTORS_SUCCESS,payload:json});
        } catch (error) {
            dispach({type:Constants.GET_DOCTORS_FAILURE,payload:error});
        }
    }
}