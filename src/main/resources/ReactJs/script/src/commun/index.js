import {
    combineReducers
} from "redux";
import authReducer from "./ReduxReducers/AuthReducer";
import SpecializationsReducer from "./ReduxReducers/SpecializationsReducer";
import listOfDoctorsBySpecialization from "./ReduxReducers/ListOfDoctorsBySpecializationReducer";
import DoctorProfile from "./ReduxReducers/DoctorProfileReducer";
import Services from "./ReduxReducers/ServicesReducer";
import DoctorReview from "./ReduxReducers/DoctorReviewReducer";
import Offices from "./ReduxReducers/OfficesReducer";
import OfficeProfile from "./ReduxReducers/OfficeProfileReducer";
import Appointments from "./ReduxReducers/AppointmentsReducer";

export default combineReducers({
    authReducer: authReducer,
    specializationsReducer: SpecializationsReducer,
    listOfDoctorsBySpecialization: listOfDoctorsBySpecialization,
    doctorProfileReducer: DoctorProfile,
    doctorService: Services,
    doctorReview: DoctorReview,
    officesList: Offices,
    officeProfileReducer: OfficeProfile,
    appointments: Appointments,
});