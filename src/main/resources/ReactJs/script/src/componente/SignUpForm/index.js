import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";
import ValidationMessage from "../../componente/ValidationMessage/index";
import signUpUrl from "../../Api/Api";
import { CircularProgress } from "material-ui/Progress";
import red from "material-ui/colors/red";
import Button from "material-ui/Button";
import Dialog, {
  DialogActions,
  DialogTitle
} from "material-ui/Dialog";
import Slide from "material-ui/transitions/Slide";
import {withRouter} from 'react-router-dom';
import Icon from 'material-ui/Icon';


class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUsernameError: false,
      isPassError: false,
      isEmailError: false,
      isConfirmPassError: false,
      username: null,
      password: null,
      email: null,
      confpassword: null,
      passErrorMsg: "Camp invalid",
      confpassErrMsg: "Camp invalid",
      emailErrMsg: "Camp invalid",
      userErrMsg: "Introduceti numele de utilizator",
      signUpError: false,
      signUpSuccess: false,
      inProgress: false
    };
  }


  handleClose = () => {
    this.setState({ signUpSuccess: false });
    this.props.history.push('/');
  };

  render() {
    if (this.state.signUpSuccess) {
      return (
        <div >
          <Dialog
            open={this.state.signUpSuccess}
            transition={Transition}
            keepMounted
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle className="divDialog" id="alert-dialog-slide-title">
              {"Congratulations!"}
            </DialogTitle>
            <DialogTitle className="divDialog" id="alert-dialog-slide-title">
              {"You are registration as a user. Thank you!!"}
            </DialogTitle>
            <DialogActions>
              <Button  className="divDialog" onClick={this.handleClose} color="primary">
                Continue
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
    return (
      <div className="formSignupContainerDiv">
        <h className="titleStyles"> Sign Up</h>
        {this.state.signUpError && (
          <p className="stilEroare">Registration did not execut.</p>
        )}
        <form>
          <div className="form-group">
            <div className="textWarningDiv">
              <label> Username </label>
              {this.state.isUsernameError && (
                <ValidationMessage mesaj={this.state.userErrMsg} />
              )}
            </div>
            <input
              type="username"
              className="form-control"
              placeholder="Username"
              onChange={text =>
                this.setState({
                  username: text.target.value,
                  isUsernameError: false
                })
              }
            />
          </div>

          <div className="form-group">
            <div className="textWarningDiv">
              <label> E-mail</label>
              {this.state.isEmailError && (
                <ValidationMessage mesaj={this.state.emailErrMsg} />
              )}
            </div>
            <input
              type="email"
              className="form-control"
              placeholder="E-mail"
              onChange={text =>
                this.setState({
                  email: text.target.value,
                  isEmailError: false
                })
              }
            />
          </div>

          <div className="form-group">
            <div className="textWarningDiv">
              <label> Password </label>
              {this.state.isPassError && (
                <ValidationMessage mesaj={this.state.passErrorMsg} />
              )}
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={text =>
                this.setState({
                  password: text.target.value,
                  isPassError: false
                })
              }
            />
          </div>

          <div className="form-group">
            <div className="textWarningDiv">
              <label> Confirm password </label>
              {this.state.isConfirmPassError && (
                <ValidationMessage mesaj={this.state.confpassErrMsg} />
              )}
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={text =>
                this.setState({
                  confpassword: text.target.value,
                  isConfirmPassError: false
                })
              }
            />
          </div>
          {!this.state.inProgress && (
            <div  className="SignUpBtnStyle">
            <Button
            style={{fontSize:15 }}
            size="large"
            variant="raised"
            disableRipple
            color="primary"
            onClick={() => this._onLoginPress()}
            >
              Sign Up
              <Icon><img src={require("../../assets/signup.png")} className="icon" alt="load"/></Icon>
            </Button>
            </div>
          )}
          {this.state.inProgress && (
            <div>
               <img src={require("../../assets/gif.gif")} className="styleProgressSignUpForm" alt="load"/>
            </div>
          )}
        </form>
      </div>
    );
  }

  _validation() {
    if (this.state.username === null || this.state.username === "") {
      this.setState({ isUsernameError: true });
    }

    if (this.state.password === null || this.state.password === "") {
      this.setState({ isPassError: true, passErrorMsg: "Introduceti parola" });
    }

    if (this.state.confpassword === null || this.state.confpassword === "") {
      this.setState({ isConfirmPassError: true });
    }

    if (!this.validateEmail(this.state.email)) {
      this.setState({ isEmailError: true, emailErrMsg: "Email invalid" });
    }

    if (this.state.email === null || this.state.email === "") {
      this.setState({
        isEmailError: true,
        emailErrMsg: "Introduceti adresa de email"
      });
    }

    if (this.state.password !== this.state.confpassword) {
      this.setState({
        isConfirmPassError: true,
        confpassErrMsg: "Verificati parola de confirmare!"
      });
    }

    if (
      this.state.isEmailError ||
      this.state.isPassError ||
      this.state.isUsernameError
    ) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  _onLoginPress() {
    this.setState({
      inProgress: true
    });
    try {
      if (!this._validation()) {
        throw new Error("Try again!");
      }
      this._callApi();
      this.setState({
        inProgress: false
      });
    } catch (error) {
      console.log(error.message);
      this.setState({
        inProgress: false
      });
    }
  }
  async _callApi() {
    try {
      const resp = await fetch(signUpUrl.signUpUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          email: this.state.email
        })
      });

      if (resp.status !== 200) {
        throw new Error("signup error");
      }
      this.setState({
        signUpSuccess: true
      });
    } catch (err) {
      console.log("Error --:" + err.message);
      this.setState({
        signUpError: true
      });
    }
  }
}
function Transition(props) {
  return <Slide direction="up" {...props} />;
}
export default withRouter(SignUpForm);
