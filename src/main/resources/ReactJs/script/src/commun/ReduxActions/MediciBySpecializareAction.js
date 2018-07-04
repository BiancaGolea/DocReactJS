import getMediciConst from"../Constants";
import Api from "../../Api/Api";

export default function mediciAction(token,spec){
    return async function(dispach){
        dispach({type:getMediciConst.GET_MEDICI_IN_PROGRESS});
        try {
            const resp = await fetch(Api.getMediciBySpecializareUrl+spec, {
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
        dispach({type:getMediciConst.GET_MEDICI_SUCCESS,payload:json});
        } catch (error) {
            dispach({type:getMediciConst.GET_MEDICI_FAILURE,payload:error});
        }
    }
}