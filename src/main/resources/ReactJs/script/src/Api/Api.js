import {
    ContentSort
} from "material-ui";

// Url catre Api
const loginUrl = "http://localhost:8080/login";
const signUpUrl = "http://localhost:8080/sign-up";
const getSpecializationsUrl = "http://localhost:8080/specializari/getAll";
const getDoctorsBySpecializationUrl = "http://localhost:8080/medic/getListaMedici/";
const getDoctorProfileUrl = "http://localhost:8080/medic/getProfilMedic/";
const getDoctorReviewUrl = "http://localhost:8080/recenzie/getAll/";
const getServicesUrl = "http://localhost:8080/servicii/getAllServicii/";
const getScheduleUrl = "http://localhost:8080/recenzie/getAll/";
const getOfficesUrl = "http://localhost:8080/cabinet/getAllCabinete";
const getAppointmentsUrl = "http://localhost:8080/programare/getAllProgramari/";
const getOfficeProfileUrl = "http://localhost:8080/cabinet/getProfilCabinet/";
const addAppointmentUrl = "http://localhost:8080/programare/add";
const addReviewUrl = "http://localhost:8080/recenzie/add";

export default {
    loginUrl,
    signUpUrl,
    getSpecializationsUrl,
    getDoctorsBySpecializationUrl,
    getDoctorProfileUrl,
    getDoctorReviewUrl,
    getServicesUrl,
    getOfficesUrl,
    getAppointmentsUrl,
    getOfficeProfileUrl,
    addAppointmentUrl,
    addReviewUrl,
    getScheduleUrl
}
