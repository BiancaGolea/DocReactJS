import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Header from '../../componente/Header/index';
import OfficeCard from '../../componente/OfficeCard/index';
import './styles.css';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import officeAction from "../../commun/ReduxActions/OfficesAction";
import Progress from "../../componente/Progress";

class Offices extends Component {
    
      async componentWillMount() {
        await this.loadData();
      }
    
      render() {
        if (this.props.officesList.officesList !== null) {
        return (
            <div className="divMainOffices">
                 <Header/> 
                 <div className="divListOffices">
                 {this.renderOffices()}
                </div>
            </div>

        );
    }else{
        return(
        <div>
            <Progress/>
            </div>
        )
    }
      }

      renderOffices(){
          let listCard=[];
          for(let i=0; i<this.props.officesList.officesList.length;i++){
              listCard.push(
              <OfficeCard
              key={i}
              idOffice={this.props.officesList.officesList[i].idCab}
              rating={
                isNaN(this.props.officesList.officesList[i].medieRecenzie)
                  ? 3
                  :(this.props.officesList.officesList[i].medieRecenzie/2)
              }
              nameOffice={this.props.officesList.officesList[i].denumire}
              addressOffice={this.props.officesList.officesList[i].cabAdress}
              typeOffice={this.props.officesList.officesList[i].tip}
              />
            );
          }
          return listCard;
      } 

      async loadData() {
        await this.props.officeAction(
          this.props.authInfo.token
        );
      }
    }
    
    function mapStateToProps(state) {
        return {
          authInfo: state.authReducer,
          officesList: state.officesList
        };
      }
      
      function mapDispatchToProps(dispatch) {
        return bindActionCreators(
          {
            officeAction: (token) => officeAction(token)
          },
          dispatch
        );
      }
      export default connect(mapStateToProps, mapDispatchToProps)(Offices);