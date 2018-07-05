import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

class CardWorkPanel extends Component {

  render() {
    console.log(this.props.dataProgramare, "lista");

    let currentTime = new Date()
    let timeCurrent=currentTime.getTime();
    console.log(timeCurrent, "data curenta timestamp")
    

    let expiryTime = new Date(this.props.dataProgramare)
    let timeExpiry=expiryTime.getTime();
    console.log(timeExpiry, "data cartonas timestamp")

    if (timeCurrent < timeExpiry) {
    console.log('Good')

    return (
  
      <div className="divCardWorkPanel">
        <div className="divCardWorkPanel2">
          <p className="stylePatientInfo">Data: {this.renderOra()}</p>
          <p className="stylePatientInfo">Nume: {this.props.firstname}</p>
          <p className="stylePatientInfo">Prenume: {this.props.lastname}</p>
          <p className="stylePatientInfo">E-mail: {this.props.mail}</p>
          <p className="stylePatientInfo">Numar telefon: {this.props.tel}</p>
        </div>
      </div>
    );}
    else{ return null;
    }
  }

  renderOra() {
    let date = new Date(this.props.dataProgramare);
    let convertedDate =
      date.getDate() +
      "." +
      (date.getMonth() + 1) +
      "." +
      date.getFullYear()+ ", ora : " + date.getHours()+ ":" + date.getMinutes();
    console.log(convertedDate, "data");
    return convertedDate;
  }

   
}


export default withRouter(CardWorkPanel);
