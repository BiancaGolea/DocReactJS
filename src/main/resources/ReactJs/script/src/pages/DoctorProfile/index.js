import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";
import Rating from "react-rating";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import doctorProfileAction from "../../commun/ReduxActions/DoctorProfileAction";
import ReviewCard from "../../componente/ReviewCard/index";
import ServiceCard from "../../componente/ServiceCard/index";
import doctorReviewAction from "../../commun/ReduxActions/DoctorReviewAction";
import Progress from "../../componente/Progress/index";

class DoctorProfile extends Component {
  async componentWillMount() {
    await this.props.doctorProfileAction(
      this.props.authInfo.token,
      this.props.location.state.detail,
    );
    await this.props.doctorReviewAction(
      this.props.authInfo.token,
      this.props.location.state.detail
    );
  }

  render() {
    if (this.props.doctorProfileReducer.doctorInfo === null || this.props.doctorReview.doctorReviewList===null) {
      return <Progress/>;
    } else {
     
      return (
        <div className="divDoctorProfile">
          <div>
            <Header isWelcomePage={true} />
          </div>
          <div className="divMainDoctorProfile">
            <p className="pDoctorName">
              Doctor {this.props.doctorProfileReducer.doctorInfo.nume}{" "}
              {this.props.doctorProfileReducer.doctorInfo.prenume}{" "}
            </p>
            <div className="divCardDoctorProfile">
              <div className="styleRating">
                <img
                alt="img"
                  src={require("../../assets/avatar.png")}
                  className="imageSmall"
                />

                <p className="ratingParagraph">Rating pret:</p>
                <Rating
                  placeholderRating={
                    this.props.doctorProfileReducer.doctorInfo.mediePret / 2
                  }
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
                <p className="ratingParagraph">Rating medical services:</p>
                <Rating
                  placeholderRating={
                    this.props.doctorProfileReducer.doctorInfo.medieServMedicale / 2
                  }
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
                <p className="ratingParagraph">Rating equipment:</p>
                <Rating
                  placeholderRating={
                    this.props.doctorProfileReducer.doctorInfo.medieAparatura / 2
                  }
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

              <div className="styleBorderDiv">
                <p>
                  {" "}
                  Specialization: {
                    this.props.doctorProfileReducer.doctorInfo.specializare
                  }{" "}
                </p>
                <p> Office: {this.props.doctorProfileReducer.doctorInfo.adresaCab} </p>
                <div>Schedule: {this.renderOrar()} </div>
                <p> Email: {this.props.doctorProfileReducer.doctorInfo.email} </p>
                <div> Number phone: {this.renderNrTel()}</div>
                <p> Facebook: {this.props.doctorProfileReducer.doctorInfo.facebook} </p>
              </div>
            </div>
            <div className="divBtn">
              <button
                onClick={() => this.onClick(this.props.location.state.detail)}
                className="buttonBooking"
              >
                Rezervare
              </button>

              <button
                onClick={() => this.onClick2(this.props.location.state.detail)}
                className="buttonReviewDocProfile"
              >
               Add Review
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
    for (let i = 0; i < this.props.doctorProfileReducer.doctorInfo.nrTel.length; i++) {
      list.push(<p key={i}> {this.props.doctorProfileReducer.doctorInfo.nrTel[i]}</p>);
    }
    return list;
  }
  renderOrar(){
    let orar=[];
    for(let i=0;i<this.props.doctorProfileReducer.doctorInfo.program.length;i++){
      let data=this.props.doctorProfileReducer.doctorInfo.program[i];
      data=data.split(" ");
      let dataOrar=data[0]+"-"+data[2].slice(0, 5)+"--"+data[4].slice(0, 5);
      orar.push(<p key={i*i+1}>{dataOrar}</p>)
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
    for (let i = 0;i <this.props.doctorReview.doctorReviewList.length; i++) {
      listaRec.push(
      <ReviewCard
      key={i*i+1}
       recenzieModel={this.props.doctorReview.doctorReviewList[i]} />);
    }
    return listaRec;
  }
 
  
}
function mapStateToProps(state) {
  return {
    authInfo: state.authReducer,
    doctorProfileReducer: state.doctorProfileReducer,
    doctorReview:state.doctorReview,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      doctorProfileAction: (token, id) => doctorProfileAction(token, id),
      doctorReviewAction: (token,id)=>  doctorReviewAction(token,id)},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(DoctorProfile);
