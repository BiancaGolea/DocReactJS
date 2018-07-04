import { ContentSort } from "material-ui";

//url catre Api
const loginUrl="http://localhost:8080/login";
const signUpUrl="http://localhost:8080/sign-up";
const getSpecializariUrl="http://localhost:8080/specializari/getAll";
const getMediciBySpecializareUrl="http://localhost:8080/medic/getListaMedici/";
const getProfilMedic="http://localhost:8080/medic/getProfilMedic/";
const getRecenziiMediciUrl="http://localhost:8080/recenzie/getAll/";
const getServiciiUrl="http://localhost:8080/servicii/getAllServicii/";
const getProgramUrl="http://localhost:8080/recenzie/getAll/";
const getCabineteUrl="http://localhost:8080/cabinet/getAllCabinete";
const getProgramariUrl="http://localhost:8080/programare/getAllProgramari/";
const getProfilCabinet="http://localhost:8080/cabinet/getProfilCabinet/";
const addProgramare="http://localhost:8080/programare/add";
const addRecenzie="http://localhost:8080/recenzie/add";

export default {loginUrl,signUpUrl,getSpecializariUrl,getMediciBySpecializareUrl,getProfilMedic,getRecenziiMediciUrl,getServiciiUrl,getCabineteUrl,getProgramariUrl,getProfilCabinet, addProgramare, addRecenzie}
