import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";
import { connect } from "react-redux";
import ReviewForm from "../../componente/ReviewForm/index";

class Review extends Component {
  render() {
    console.log(this.props.location.state.idReview);
    return (
      <div className="divReview">
        <Header />

        <ReviewForm
          token={this.props.authInfo.token}
          username={this.props.authInfo.username}
          idMed={this.props.location.state.idReview}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    authInfo: state.authReducer
  };
}

export default connect(mapStateToProps)(Review);
