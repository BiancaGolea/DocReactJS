import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles.css';

class ValidationMessage extends Component {
    
      render() {
        return (
            <div className="divContainerValidationMessage">
                <p className="textValidationMessage"> {this.props.message}  </p> 
            </div>

        );
      }
    }
    
    export default ValidationMessage;