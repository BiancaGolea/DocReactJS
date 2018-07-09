import Constants from "../Constants";
import Api from "../../Api/Api";

export default function servicesAction(token,id){
    return async function(dispach){
        dispach({type:Constants.GET_SERVICES_IN_PROGRESS});
        try {
            const resp = await fetch(Api.getServicesUrl+id, {
                method: "GET",
                headers: {
                    "Authorization":token,
                    "Content-Type": "application/json"
                },
              });
        const json=await resp.json();
        if(json===null || resp.status!==200){
            throw new Error(json);
        }
        
        dispach({type:Constants.GET_SERVICES_SUCCESS,payload:json});
        } catch (error) {
            dispach({type:Constants.GET_SERVICES_FAILURE,payload:error});
        }
    }
}