import { ContentSort } from "material-ui";

//url catre Api
const loginUrl="http://localhost:8080/login";
const signUpUrl="http://localhost:8080/sign-up";
const getSpecializationsUrl="http://localhost:8080/specializari/getAll";
const getDoctorsBySpecializationUrl="http://localhost:8080/medic/getListaMedici/";
const getDoctorProfile="http://localhost:8080/medic/getProfilMedic/";
const getDoctorReviewUrl="http://localhost:8080/recenzie/getAll/";
const getServicesUrl="http://localhost:8080/servicii/getAllServicii/";
const getScheduleUrl="http://localhost:8080/recenzie/getAll/";
const getOfficesUrl="http://localhost:8080/cabinet/getAllCabinete";
const getAppointmentsUrl="http://localhost:8080/programare/getAllProgramari/";
const getOfficeProfile="http://localhost:8080/cabinet/getProfilCabinet/";
const addProgramare="http://localhost:8080/programare/add";
const addReview="http://localhost:8080/recenzie/add";

export default {loginUrl,signUpUrl,getSpecializationsUrl,getDoctorsBySpecializationUrl,getDoctorProfile,getDoctorReviewUrl,getServicesUrl,getOfficesUrl,getAppointmentsUrl,getOfficeProfile, addProgramare, addReview,getScheduleUrl}
