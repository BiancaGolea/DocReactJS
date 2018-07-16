import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";
import Rating from "react-rating";
import {withRouter} from 'react-router-dom';
import avatar from '../../assets/avatar.png';

import stargrey from '../../assets/star-grey.png';
import starred from '../../assets/star-red.png';
import staryellow from '../../assets/star-yellow.png';



class DoctorCard extends Component {

  render() {
    return (
      <div className="divCardDoctor">
        <div className="divImageDoctorCard">
          <img src={avatar} className="imgStyle" />

          <Rating 
            placeholderRating={this.props.rating}
            emptySymbol={
              <img
                src={stargrey}
                className="icon"
              />
            }
            placeholderSymbol={
              <img
                src={starred}
                className="icon"
              />
            }
            fullSymbol={
              <img
                src={staryellow}
                className="icon"
              />
            }
            readonly={true}
          />
        </div>

        <div className="divInformations">
          <p>Name: {this.props.doctorName} </p>
          <p>LastName: {this.props.doctorLastname} </p>
          <div>Address: {this.renderAddress()} </div>
          <div>Number phone:{this.renderNrPhone()} </div>
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
      pathname: '/doctor',
      state: { detail: id }
    }) 
   }

   onClick2(id){
    this.props.history.push({
      pathname: '/services',
      state: { detail: id }
    }) 
   }

renderNrPhone(){
  let listOfNumbers=[];
  let numbers=this.props.doctorPhone.length;
  for(let i=0;i<numbers;i++){
  listOfNumbers.push(<p key={i*i+1}>{this.props.doctorPhone[i]}</p>)
  }
  return listOfNumbers;
}

renderAddress(){
  let listAddress=[];
  for(let i=0;i<this.props.doctorAddress.length;i++){
      listAddress.push(<p key={i}>{this.props.doctorAddress[i]}</p>)
  }
  return listAddress;
}
}

export default   (withRouter(DoctorCard))
