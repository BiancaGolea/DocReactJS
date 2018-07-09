import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import servicesAction from "../../commun/ReduxActions/ServicesAction";
import ServiceCard from "../../componente/ServiceCard/index";
import Progress from "../../componente/Progress/index";


class Services extends Component{
  async componentWillMount(){
      await this.servDate();
  }

    render(){
      console.log(this.props.doctorService.servicesList, "date services")
      if(this.props.doctorService.inProgress || this.props.doctorService.servicesList===null){
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
    for(let i=0;i<this.props.doctorService.servicesList.length;i++){
      listraSpecializare.push(
      <ServiceCard 
      doctorService={this.props.doctorService.servicesList[i]}
      />
      );
    }
    
    return listraSpecializare;
  }

  async servDate(){
    await this.props.servicesAction(
      this.props.authInfo.token,
      this.props.location.state.detail
          );
  }
}


function mapStateToProps(state) {
    return {
      authInfo: state.authReducer,
      doctorService: state.doctorService
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        servicesAction: (token, id) => servicesAction(token, id)
      },
      dispatch
    );
  }
export default  connect(mapStateToProps, mapDispatchToProps) (Services);