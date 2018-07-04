import getProgramConst from "../Constants";
import Api from "../../Api/Api";

export default function programAction(token,id){
    return async function(dispach){
        dispach({type:getProgramConst.GET_PROGRAM_IN_PROGRESS});
        try {
            const resp = await fetch(Api.getProgramUrl+id, {
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
        dispach({type:getProgramConst.GET_PROGRAM_SUCCESS,payload:json});
        } catch (error) {
            dispach({type:getProgramConst.GET_PROGRAM_FAILURE,payload:error});
        }
    }
}