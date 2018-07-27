import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";
import loading from "../../assets/loading.gif";

class Progress extends Component {
  render() {
    return (
      <div className="divBackground">
        <img src={loading} className="progressStyle" alt="logo" />
      </div>
    );
  }
}

export default Progress;
