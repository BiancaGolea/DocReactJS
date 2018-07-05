import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import SignUpDoctorsForm from "../../componente/SignUpDoctorsForm/index";
import "./styles.css";
import { connect } from "react-redux";



class SignUpDoctors extends Component {


  render() {
 
    return (
      <div className="divSignUpDoctors">
        <Header isLoginPage={true} />
        <h1 className="pageSignUpDoctorsTitle">
          {" "}
          Înregistrează-te ca medic pe platforma noastra!
        </h1>
        <SignUpDoctorsForm token={this.props.authInfo.token} username={this.props.authInfo.username}/>
      </div>
    );
  }


  
}

function mapStateToProps(state) {
  return {
    authInfo: state.authReducer
  };
}
export default connect(mapStateToProps)(SignUpDoctors);
