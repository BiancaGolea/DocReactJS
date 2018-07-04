import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import CardMedic from "../../componente/CardMedic/index";
import "./styles.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import mediciAction from "../../commun/ReduxActions/MediciBySpecializareAction";
import Progress from "../../componente/Progress";

class Medici extends Component {
  constructor(props) {
    super(props);
  }

  async componentWillMount() {
    await this.loadData();
  }

  render() {
    if (this.props.listaMedici.listaMedici !== null) {
      return (
        <div className="divMedici">
          <Header />
          <div className="divListaMedici">{this.renderListaMedici()}</div>
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

  renderListaMedici() {
    let listaCard = [];
    for (let i = 0; i < this.props.listaMedici.listaMedici.length; i++) {
      listaCard.push(
        <CardMedic
          rating={
            isNaN(this.props.listaMedici.listaMedici[i].medieRecenzie)
              ? 3
              :(this.props.listaMedici.listaMedici[i].medieRecenzie/2)
          }
          numeMedic={this.props.listaMedici.listaMedici[i].nume}
          prenumeMedic={this.props.listaMedici.listaMedici[i].prenume}
          nrTel={this.props.listaMedici.listaMedici[i].numereTel}
          adreseMedic={this.props.listaMedici.listaMedici[i].adrese}
          idMedic={this.props.listaMedici.listaMedici[i].id}
        />
      );
    }
    return listaCard;
  }

  async loadData() {
    await this.props.mediciAction(
      this.props.authInfo.token,
      this.props.specializareReducer.specializareSelectata
    );
  }
}

function mapStateToProps(state) {
  return {
    authInfo: state.authReducer,
    specializareReducer: state.specializareReducer,
    listaMedici: state.listaMediciBySpecializare
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      mediciAction: (token, specializare) => mediciAction(token, specializare)
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Medici);
