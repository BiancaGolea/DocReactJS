import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";
import Rating from "react-rating";
import {withRouter} from 'react-router-dom';

class DoctorCard extends Component {

  render() {
    return (
      <div className="divCardDoctor">
        <div className="divImageDoctorCard">
          <img src={require("../../assets/avatar.png")} className="imgStyle" />

          <Rating 
            placeholderRating={this.props.rating}
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

        <div className="divInformations">
          <p>Name: {this.props.numeMedic} </p>
          <p>LastName: {this.props.prenumeMedic} </p>
          <div>Address: {this.renderAdrese()} </div>
          <div>Number phone:{this.renderNrTel()} </div>
        </div>
        <button onClick={()=>this.onClick2(this.props.idDoctor)} className="buttonPriceServices">
         See prices
          </button>
        <button onClick={()=>this.onClick(this.props.idDoctor)} className="buttonProfile">
          More details
          </button>
      </div>
    );
  }

  onClick(id){
    this.props.history.push({
      pathname: '/medic',
      state: { detail: id }
    }) 
   }

   onClick2(id){
    this.props.history.push({
      pathname: '/servicii',
      state: { detail: id }
    }) 
   }

renderNrTel(){
  let listaNr=[];
  let numere=this.props.nrTel.length;
  for(let i=0;i<numere;i++){
  listaNr.push(<p key={i*i+1}>{this.props.nrTel[i]}</p>)
  }
  return listaNr;
}

renderAdrese(){
  let listaAdrese=[];
  for(let i=0;i<this.props.adreseMedic.length;i++){
      listaAdrese.push(<p key={i}>{this.props.adreseMedic[i]}</p>)
  }
  return listaAdrese;
}
}

export default   (withRouter(DoctorCard))
