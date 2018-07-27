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
      <Route exact path="/" component={Welcome} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/doctors" component={Doctors} />
      <Route exact path="/offices" component={Offices} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/registrationDoctor" component={SignUpDoctors} />
      <Route exact path="/appointments" component={Appointments} />
      <Route exact path="/doctor" component={DoctorProfile} />
      <Route exact path="/office" component={OfficeProfile} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/review" component={Review} />
      <Route exact path="/workpanel" component={WorkPanel} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
