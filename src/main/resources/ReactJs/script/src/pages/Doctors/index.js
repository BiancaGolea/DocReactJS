import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import DoctorCard from "../../componente/DoctorCard/index";
import "./styles.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import doctorsBySpecializationAction from "../../commun/ReduxActions/DoctorsBySpecializationAction";
import Progress from "../../componente/Progress";

class Doctors extends Component {
  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    await this.loadData();
  }

  render() {
    if (this.props.listOfDoctors.listOfDoctors !== null) {
      return (
        <div className="divMainDoctors">
          <Header />
          <div className="divListDoctors">{this.renderListDoctors()}</div>
        </div>
      );
    } else {
      //Trebuie tratata situatia 
      return (
        <div>
          <Progress/>
          {/* <img src={require("../../assets/Load.gif")} className="styleGif" /> */}
        </div>
      );
    }
  }

  renderListDoctors() {
    let listCard = [];
    for (let i = 0; i < this.props.listOfDoctors.listOfDoctors.length; i++) {
      listCard.push(
        <DoctorCard
        key={i}
          rating={
            isNaN(this.props.listOfDoctors.listOfDoctors[i].medieRecenzie)
              ? 3
              :(this.props.listOfDoctors.listOfDoctors[i].medieRecenzie/2)
          }
          doctorName={this.props.listOfDoctors.listOfDoctors[i].nume}
          doctorLastname={this.props.listOfDoctors.listOfDoctors[i].prenume}
          doctorPhone={this.props.listOfDoctors.listOfDoctors[i].numereTel}
          doctorAddress={this.props.listOfDoctors.listOfDoctors[i].adrese}
          idDoctor={this.props.listOfDoctors.listOfDoctors[i].id}
        />
      );
    }
    return listCard;
  }

  async loadData() {
    await this.props.doctorsBySpecializationAction(
      this.props.authInfo.token,
      this.props.specializationsReducer.selectedSpecialization
    );
  }
}

function mapStateToProps(state) {
  return {
    authInfo: state.authReducer,
    specializationsReducer: state.specializationsReducer,
    listOfDoctors: state.listOfDoctorsBySpecialization,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      doctorsBySpecializationAction: (token, specializare) => doctorsBySpecializationAction(token, specializare)
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);
