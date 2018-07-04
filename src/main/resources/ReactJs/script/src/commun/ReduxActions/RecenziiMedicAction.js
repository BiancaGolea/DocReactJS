import getRecenziiMediciConst from"../Constants";
import Api from "../../Api/Api";

export default function recenziiMediciAction(token,id){
    return async function(dispach){
        dispach({type:getRecenziiMediciConst.GET_RECENZIIMEDIC_IN_PROGRESS});
        try {
            const resp = await fetch(Api.getRecenziiMediciUrl+id, {
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
        dispach({type:getRecenziiMediciConst.GET_RECENZIIMEDIC_SUCCESS,payload:json});
        } catch (error) {
            dispach({type:getRecenziiMediciConst.GET_RECENZIIMEDIC_FAILURE,payload:error});
        }
    }
}