import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";
import Rating from "react-rating";
import { withRouter } from "react-router-dom";

class OfficeCard extends Component {
  render() {
    return (
      <div className="divCard">
        <div className="divImgOffice">
          <img alt="img" src={require("../../assets/avatar.png")} className="imgStyle" />

          <Rating
            placeholderRating={3.88}
            emptySymbol={
              <img
              alt="img"
                src={require("../../assets/star-grey.png")}
                className="icon"
              />
            }
            placeholderSymbol={
              <img
              alt="img"
                src={require("../../assets/star-red.png")}
                className="icon"
              />
            }
            fullSymbol={
              <img
              alt="img"
                src={require("../../assets/star-yellow.png")}
                className="icon"
              />
            }
            readonly={true}
          />
        </div>
        <div className="divInfoOfficeCard">
          <p>Name: {this.props.denumireCabinet}</p>
          <p>Address: {this.props.adresaCabinet} </p>
          <p>Office type: {this.props.tipCabinet}</p>
        </div>
        <button
          onClick={() => this.onClick(this.props.idCabinet)}
          className="buttonDetails"
        >
          More details
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

export default (withRouter(OfficeCard));
