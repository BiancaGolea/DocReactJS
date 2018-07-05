import { combineReducers } from "redux";
import authReducer from "./ReduxReducers/AuthReducer";
import specializariReducer from "./ReduxReducers/SpecializariReducer";
import listaMediciBySpecializare from "./ReduxReducers/ListaMediciBySpecializareReducer";
import ProfilMedic from "./ReduxReducers/ProfilMedicReducers";
import Servicii from "./ReduxReducers/ServiciiReducer";
import RecenziiMedic from "./ReduxReducers/RecenziiMedicReducer";
import Offices from "./ReduxReducers/OfficesReducer";
import ProfilCabinet from "./ReduxReducers/ProfilCabinetReducer";
import Programari from "./ReduxReducers/ProgramariReducer";

export default combineReducers({
    authReducer:authReducer,
    specializareReducer:specializariReducer,
    listaMediciBySpecializare:listaMediciBySpecializare,
    profilMedic:ProfilMedic,
    serviciiMedic:Servicii,
    recenziiMedicReducer:RecenziiMedic,
    officesList:Offices,
    profilCabinet:ProfilCabinet,
    programari:Programari,
    });