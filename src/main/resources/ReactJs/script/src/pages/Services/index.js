import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import serviciiAction from "../../commun/ReduxActions/ServiciiAction";
import ServiceCard from "../../componente/ServiceCard/index";
import Progress from "../../componente/Progress/index";


class Services extends Component{
  async componentWillMount(){
      await this.servDate();
  }

    render(){
      if(this.props.serviciuMedical.inProgress || this.props.serviciuMedical.listaServicii===null){
          return <Progress/>
              }
        return(
            <div className="divBackgroundServices">
            <div className="divHeaderServices">
              <Header/>
              </div>
            <div className="divListServices">
                {this.renderlistaServiciiMedicale()}
            </div>
            </div>
        );
    }

renderlistaServiciiMedicale(){
    let listraSpecializare=[];
    for(let i=0;i<this.props.serviciuMedical.listaServicii.length;i++){
      listraSpecializare.push(
      <ServiceCard 
      serviciuMedical={this.props.serviciuMedical.listaServicii[i]}
      />
      );
    }
    
    return listraSpecializare;
  }

  async servDate(){
    await this.props.serviciiAction(
      this.props.authInfo.token,
      this.props.location.state.detail
          );
  }
}


function mapStateToProps(state) {
    return {
      authInfo: state.authReducer,
      serviciuMedical: state.serviciiMedic
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        serviciiAction: (token, id) => serviciiAction(token, id)
      },
      dispatch
    );
  }
export default  connect(mapStateToProps, mapDispatchToProps) (Services);