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
import click from "../../assets/click.png";
import signup from "../../assets//signup.png";

const options = ["10:00", "10:30", "11:00", "11:30", "12:00"];

class AppointmentsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      lastname: null,
      email: "",
      phone: null,
      date: null,
      hour: null,
      appointmentError: false,
      appointmentSuccess: false,
      open: false,
      age: "",
      anchorEl: null
    };
  }
  handleClose = () => {
    this.setState({ signUpSuccess: false });
    this.props.history.push({
      pathname: "/doctor",
      state: { detail: this.props.location.state.idBooking }
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

    if (this.state.appointmentSuccess) {
      return (
        <div>
          <Dialog
            open={this.state.appointmentSuccess}
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
                Your appointment has been registrated! Thank you!
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
    if (this.state.date === null) {
      return (
        <div className="calendar">
          <Calendar
            //  tileDisabled={(date) => date.getDay() === 1}
            onClickDay={date => {
              console.log(date.getDate() + "-" + (date.getMonth() + 1));
              this.setState({
                date: date.getMonth() + 1 + "-" + date.getDate()
              });
            }}
            tileDisabled={date => disableDates(date)}
            onChange={() => console.log("Calendar")}
            value={this.state.date}
          />
        </div>
      );
    }

    if (this.state.appointmentError) {
      return (
        <div>
          <Dialog
            open={this.state.appointmentError}
            transition={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">{"Sorry!"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                It is possible the information The previously inserted data may
                be wrong! Please, complete the form again. Thank you!
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
        <form className=" formStyle">
          <label className="labelStyles">
            {" "}
            Name
            <div className={this.state.isNameUserError ? "inputError" : ""}>
              <input
                type="username"
                className="form-control"
                placeholder={this.state.isNameUserError ? "Error message" : ""}
                onChange={event =>
                  this.setState({
                    name: event.target.value,
                    isNameUserError: false
                  })
                }
              />
            </div>
          </label>
          <label className="labelStyles">
            {" "}
            LastName
            <div className={this.state.isLastnameUserError ? "inputError" : ""}>
              <input
                type="name"
                className="form-control"
                placeholder={
                  this.state.isLastnameUserError ? "Error message" : ""
                }
                onChange={event =>
                  this.setState({
                    lastname: event.target.value,
                    isLastnameUserError: false
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
                id="test"
                type="email"
                value={this.state.email}
                className="form-control"
                placeholder={
                  this.state.isEmailError
                    ? "Invalid email"
                    : "ex: adresamail@email.com"
                }
                onChange={event => {
                  this.setState({
                    email: event.target.value,
                    isEmailError: false
                  });
                }}
              />
            </div>
          </label>
          <label className="labelStyles">
            {" "}
            Phone number
            <div className={this.state.isPhoneError ? "inputError" : ""}>
              <input
                type="name"
                value={this.state.phone}
                className="form-control"
                placeholder={this.state.isPhoneError ? "Error message" : ""}
                onChange={event =>
                  this.setState({
                    phone: event.target.value,
                    isPhoneError: false
                  })
                }
              />
            </div>
          </label>{" "}
          <div className={this.state.isHourError ? "inputError" : ""}>
            <div className="divHour">
              <h className={"hourAppointment"}> Appointment hour</h>
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
                    {!this.state.hour && (
                      <img
                        src={click}
                        className="divImgAppointments"
                        alt="logo"
                      />
                    )}
                    {this.state.hour && <p> {this.state.hour} </p>}
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
                          hour: option,
                          anchorEl: null,
                          isHourError: false,
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
                <img src={signup} className="divImgAppointments" alt="load" />
              </Icon>
            </Button>
          </div>
        </form>
      </div>
    );
  }

  _validateStates() {
    if (
      this.state.name === null ||
      this.state.name === "" ||
      this.state.lastname === null ||
      this.state.lastname === "" ||
      this.state.phone === null ||
      this.state.phone === "" ||
      !this.validatePhone(this.state.phone) ||
      this.state.email === null ||
      this.state.email === "" ||
      !this.validateEmail(this.state.email) ||
      this.state.hour === null ||
      this.state.hour === "" ||
      this.state.date === null ||
      this.state.date === ""
    ) {
      return false;
    }
    return true;
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());
  }
  validatePhone(phone) {
    if (phone === null || phone.length !== 10 || isNaN(phone)) {
      return false;
    }

    return true;
  }

  _onSavePress() {
    if (this._validateStates()) {
      let conversionData =
        this.state.date.length == 4 ? "0" + this.state.date : this.state.date;
      let dateFormat =
        "2018-" + conversionData + "T" + this.state.hour + ":00Z";
      let dataTimestamp = new Date(dateFormat);
      let appointment = {
        data: dataTimestamp.getTime(),
        nume: this.state.name,
        prenume: this.state.lastname,
        email: this.state.email,
        nrtel: this.state.phone,
        medic: {
          idMed: this.props.idDoctor
        }
      };
      this._callAPI(appointment);
    } else {
      this.setState({ appointmentError: true });
    }
  }

  async _callAPI(scheduleObj) {
    this.setState({ inProgress: true });
    try {
      const resp = await fetch(Api.addAppointmentUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.props.token
        },
        body: JSON.stringify({
          data: scheduleObj.data,
          nume: scheduleObj.nume,
          prenume: scheduleObj.prenume,
          email: scheduleObj.email,
          nrtel: scheduleObj.nrtel,
          medic: scheduleObj.medic
        })
      });

      if (resp.status !== 201) {
        throw new Error(JSON.stringify(resp));
      }
      this.setState({ inProgress: false, appointmentSuccess: true });
    } catch (error) {
      this.setState({ appointmentError: true, inProgress: false });
    }
  }
}

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function disableDates(data) {
  let dataToday = new Date();
  let timeCurrent = dataToday.getTime();

  if (
    data.date.getDay() === 0 ||
    data.date.getDay() === 6 ||
    data.date.getDate() === 27 ||
    data.date.getTime() < timeCurrent
  ) {
    return true;
  }
  return false;
}
export default withRouter(AppointmentsForm);
