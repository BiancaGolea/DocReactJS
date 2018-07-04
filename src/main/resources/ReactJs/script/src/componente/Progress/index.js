import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";

class Progress extends Component{

    render(){
        return(
            <div className="divBackground">
            <img src={require("../../assets/loading.gif")} className="progressStyle" alt="logo"/>                
                </div>
        );
    }

}


export default Progress;