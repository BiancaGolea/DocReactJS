import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";
import Rating from "react-rating";
import { withRouter } from "react-router-dom";
import avatar from "../../assets/avatar.png";

import stargrey from "../../assets/star-grey.png";
import starred from "../../assets/star-red.png";
import staryellow from "../../assets/star-yellow.png";

class OfficeCard extends Component {
  render() {
    return (
      <div className="divCard">
        <div className="divImgOffice">
          <img alt="img" src={avatar} className="imgStyle" />

          <Rating
            placeholderRating={3.88}
            emptySymbol={<img alt="img" src={stargrey} className="icon" />}
            placeholderSymbol={<img alt="img" src={starred} className="icon" />}
            fullSymbol={<img alt="img" src={staryellow} className="icon" />}
            readonly={true}
          />
        </div>
        <div className="divInfoOfficeCard">
          <p>Name: {this.props.nameOffice}</p>
          <p>Address: {this.props.addressOffice} </p>
          <p>Office type: {this.props.typeOffice}</p>
        </div>
        <button
          onClick={() => this.onClick(this.props.idOffice)}
          className="buttonDetails"
        >
          More details
        </button>
      </div>
    );
  }
  onClick(id) {
    console.log(id + "------------");
    this.props.history.push({
      pathname: "/office",
      state: { detail: id }
    });
  }
}

export default withRouter(OfficeCard);
