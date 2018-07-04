import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";
import Rating from "react-rating";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import medicProfil from "../../commun/ReduxActions/ProfilMedicAction";
import CardRecenzii from "../../componente/CardRecenzii/index";
import CardServicii from "../../componente/CardServicii/index";
import recenziiMediciAction from "../../commun/ReduxActions/RecenziiMedicAction";
import Progress from "../../componente/Progress/index";

class ProfilMedic extends Component {
  async componentWillMount() {
    await this.props.medicProfil(
      this.props.authInfo.token,
      this.props.location.state.detail,
    );
    await this.props.recenziiMediciAction(
      this.props.authInfo.token,
      this.props.location.state.detail
    );
  }

  render() {
    if (this.props.profilMedic.dateMedic === null || this.props.recenzieMedic.listaRecenziiMedici===null) {
      return <Progress/>;
    } else {
     
      return (
        <div className="divProfilMedic">
          <div>
            <Header isWelcomePage={true} />
          </div>
          <div className="div">
            <p className="p">
              Doctor {this.props.profilMedic.dateMedic.nume}{" "}
              {this.props.profilMedic.dateMedic.prenume}{" "}
            </p>
            <div className="divCartonas">
              <div className="styleRating">
                <img
                  src={require("../../assets/avatar.png")}
                  className="imgMica"
                />

                <p className="ratingParagraf">Rating pret:</p>
                <Rating
                  placeholderRating={
                    this.props.profilMedic.dateMedic.mediePret / 2
                  }
                  emptySymbol={
                    <img
                      src={require("../../assets/star-grey.png")}
                      className="icon"
                    />
                  }
                  placeholderSymbol={
                    <img
                      src={require("../../assets/star-red.png")}
                      className="icon"
                    />
                  }
                  fullSymbol={
                    <img
                      src={require("../../assets/star-yellow.png")}
                      className="icon"
                    />
                  }
                  readonly={true}
                />
                <p className="ratingParagraf">Rating servicii medicale:</p>
                <Rating
                  placeholderRating={
                    this.props.profilMedic.dateMedic.medieServMedicale / 2
                  }
                  emptySymbol={
                    <img
                      src={require("../../assets/star-grey.png")}
                      className="icon"
                    />
                  }
                  placeholderSymbol={
                    <img
                      src={require("../../assets/star-red.png")}
                      className="icon"
                    />
                  }
                  fullSymbol={
                    <img
                      src={require("../../assets/star-yellow.png")}
                      className="icon"
                    />
                  }
                  readonly={true}
                />
                <p className="ratingParagraf">Rating aparatura:</p>
                <Rating
                  placeholderRating={
                    this.props.profilMedic.dateMedic.medieAparatura / 2
                  }
                  emptySymbol={
                    <img
                      src={require("../../assets/star-grey.png")}
                      className="icon"
                    />
                  }
                  placeholderSymbol={
                    <img
                      src={require("../../assets/star-red.png")}
                      className="icon"
                    />
                  }
                  fullSymbol={
                    <img
                      src={require("../../assets/star-yellow.png")}
                      className="icon"
                    />
                  }
                  readonly={true}
                />
              </div>

              <div className="stilChenar">
                <p>
                  {" "}
                  Specializare: {
                    this.props.profilMedic.dateMedic.specializare
                  }{" "}
                </p>
                <p> Cabinet: {this.props.profilMedic.dateMedic.adresaCab} </p>
                <p>Orar: {this.renderOrar()} </p>
                <p> Email: {this.props.profilMedic.dateMedic.email} </p>
                <p> Telefon: {this.renderNrTel()}</p>
                <p> Facebook: {this.props.profilMedic.dateMedic.facebook} </p>
              </div>
            </div>
            <div className="divBtn">
              <button
                onClick={() => this.onClick(this.props.location.state.detail)}
                className="butonRezervare"
              >
                Rezervare
              </button>

              <button
                onClick={() => this.onClick2(this.props.location.state.detail)}
                className="butonRecenzie"
              >
                Adauga recenzie
              </button>
            </div>
          </div>
          {this.renderlistaRecenzii()}
        </div>
      );
    }
  }
  renderNrTel() {
    let list = [];
    for (let i = 0; i < this.props.profilMedic.dateMedic.nrTel.length; i++) {
      list.push(<p> {this.props.profilMedic.dateMedic.nrTel[i]}</p>);
    }
    return list;
  }
  renderOrar(){
    let orar=[];
    for(let i=0;i<this.props.profilMedic.dateMedic.program.length;i++){
      let data=this.props.profilMedic.dateMedic.program[i];
      data=data.split(" ");
      let dataOrar=data[0]+"-"+data[2].slice(0, 5)+"--"+data[4].slice(0, 5);
      orar.push(<p>{dataOrar}</p>)
    }
    return orar;
  }
  onClick(id) {
    this.props.history.push({
      pathname: "/programari",
      state: { idRezervare: id } 
    });
    
  }

  onClick2(id){
    this.props.history.push({
      pathname:"/recenzie",
      state:{idRecenzie:id}
      
    });
    
  }
  renderlistaRecenzii() {
    let listaRec = [];
    for (let i = 0;i <this.props.recenzieMedic.listaRecenziiMedici.length; i++) {
      listaRec.push(
      <CardRecenzii
       recenzieModel={this.props.recenzieMedic.listaRecenziiMedici[i]} />);
    }
    return listaRec;
  }
 
  
}
function mapStateToProps(state) {
  return {
    authInfo: state.authReducer,
    profilMedic: state.profilMedic,
    recenzieMedic:state.recenziiMedicReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      medicProfil: (token, id) => medicProfil(token, id),
      recenziiMediciAction: (token,id)=>  recenziiMediciAction(token,id)},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilMedic);
