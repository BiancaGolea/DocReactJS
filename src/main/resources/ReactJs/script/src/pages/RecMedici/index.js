import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import RecMediciForm from "../../componente/RecMediciForm/index";
import "./styles.css";
import { connect } from "react-redux";



class RecMedici extends Component {


  render() {
 
    return (
      <div className="divRecMedici">
        <Header isLoginPage={true} />
        <h1 className="pageRecMediciTitle">
          {" "}
          Înregistrează-te ca medic pe platforma noastra!
        </h1>
        <RecMediciForm token={this.props.authInfo.token} username={this.props.authInfo.username}/>
      </div>
    );
  }


  
}

function mapStateToProps(state) {
  return {
    authInfo: state.authReducer
  };
}
export default connect(mapStateToProps)(RecMedici);
