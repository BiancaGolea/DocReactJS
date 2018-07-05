import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Header from '../../componente/Header/index';
import AppointmentsForm from '../../componente/AppointmentsForm/index';
import './styles.css';
import { connect } from 'react-redux';


class Appointments extends Component {

     render() {
        return (
            <div className="divProgramari">
                <Header />
                <h1 className="pageProgramariTitle"> Programări</h1>
                <AppointmentsForm token={this.props.authInfo.token} idMedic={this.props.location.state.idRezervare}/>
            </div>

        );
      }
      
    }
    function mapStateToProps(state){
        return {
          authInfo:state.authReducer
        };
      }


    export default connect(mapStateToProps) (Appointments);