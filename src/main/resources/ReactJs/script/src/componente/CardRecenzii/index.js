import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles.css';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';


class CardRecenzii extends Component{
   
    render(){
        
        if(this.props.recenzieModel.descriere!==null && this.props.recenzieModel.descriere!==""){
            let data=new Date(this.props.recenzieModel.dataRecenzie);
            let formatedDate=data.getDate() +"-"+data.getMonth()+ "-"+data.getFullYear();
        return(
            <div className="divCartonasRecenzie">
                <div className="infoRecenzie">
                        <p>{this.props.recenzieModel.username}</p>
                        <p>{formatedDate}</p>
                    </div>

                    <div className="descriereRecenzie">
                        <p>{this.props.recenzieModel.descriere}</p>
                        </div>
                        
                        
                      
                         
                </div>
        );}
        else {
            return null;
        }
    }
}

CardRecenzii.propTypes={
    recenzieModel:PropTypes.object
}

export default  (withRouter(CardRecenzii))