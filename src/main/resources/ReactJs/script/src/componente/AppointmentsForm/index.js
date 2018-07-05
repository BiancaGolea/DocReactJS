import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";
import Button from "material-ui/Button";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import Slide from "material-ui/transitions/Slide";
import { withRouter } from "react-router-dom";
import Calendar from "react-calendar";
import Select from "material-ui/Select";
import IconButton from "material-ui/IconButton";
import Menu, { MenuItem } from "material-ui/Menu";
import Icon from "material-ui/Icon";
import Progress from "../../componente/Progress/index";
import Api from "../../Api/Api";

const options = ["10:00", "10:30", "11:00", "11:30", "12:00"];

class AppointmentsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nume: null,
      prenume: null,
      email: "",
      telefon: null,
      data: null,
      ora: null,
      programareError: false,
      programareSuccess: false,
      open: false,
      age: "",
      anchorEl: null
    };
  }
  handleClose = () => {
    this.setState({ signUpSuccess: false });
    this.props.history.push({
      pathname: "/medic",
      state: { detail: this.props.location.state.idRezervare }
    });
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCloser = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {
   
    const { anchorEl } = this.state;
    if (this.state.inProgress) {
      return <Progress />;
    }

    if (this.state.programareSuccess) {
      return (
        <div>
          <Dialog
            open={this.state.programareSuccess}
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
                Programarea dumneavoastra s-a inregistrat! Va multumesc!
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
    if (this.state.data === null) {
      return (
        
        <div className="calendar">
          <Calendar
          //  tileDisabled={(date) => date.getDay() === 1}
            onClickDay={data => {
              console.log(data.getDate() + "-" + (data.getMonth() + 1));
              this.setState({
                data: data.getMonth() + 1 + "-" + data.getDate()
              });
            }}
             tileDisabled={date => disableDates(date)}
            onChange={() => console.log("Calendar")}
            value={this.state.data}
          />
        </div>
      );
    }


    if(this.state.programareError){
      return(
        <div>
        <Dialog
        open={this.state.programareError}
        transition={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Ne pare rau!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           S-ar putea ca datele introduse anterior sa fie gresite! Va rugam completati din nou formularul. Va multumim!
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

        <form className=" formStyle">
          <label className="labelStyles">
            {" "}
            Nume
            <div className={this.state.isNumeClientError ? "inputError" : ""}>
              <input
                type="username"
                className="form-control"
                placeholder={
                  this.state.isNumeClientError ? "Mesaj de eroare" : ""
                }
                onChange={text =>
                  this.setState({
                    nume: text.target.value,
                    isNumeClientError: false
                  })
                }
              />
            </div>
          </label>
          <label className="labelStyles">
            {" "}
            Prenume
            <div
              className={this.state.isPrenumeClientError ? "inputError" : ""}
            >
              <input
                type="name"
                className="form-control"
                placeholder={
                  this.state.isPrenumeClientError ? "Mesaj de eroare" : ""
                }
                onChange={text =>
                  this.setState({
                    prenume: text.target.value,
                    isPrenumeClientError: false
                  })
                }
              />
            </div>
          </label>
          <label className="labelStyles">
            {" "}
            E-mail
            <div className={this.state.isEmailError ? "inputError" : ""}>
              <input
                type="email"
                value={this.state.email}
                className="form-control"
                placeholder={
                  this.state.isEmailError
                    ? "Invalid email"
                    : "ex: adresamail@email.com"
                }
                onChange={text => {
                  this.setState({
                    email: text.target.value,
                    isEmailError: false
                  });
                }}
              />
            </div>
          </label>
          <label className="labelStyles">
            {" "}
            Numar telefon
            <div className={this.state.isTelefonError ? "inputError" : ""}>
              <input
                type="name"
                value={this.state.telefon}
                className="form-control"
                placeholder={this.state.isTelefonError ? "Mesaj de eroare" : ""}
                onChange={text =>
                  this.setState({
                    telefon: text.target.value,
                    isTelefonError: false
                  })
                }
              />
            </div>
          </label>{" "}
          <div className={this.state.isOraError ? "inputError" : ""}>
            <div className="divHour">
              <h className={"hourAppointment"}> Ora programarii</h>
            </div>
            <div className="divSelect">
              <div>
                <IconButton
                  aria-label="More"
                  aria-owns={anchorEl ? "long-menu" : null}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  <div>
                    {!this.state.ora && (
                      <img
                        src={require("../../assets/click.png")}
                        className="divImgAppointments"
                        alt="logo"
                      />
                    )}
                    {this.state.ora && <p> {this.state.ora} </p>}
                  </div>
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose2}
                  PaperProps={{
                    style: {
                      maxHeight: 48 * 4.5,
                      width: 200
                    }
                  }}
                >
                  {options.map(option => (
                    <MenuItem
                      key={option}
                      onClick={() =>
                        this.setState({
                          ora: option,
                          anchorEl: null,
                          isOraError: false,
                          isEmailError: false,
                          isDataError: false
                        })
                      }
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            </div>
          </div>
          <div className="btnStyle">
            <Button
              size="large"
              style={{ fontSize: 15 }}
              color="green"
              text-color="white"
              onClick={() => this._onSavePress()}
            >
              Save
              <Icon>
                <img
                  src={require("../../assets/signup.png")}
                  className="divImgAppointments"
                  alt="load"
                />
              </Icon>
            </Button>
          </div>
        </form>
      </div>
    );
  }

  _validation() {
   
  
    if (
    this.state.nume === null || this.state.nume === "" ||
    this.state.prenume === null || this.state.prenume === "" ||
    this.state.telefon === null || this.state.telefon === "" ||
    !this.validareTel(this.state.telefon) ||  
    this.state.email === null || this.state.email=== "" ||
    !this.validateEmail(this.state.email) ||
    this.state.ora === null || this.state.ora === "" || 
    this.state.data === null || this.state.data === ""
    

  ) {
      return false;
  }
      return true;
    
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    return re.test(String(email).toLowerCase());
  }
  validareTel(telefon) {
    if (telefon===null ||telefon.length !== 10 || isNaN(telefon)) {
      return false;
    }
  
    return true;
  }
 

  _onSavePress() {
   
      if (this._validation()) {
      
        let conversieData =
          this.state.data.length == 4 ? "0" + this.state.data : this.state.data;
        let dateFormat =
          "2018-" + conversieData + "T" + this.state.ora + ":00Z";
        let dataTimestamp = new Date(dateFormat);
        let programare = {
          data: dataTimestamp.getTime(),
          nume: this.state.nume,
          prenume: this.state.prenume,
          email: this.state.email,
          nrtel: this.state.telefon,
          medic: {
            idMed: this.props.idDoctor
            
          }
          
        };
        this._callAPI(programare);
      } else{
        this.setState({programareError:true})
      }
  }

  async _callAPI(programObj) {
    
    this.setState({ inProgress: true });
    try {
      const resp = await fetch(Api.addProgramare, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.props.token
        },
        body: JSON.stringify({
          data: programObj.data,
          nume: programObj.nume,
          prenume: programObj.prenume,
          email: programObj.email,
          nrtel: programObj.nrtel,
          medic: programObj.medic
        })
      });
     
      if (resp.status !== 201) {
        throw new Error(JSON.stringify(resp));
      }
      this.setState({ inProgress: false, programareSuccess:true });
    } catch (error) {
      this.setState({ programareError: true, inProgress:false});
    }
  }
}

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function disableDates(data) {
  let dataAzi = new Date();

  if (data.date.getDay() === 0) {
    return true;
  }
  return false;
}
export default withRouter(AppointmentsForm);
