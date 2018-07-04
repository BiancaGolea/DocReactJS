import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Header from '../../componente/Header/index';
import CardCabinet from '../../componente/CardCabinet/index';
import './styles.css';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import cabineteAction from "../../commun/ReduxActions/CabineteAction";
import Progress from "../../componente/Progress";

class Cabinete extends Component {
    constructor(props) {
        super(props);
      }
    
      async componentWillMount() {
          console.log("#########")
          console.log(JSON.stringify(this.props.listaCabinete))
        await this.loadData();
      }
    
      render() {
        if (this.props.listaCabinete.listaCabinete !== null) {
        return (
            <div className="divMedici">
                 <Header/> 
                 <div className="divListaMedici">
                 {this.renderCabinete()}
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

      renderCabinete(){
          let listaCard=[];
          for(let i=0; i<this.props.listaCabinete.listaCabinete.length;i++){
              listaCard.push(
              <CardCabinet
              idCabinet={this.props.listaCabinete.listaCabinete[i].idCab}
              rating={
                isNaN(this.props.listaCabinete.listaCabinete[i].medieRecenzie)
                  ? 3
                  :(this.props.listaCabinete.listaCabinete[i].medieRecenzie/2)
              }
              denumireCabinet={this.props.listaCabinete.listaCabinete[i].denumire}
              adresaCabinet={this.props.listaCabinete.listaCabinete[i].cabAdress}
              tipCabinet={this.props.listaCabinete.listaCabinete[i].tip}
              />
            );
          }
          return listaCard;
      } 

      async loadData() {
        await this.props.cabineteAction(
          this.props.authInfo.token
        );
      }
    }
    
    function mapStateToProps(state) {
        return {
          authInfo: state.authReducer,
          listaCabinete: state.listaCabinete
        };
      }
      
      function mapDispatchToProps(dispatch) {
        return bindActionCreators(
          {
            cabineteAction: (token) => cabineteAction(token)
          },
          dispatch
        );
      }
      export default connect(mapStateToProps, mapDispatchToProps)(Cabinete);