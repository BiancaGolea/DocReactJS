import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";
import Rating from "react-rating";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import cabinetProfil from "../../commun/ReduxActions/ProfilCabinetAction";
import Progress from "../../componente/Progress/index";

class OfficeProfile extends Component {

  async componentWillMount() {
    await this.props.cabinetProfil(
      this.props.location.state.detail,
      this.props.authInfo.token
    );
    console.log(JSON.stringify(this.props.profilCabinet ));
    console.log(JSON.stringify(this.props.location))
    console.log(this.props.location.state.detail)
  }
  
  render() {
    if(this.props.profilCabinet.dateCabinet === null ){
      return <Progress/>;
    }
    else{
    return (
      <div className="bigDiv">
        <div>
          <Header isWelcomePage={true} />
        </div>
        <div className="bigDiv">
          <p className="titlu"> Policlinica </p>
          <div className="divCartoon">
            <div className="ratingStyles">
              <img
                src={require("../../assets/avatar.png")}
                className="smallImg"
              />
              <p className="paragrphRating"> Rating locatie cabinet</p>
              <Rating
                placeholderRating={3.88}
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
              <p className="paragrphRating"> Rating aspect cabinet</p>
              <Rating
                placeholderRating={3.0}
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
            <div className="infoDiv">
                <p>Denumire: {this.props.profilCabinet.dateCabinet.denumire} </p>
                <p>Adresa: {this.props.profilCabinet.dateCabinet.adresa} </p>
                <p>Tip:{this.props.profilCabinet.dateCabinet.tip} </p>
                <p>Medici: {this.renderListaMedici()} </p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
renderListaMedici(){
  let listaMed=[];
  for(let i=0; i<this.props.profilCabinet.dateCabinet.listaMedici.length; i++){
    listaMed.push(<p>{this.props.profilCabinet.dateCabinet.listaMedici[i]}</p>)
  }
  return listaMed;
}
}

function mapStateToProps(state) {
  return {
    authInfo: state.authReducer,
    profilCabinet: state.profilCabinet,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      cabinetProfil: (id, token) => cabinetProfil(id, token)},
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)( OfficeProfile);
