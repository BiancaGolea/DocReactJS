import getServiciiConst from "../Constants";
import Api from "../../Api/Api";

export default function serviciiAction(token,id){
    return async function(dispach){
        dispach({type:getServiciiConst.GET_SERVICII_IN_PROGRESS});
        try {
            const resp = await fetch(Api.getServiciiUrl+id, {
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
        
        dispach({type:getServiciiConst.GET_SERVICII_SUCCESS,payload:json});
        } catch (error) {
            dispach({type:getServiciiConst.GET_SERVICII_FAILURE,payload:error});
        }
    }
}