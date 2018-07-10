import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";
import Rating from "react-rating";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import officeProfileAction from "../../commun/ReduxActions/OfficeProfileAction";
import Progress from "../../componente/Progress/index";
import doctorsBySpecializationAction from "../../commun/ReduxActions/DoctorsBySpecializationAction";

class OfficeProfile extends Component {

  async componentWillMount() {
    await this.props.officeProfileAction(
      this.props.location.state.detail,
      this.props.authInfo.token
    );
  
  }
  
  render() {
    if(this.props.officeProfileReducer.officeInfo === null ){
      return <Progress/>;
    }
    else{
    return (
      <div className="MainDivOfficeProfile">
        <div>
          <Header isWelcomePage={true} />
        </div>
        <div className="bigDiv">
          <p className="titleOfficeProfile"> </p>
          <div className="divCardOfficeProfile">
            <div className="ratingStyles">
              <img
              alt="img"
                src={require("../../assets/avatar.png")}
                className="smallImg"
              />
              <p className="paragrphRating"> Rating office location</p>
              <Rating
                placeholderRating={3.88}
                emptySymbol={
                  <img
                  alt="img"
                    src={require("../../assets/star-grey.png")}
                    className="icon"
                  />
                }
                placeholderSymbol={
                  <img
                  alt="img"
                    src={require("../../assets/star-red.png")}
                    className="icon"
                  />
                }
                fullSymbol={
                  <img
                  alt="img"
                    src={require("../../assets/star-yellow.png")}
                    className="icon"
                  />
                }
                readonly={true}
              />
              <p className="paragrphRating"> Rating look office</p>
              <Rating
                placeholderRating={3.0}
                emptySymbol={
                  <img
                  alt="img"
                    src={require("../../assets/star-grey.png")}
                    className="icon"
                  />
                }
                placeholderSymbol={
                  <img
                  alt="img"
                    src={require("../../assets/star-red.png")}
                    className="icon"
                  />
                }
                fullSymbol={
                  <img
                  alt="img"
                    src={require("../../assets/star-yellow.png")}
                    className="icon"
                  />
                }
                readonly={true}
              />
            </div>
            <div className="infoOfficeProfileDiv">
                <p>Name: {this.props.officeProfileReducer.officeInfo.denumire} </p>
                <p>Address: {this.props.officeProfileReducer.officeInfo.adresa} </p>
                <p>Type:{this.props.officeProfileReducer.officeInfo.tip} </p>
                <div>Doctors: {this.renderListDoctors()} </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
renderListDoctors(){
  let listDoctors=[];
  for(let i=0; i<this.props.officeProfileReducer.officeInfo.listaMedici.length; i++){
    listDoctors.push(<p key={i}>{this.props.officeProfileReducer.officeInfo.listaMedici[i]}</p>)
  }

  return listDoctors;
  
}
}

function mapStateToProps(state) {
  return {
    authInfo: state.authReducer,
    officeProfileReducer: state.officeProfileReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      officeProfileAction: (id, token) => officeProfileAction(id, token)},
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)( OfficeProfile);
