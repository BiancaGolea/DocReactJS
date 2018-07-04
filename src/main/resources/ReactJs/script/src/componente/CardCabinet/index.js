import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";
import Rating from "react-rating";
import { withRouter } from "react-router-dom";

class CardCabinet extends Component {
  render() {
    return (
      <div className="divCard">
        <div className="divImgCabinet">
          <img src={require("../../assets/avatar.png")} className="imgStyle" />

          <Rating
            placeholderRating={3.88}
            emptySymbol={
              <img
                src={require("../../assets/star-grey.png")}
                className="icon"
              />
            }
            placeholderSymbol={
              <img
                src={require("../../assets/star-red.png")}
                className="icon"
              />
            }
            fullSymbol={
              <img
                src={require("../../assets/star-yellow.png")}
                className="icon"
              />
            }
            readonly={true}
          />
        </div>
        <div className="divDate">
          <p>Denumire: {this.props.denumireCabinet}</p>
          <p>Adresa: {this.props.adresaCabinet} </p>
          <p>Tip cabinet: {this.props.tipCabinet}</p>
        </div>
        <button
          onClick={() => this.onClick(this.props.idCabinet)}
          className="buttonDetalii"
        >
          Vezi detalii
        </button>
      </div>
    );
  }
  onClick(id) {
    console.log(id+"------------")
    this.props.history.push({
      pathname: "/cabinet",
      state: { detail: id }
    });
  }
}

export default (withRouter(CardCabinet));
