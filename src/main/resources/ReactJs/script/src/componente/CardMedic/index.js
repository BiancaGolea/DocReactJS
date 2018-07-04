import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";
import Rating from "react-rating";
import {withRouter} from 'react-router-dom';


class CardMedic extends Component {

  render() {
    return (
      <div className="divCardMed">
        <div className="divImagine">
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

        <div className="divDate">
          <p>Nume: {this.props.numeMedic} </p>
          <p>Prenume: {this.props.prenumeMedic} </p>
          <p>Adresa: {this.renderAdrese()} </p>
          <p>Nr. Telefon:{this.renderNrTel()} </p>
        </div>
        <button onClick={()=>this.onClick2(this.props.idMedic)} className="buttonPreturiServ">
          Vezi preturi
          </button>
        <button onClick={()=>this.onClick(this.props.idMedic)} className="buttonProfil">
        
          Vezi detalii
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
  listaNr.push(<p>{this.props.nrTel[i]}</p>)
  }
  return listaNr;
}

renderAdrese(){
  let listaAdrese=[];
  for(let i=0;i<this.props.adreseMedic.length;i++){
      listaAdrese.push(<p>{this.props.adreseMedic[i]}</p>)
  }
  return listaAdrese;
}
}

export default   (withRouter(CardMedic))
