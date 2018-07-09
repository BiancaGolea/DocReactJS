import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles.css';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class ServiceCard extends Component{
    render(){
        return(
            <div className="divMainServices"> 
            <div className="divInfoServices">
                        <p>{this.props.doctorService.denumire}</p>
                        <p>{this.props.doctorService.pret}</p>
                    </div>
                    
                </div>
        );
    }
}
ServiceCard.propTypes={
    serviciiModel:PropTypes.object
}

export default  (withRouter(ServiceCard))