import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";

class Description extends Component {
  render() {
    return (
      <div className="divMainText">
        <p className="textTitleDescription">
          Știm că sănătatea, la fel ca timpul, sunt foarte importante pentru
          duneavoastră!
        </p>
        <p className="textDescription">
          {" "}
                  Noi îți oferim ocazia de a te programa la medicul tau favorit direct
          de la tine de acasa. Nu e nevoie să pierdeți minute în șir la telefon
          sau în sala de așteptare pentru a vă programa pentru o consultație.
          MedicaClinick vă sta la dispoziție 24/24 pentru a vă programa oricând
          aveți nevoie.
        </p>
        <p className="textTitleDescription">
          {" "}
          MedicaClinick vă ajută să fiți siguri că luați cea mai bună decizie!{" "}
        </p>
        <p className="textDescription">
                Pentru ca dorim ca utilizatorii să aibă parte de cea mai bună
          experiență, le oferim ocazia de a-și exprima parerea despre serviciile
          de care au beneficiat, precum și despre prețurile și aparatura
          medicilor, astfel încât utilizatorii noștri să aibă toate sursele
          necesare pentru a face alegerea potrivită.
        </p>
      </div>
    );
  }
}
export default Description;
