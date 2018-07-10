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
      showDateMedic: true,
      showFormCabinet: false,
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
              {"Felicitari!"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Your information has been registration! Thank you!
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
        {this.state.showDateMedic && (
          <FormDoctorInfo date={this._getDateMedic.bind(this)} />
        )}
        {this.state.showFormCabinet && (
          <OfficeForm date={this._getDateCabinet.bind(this)} />
        )}
      </div>
    );
  }

  _getDateCabinet = officeInfo => {
    console.log(this._validation2(officeInfo)+" validare medic 2")
    let valid = this._validation2(officeInfo);
    if (valid) {
      this.setState({ officeInfo: officeInfo });
    } else {
      this.setState({ isError: true });
    }
    this._onPress(officeInfo);
  };

  _getDateMedic = doctorInfo => {
    
    console.log(this._validation(doctorInfo)+" validare medic")
    let valid = this._validation(doctorInfo);
    if (valid) {
      this.setState({
        doctorInfo: doctorInfo,
        showDateMedic: false,
        showFormCabinet: true,
        isError: false
      });
    } else {
      this.setState({ isError: true });
    }
  };

  _validation(date) {
    
    console.log(this.validateEmail(date.email)+" validare mail")
    console.log(this.validareTel(date.numarTelefon)+" validare telefon")
    if (
      date.nume === null ||
      date.nume === "" ||
      date.prenume === null ||
      date.prenume === "" ||
      date.email === null ||
      date.email === "" ||
      !this.validateEmail(date.email) ||
      date.numarTelefon === null ||
      date.numarTelefon === "" ||
      !this.validareTel(date.numarTelefon)
    ) {
      return false;
    }
    return true;
  }
  _validation2(date) {
    if (
      date.denumire === null ||
      date.denumire === "" ||
      date.adresaCab === null ||
      date.adresaCab === ""
    ) {
      return false;
    }
    return true;
  }

  async _onPress(date) {
    
    try {
      let listaNR = [];
      listaNR.push(this.state.doctorInfo.numarTelefon);

      let listaSpec = [];
      listaSpec.push(this.state.doctorInfo.specializare);

      let listaCabinet = [];
      let response = await fetch("http://localhost:8080/medic/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.props.token
        },
        body: JSON.stringify({
          nume: this.state.doctorInfo.nume,
          prenume: this.state.doctorInfo.prenume,
          numereTel: listaNR,
          email: this.state.doctorInfo.email,
          facebook: this.state.doctorInfo.facebook,
          specializare: listaSpec,
          applicationUser:this.props.username,
          cabinete: [
            {
              cabAdress: date.adresaCab,
              tip: date.tip,
              denumire: date.denumire
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
  
  validareTel(numarTelefon) {
    if (numarTelefon.length !== 10 || isNaN(numarTelefon)) {
      return false;
    }
    return true;
  }
}
function Transition(props) {
  return <Slide direction="up" {...props} />;
}
export default withRouter(SignUpDoctorsForm);
