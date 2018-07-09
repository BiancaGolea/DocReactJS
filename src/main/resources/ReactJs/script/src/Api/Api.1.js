import { ContentSort } from "material-ui";


//url catre Ap
const base="http://localhost:3800"
const loginUrl= base+"users/signin";
const signUpUrl=base+"users/signup";
const getSpecializariUrl=base+"/specializari";
const getDoctorsBySpecializationUrl=base+"/medic";
const getDoctorProfile=base+"/medic";
const getRecenziiMediciUrl=base+"medic/recenzie";
const getServiciiUrl=base+"medic/servicii";
const getProgramUrl=base+"/recenzie";
const getOfficesUrl=base+"/cabinet";
const getProgramariUrl=base+"/programare";
const getOfficeProfile=base+"/cabinet";
const addProgramare=base+"/programare";
const addRecenzie=base+"/recenzie";

export default {loginUrl,signUpUrl,getSpecializariUrl,getDoctorsBySpecializationUrl,getDoctorProfile,getRecenziiMediciUrl,getServiciiUrl,getOfficesUrl,getProgramariUrl,getOfficeProfile, addProgramare, addRecenzie}
