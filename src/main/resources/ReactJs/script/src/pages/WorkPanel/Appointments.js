import React, { Component } from "react";
import CardWorkPanel from "../../componente/CardWorkPanel/index";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

class Appoinments extends Component {
  render() {
    return (
      <div className="divMainAppointments">
        <h3 className="TitleListAppointments"> Your appointments</h3>
        <div className="divCardWorkPannel">{this.renderAppointmentsList()}</div>

        <div className="divContentText">
          <p className="textDescriptionWorkPanel">
            {" "}
            "The power of infinite organization refers to the power to organize
            an infinity of space-time events, all at the same time."
            <br />
            Deepak Chopra
            <br />
            <br />
            With this app, you can effectively monitor and manage each one
            programming, so you'll know every time you wait for your office, at
            what date and time, also having the contact details of the patient.
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
}
export default Appoinments;
