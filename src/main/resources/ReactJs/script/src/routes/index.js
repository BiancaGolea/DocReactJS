import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "../pages/Welcome/index";
import Login from "../pages/Login/index";
import Doctors from "../pages/Doctors/index";
import Offices from "../pages/Offices/index";
import SignUp from "../pages/SignUp/index";
import SignUpDoctors from "../pages/SignUpDoctors/index";
import Appointments from "../pages/Appointments/index";
import DoctorProfile from "../pages/DoctorProfile/index";
import OfficeProfile from "../pages/OfficeProfile/index";
import Services from "../pages/Services/index";
import Review from "../pages/Review/index";
import WorkPanel from "../pages/WorkPanel/index";

const Routes = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path='/' component={Welcome} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/medici' component={Doctors} />
    <Route exact path='/cabinete' component={Offices} />
    <Route exact path='/signUp' component={SignUp} />
    <Route exact path='/recmedici' component={SignUpDoctors} />
    <Route exact path='/programari' component={Appointments} />
    <Route exact path='/medic' component={DoctorProfile} />
    <Route exact path='/cabinet' component={OfficeProfile} />
    <Route exact path='/servicii' component={Services} />
    <Route exact path='/recenzie' component={Review} />
    <Route exact path='/workpanel' component={WorkPanel} />



    </Switch>
  </BrowserRouter>
);

export default Routes;