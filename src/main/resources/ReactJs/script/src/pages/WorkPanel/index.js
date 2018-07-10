import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CardWorkPanel from "../../componente/CardWorkPanel/index";
import appointmentsiAction from "../../commun/ReduxActions/AppointmentsAction";

class WorkPanel extends Component {
   async componentDidMount(){
   await this.props.appointmentsiAction(
      this.props.authInfo.token,
      this.props.authInfo.idDoctor
    );
   
  }

  render() {
  console.log("------------",this.props.appointments);


    if (
      this.props.appointments.inProgress ||  !this.props.appointments.appointmentsList) {
      return <div className="divBackgroundWorkPanel">
      <p className="alertParagraphWorkPannel"> It working ...</p></div>;
    }

    return (
      <div className="divBackgroundWorkPanel">
        <Header isLoginPage={true} />
        <h2 className="styleTitleWorkPannel">Welcome on your profile!</h2>
        <h3 className="TitleListAppointments">  Your appointments</h3>
        <div className="divCardWorkPannel">
          {this.renderAppointmentsList()}
          
        </div>
        <div className="divContentText">
          <p className="textDescriptionWorkPanel"> "The power of infinite organization refers to 
          the power to organize an infinity of space-time events, 
          all at the same time."
           <br /> 
           Deepak Chopra
           <br/>
           <br/>
           
           With this app, you can effectively monitor and manage each one 
           programming, so you'll know every time you wait for your office, 
           at what date and time, also having the contact details of the patient.
           </p>
          </div>
      </div>
    );
  }
   renderAppointmentsList() {
    let appointmentsList = [];
    for (let i = 0; i < this.props.appointments.appointmentsList.length; i++) {
      appointmentsList.push(
        <CardWorkPanel
          idBooking={this.props.appointments.appointmentsList[i].id_programare}
          dateOfBooking={this.props.appointments.appointmentsList[i].data}
          firstname={this.props.appointments.appointmentsList[i].nume}
          lastname={this.props.appointments.appointmentsList[i].prenume}
          mail={this.props.appointments.appointmentsList[i].email}
          number={this.props.appointments.appointmentsList[i].nrtel}
        />
      );
    
  }
    return appointmentsList;
  
}


  async loadList() {
    await this.props.appointmentsiAction(
      this.props.authInfo.token,
      this.props.authInfo.idDoctor
    );
  }
}

function mapStateToProps(state) {
  return {
    authInfo: state.authReducer,
    appointments: state.appointments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      appointmentsiAction: (token, id) => appointmentsiAction(token, id)
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkPanel);
