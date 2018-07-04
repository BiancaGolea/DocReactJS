import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles.css';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class CardServicii extends Component{
    render(){
        return(
            <div className="divMareServicii"> 
            <div className="divInformatiiServicii">
                        <p>{this.props.serviciuMedical.denumire}</p>
                        <p>{this.props.serviciuMedical.pret}</p>
                    </div>
                    
                </div>
        );
    }
}
CardServicii.propTypes={
    serviciiModel:PropTypes.object
}

export default  (withRouter(CardServicii))