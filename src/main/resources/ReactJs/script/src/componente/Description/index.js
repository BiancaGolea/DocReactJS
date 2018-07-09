import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";

class Description extends Component {
  render() {
    return (
      <div className="divMainText">
        <p className="textTitleDescription">
        We know that health, like time, is very important for
           you!
        </p>
        <p className="textDescription">
          {" "} 
          We offer you the opportunity to schedule your favorite doctor directly
           from you home. You do not need to miss out on the phone for a few minutes
           or in the waiting room to booking for a consultation.
           MedicaClinick is available 24/24 to booking you anytime
           you need it.
              
                  
        </p>
        <p className="textTitleDescription">
          {" "}
          MedicaClinick helped to be sure you do the best decision!
         {" "}
        </p>
        <p className="textDescription">
                Pentru ca dorim ca utilizatorii să aibă parte de cea mai bună
          experiență, le oferim ocazia de a-și exprima parerea despre serviciile
          de care au beneficiat, precum și despre prețurile și aparatura
          medicilor, astfel încât utilizatorii noștri să aibă toate sursele
          necesare pentru a face alegerea potrivită.
          Because we want users to get the best
           experience, we give them the opportunity to express their opinion about the services
           of which they have benefited, as well as prices and equipment
           doctors, so that our users have all the sources
           needed to make the right choice!
        </p>
      </div>
    );
  }
}
export default Description;
