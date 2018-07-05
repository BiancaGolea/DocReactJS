import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles.css';

class ValidationMessage extends Component {
    
      render() {
        return (
            <div className="divContainer">
                <p className="text"> {this.props.mesaj}  </p> 
            </div>

        );
      }
    }
    
    export default ValidationMessage;