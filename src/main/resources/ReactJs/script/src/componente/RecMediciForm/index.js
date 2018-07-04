import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";
import { withRouter } from "react-router-dom";
import FormDateMedic from "./FormDateMedic";
import FormCabinet from "./FormCabinet";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import Slide from "material-ui/transitions/Slide";

class RecMediciForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDateMedic: true,
      showFormCabinet: false,
      Success: false,
      isError: false,
      dateMedic: null,
      dateCabinet: null
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
                Datele dumneavoastra s-au inregistrat! Va multumesc!
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Continua
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
    return (
      <div className="divContent">
        {this.state.isError && (
          <p> Va rugam sa verificati din nou datele introduse! </p>
        )}
        {this.state.showDateMedic && (
          <FormDateMedic date={this._getDateMedic.bind(this)} />
        )}
        {this.state.showFormCabinet && (
          <FormCabinet date={this._getDateCabinet.bind(this)} />
        )}
      </div>
    );
  }

  _getDateCabinet = dateCabinet => {
    console.log(this._validation2(dateCabinet)+" validare medic 2")
    let valid = this._validation2(dateCabinet);
    if (valid) {
      this.setState({ dateCabinet: dateCabinet });
    } else {
      this.setState({ isError: true });
    }
    this._onPress(dateCabinet);
  };

  _getDateMedic = dateMedic => {
    console.log(this._validation(dateMedic)+" validare medic")
    let valid = this._validation(dateMedic);
    if (valid) {
      this.setState({
        dateMedic: dateMedic,
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
      listaNR.push(this.state.dateMedic.numarTelefon);

      let listaSpec = [];
      listaSpec.push(this.state.dateMedic.specializare);

      let listaCabinet = [];
      let response = await fetch("http://localhost:8080/medic/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.props.token
        },
        body: JSON.stringify({
          nume: this.state.dateMedic.nume,
          prenume: this.state.dateMedic.prenume,
          numereTel: listaNR,
          email: this.state.dateMedic.email,
          facebook: this.state.dateMedic.facebook,
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

      if (response.status != 201) {
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
  
  validareTel(telefon) {
    if (telefon.length !== 10 || isNaN(telefon)) {
      return false;
    }
    return true;
  }
}
function Transition(props) {
  return <Slide direction="up" {...props} />;
}
export default withRouter(RecMediciForm);
