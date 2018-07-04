import getCabineteConst from "../Constants";
import Api from "../../Api/Api";

export default function cabineteAction(token){
    return async function(dispach){
        dispach({type:getCabineteConst.GET_CABINETE_IN_PROGRESS});
        try{
            const resp=await fetch(Api.getCabineteUrl,{
                method:"GET",
                headers: {
                    "Authorization":token,
                    "Content-Type": "application/json"
                },
            });
            const json=await resp.json();
        if(json==null || resp.status!==200){
            throw new Error(json);
        }
        dispach({type:getCabineteConst.GET_CABINETE_SUCCESS, payload:json});
    }catch(error){
        dispach({type:getCabineteConst.GET_CABINETE_FAILURE, payload:error});
    }

}
}
