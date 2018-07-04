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
  
      <div className="divCartonasWorkPanel">
        <div className="divCartonasWorkPanel2">
          <p className="styleDatePacient">Data: {this.renderOra()}</p>
          <p className="styleDatePacient">Nume: {this.props.firstname}</p>
          <p className="styleDatePacient">Prenume: {this.props.lastname}</p>
          <p className="styleDatePacient">E-mail: {this.props.mail}</p>
          <p className="styleDatePacient">Numar telefon: {this.props.tel}</p>
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
