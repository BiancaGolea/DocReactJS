import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";
import Dropdown from "../DropdownComponent/index";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drop: false
    };
  }

  render() {
    console.log(this.props.isDoctor + " is Medic");
    return (
      <div className="headerContainerDiv">
        <nav class="navbar navbar-inverse">
          <img src={logo} className="logoStyle" alt="logo" />

          <div class="container-fluid">
            <ul class="nav navbar-nav navbar-right">
              <li>
                <Link to={"/"}>Welcome Page</Link>
              </li>

              {this.props.isDoctor &&
                !this.props.isWelcomePage &&
                !this.props.isLoginPage &&
                !this.props.isSignUp && (
                  <li>
                    <Link to={"/workpanel"}>My profile</Link>
                  </li>
                )}

              {!this.props.isDoctor &&
                !this.props.isWelcomePage &&
                !this.props.isLoginPage &&
                !this.props.isSignUp && (
                  <li>
                    <Link to={"/registrationDoctor"}>
                      Registration as doctor
                    </Link>
                  </li>
                )}

              {!this.props.isWelcomePage &&
                !this.props.isLoginPage &&
                !this.props.isSignUp && (
                  <li>
                    <Link to={""}>
                      <p onClick={() => this.changeDropState()}> Doctors</p>
                      {this.state.drop && <Dropdown />}
                    </Link>
                  </li>
                )}
              {!this.props.isWelcomePage &&
                !this.props.isLoginPage &&
                !this.props.isSignUp && (
                  <li>
                    <Link to={"/offices"}>Offices</Link>
                  </li>
                )}
              {!this.props.isSignUp &&
                this.props.isWelcomePage && (
                  <li>
                    <Link to={"/signUp"}>
                      <span class="glyphicon glyphicon-user" /> Sign Up
                    </Link>
                  </li>
                )}
              {!this.props.isLoginPage &&
                this.props.isWelcomePage && (
                  <li>
                    <Link to={"/login"}>
                      <span class="glyphicon glyphicon-log-in" /> Login
                    </Link>
                  </li>
                )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }

  changeDropState() {
    if (this.state.drop === false)
      this.setState({
        drop: true
      });
    else
      this.setState({
        drop: false
      });
  }
}

export default Header;
