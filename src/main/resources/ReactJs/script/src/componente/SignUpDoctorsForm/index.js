import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";
import { withRouter } from "react-router-dom";
import FormDoctorInfo from "./FormDoctorInfo";
import OfficeForm from "./OfficeForm";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import Slide from "material-ui/transitions/Slide";

class SignUpDoctorsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDoctorInfo: true,
      showFormOffice: false,
      Success: false,
      isError: false,
      doctorInfo: null,
      officeInfo: null
    };
  }
  handleClose = () => {
    this.updateRole();
    this.setState({ Success: false });
    this.props.history.push("/");
  };

  render() {
    if (this.state.Success) {
      return (
        <div>
          <Dialog
            open={this.state.Success}
            transition={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              {"Congratulations!"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Your informations has been registration! Thank you!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Continue
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
    return (
      <div className="divContent">
        {this.state.isError && (
          <p> Please verify your personal dates again! </p>
        )}
        {this.state.showDoctorInfo && (
          <FormDoctorInfo date={this._getDoctorInfo.bind(this)} />
        )}
        {this.state.showFormOffice && (
          <OfficeForm date={this._getOfficeInfo.bind(this)} />
        )}
      </div>
    );
  }

  _getOfficeInfo = officeInfo => {
    console.log(this._validation2(officeInfo)+" validare medic 2")
    let valid = this._validation2(officeInfo);
    if (valid) {
      this.setState({ officeInfo: officeInfo });
    } else {
      this.setState({ isError: true });
    }
    this._onPress(officeInfo);
  };

  _getDoctorInfo = doctorInfo => {
    
    console.log(this._validation(doctorInfo)+" validare medic")
    let valid = this._validation(doctorInfo);
    if (valid) {
      this.setState({
        doctorInfo: doctorInfo,
        showDoctorInfo: false,
        showFormOffice: true,
        isError: false
      });
    } else {
      this.setState({ isError: true });
    }
  };

  _validation(date) {
    
    console.log(this.validateEmail(date.email)+" validare mail")
    console.log(this.validationPhone(date.phoneNumber)+" validare telefon")
    if (
      date.name === null ||
      date.name === "" ||
      date.lastname === null ||
      date.lastname === "" ||
      date.email === null ||
      date.email === "" ||
      !this.validateEmail(date.email) ||
      date.phoneNumber === null ||
      date.phoneNumber === "" ||
      !this.validationPhone(date.phoneNumber)
    ) {
      return false;
    }
    return true;
  }
  _validation2(date) {
    if (
      date.nameOffice === null ||
      date.nameOffice === "" ||
      date.addressOffice === null ||
      date.addressOffice === ""
    ) {
      return false;
    }
    return true;
  }

  async _onPress(date) {
    
    try {
      let listNumber = [];
      listNumber.push(this.state.doctorInfo.phoneNumber);

      let listSpecialization = [];
      listSpecialization.push(this.state.doctorInfo.specialization);

      let listOffice = [];
      let response = await fetch("http://localhost:8080/medic/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.props.token
        },
        body: JSON.stringify({
          nume: this.state.doctorInfo.name,
          prenume: this.state.doctorInfo.lastname,
          numereTel: listNumber,
          email: this.state.doctorInfo.email,
          facebook: this.state.doctorInfo.facebook,
          specializare: listSpecialization,
          applicationUser:this.props.username,
          cabinete: [
            {
              cabAdress: date.addressOffice,
              tip: date.typeOffice,
              denumire: date.nameOffice
            }
          ]
        })
      });
      console.log(this._onPress(JSON.stringify(response)), "response")
      if (response.status !== 201) {
        throw new Error("Error");
      } else {
        this.setState({ Success: true });
      }
    } catch (error) {
      this.setState({ isError: true });
    }
  }

  async updateRole() {
    try {
      const url = "http://localhost:8080/" + this.props.username + "/addRole";
      let resp = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: this.props.token,
          "Content-Type": "application/json"
        }
      });
    } catch (error) {
      console.log(error);
    }
   
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  validationPhone(phoneNumber) {
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      return false;
    }
    return true;
  }
}
function Transition(props) {
  return <Slide direction="up" {...props} />;
}
export default withRouter(SignUpDoctorsForm);
