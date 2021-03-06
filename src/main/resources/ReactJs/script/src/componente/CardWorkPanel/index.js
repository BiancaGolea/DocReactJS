import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class CardWorkPanel extends Component {
  render() {
    console.log(this.props.dateOfBooking, "lista");

    let currentTime = new Date();
    let timeCurrent = currentTime.getTime();
    console.log(timeCurrent, "data curenta timestamp");

    let expiryTime = new Date(this.props.dateOfBooking);
    let timeExpiry = expiryTime.getTime();
    console.log(timeExpiry, "data cartonas timestamp");

    if (timeCurrent < timeExpiry) {
      console.log("Good");

      return (
        <div className="divCardWorkPanel">
          <div className="divCardWorkPanel2">
            <p className="stylePatientInfo">Date: {this.renderHour()}</p>
            <p className="stylePatientInfo">Name: {this.props.firstname}</p>
            <p className="stylePatientInfo">LastName: {this.props.lastname}</p>
            <p className="stylePatientInfo">E-mail: {this.props.mail}</p>
            <p className="stylePatientInfo">
              Number phone: {this.props.number}
            </p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  renderHour() {
    let date = new Date(this.props.dateOfBooking);
    let convertedDate =
      date.getDate() +
      "." +
      (date.getMonth() + 1) +
      "." +
      date.getFullYear() +
      ", ora : " +
      date.getHours() +
      ":" +
      date.getMinutes();
    console.log(convertedDate, "data");
    return convertedDate;
  }
}

export default withRouter(CardWorkPanel);
