import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CardWorkPanel from "../../componente/CardWorkPanel/index";
import appointmentsAction from "../../commun/ReduxActions/AppointmentsAction";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { stack as Menu } from 'react-burger-menu';
import menu from '../../assets/menu.png';

class WorkPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
  showSettings (event) {
    event.preventDefault();
  }

  async componentDidMount() {
    await this.props.appointmentsAction(
      this.props.authInfo.token,
      this.props.authInfo.idDoctor
    );

  }

  render() {
    if (
      this.props.appointments.inProgress || !this.props.appointments.appointmentsList) {
      return (
        <div className="divBackgroundWorkPanel" id="outer-container">
          <p className="alertParagraphWorkPannel"> It working ...</p>
         
        </div>
      );}

    return (
      <div className="divBackgroundWorkPanel" id="outer-container">
        <Header isLoginPage={true} />

        <h2 className="styleTitleWorkPannel">Welcome on your profile!</h2>

      
       <div id="page-wrap"  onClick={()=> this.closeMenu()}>
       <p>   </p>
          
         <Menu 
         outerContainerId={ "page-wrap" }
        className="MenuBurger"
           burgerBarClassName ={"my-class"}
           bodyClassName={ "my-class" }
           pageWrapId ={"page-wrap"}
           outerContainerId={"outer-container"}
           isOpen={this.state.menuOpen}
           width={125}
           onStateChange={(state) => this.handleStateChange(state)}
         >  
           <a onClick={() => this.closeMenu()}>Home</a>
           <a onClick={() => this.closeMenu()}>About</a>
           <a onClick={() => this.closeMenu()}>Contact</a>
           <a onClick={() => this.closeMenu()}>Settings</a>
         </Menu>
    
 <main id="page-wrap" disableCloseOnEsc className="divMainMenuWorkPanel">
   
 </main>
 </div>
        <div className="divCardWorkPannel">
          <h3 className="TitleListAppointments">  Your appointments</h3>
          {this.renderAppointmentsList()}

        </div>
        <div className="divContentText">
          <p className="textDescriptionWorkPanel"> "The power of infinite organization refers to
          the power to organize an infinity of space-time events,
          all at the same time."
           <br />
            Deepak Chopra
           <br />
            <br />

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
    await this.props.appointmentsAction(
      this.props.authInfo.token,
      this.props.authInfo.idDoctor
    );
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }

  closeMenu() {
    this.setState({ menuOpen: false })
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen })
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
      appointmentsAction: (token, id) => appointmentsAction(token, id)
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkPanel);
