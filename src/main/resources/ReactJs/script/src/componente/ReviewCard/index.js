import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles.css';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';


class ReviewCard extends Component{
   
    render(){
        
        if(this.props.recenzieModel.descriere!==null && this.props.recenzieModel.descriere!==""){
            let data=new Date(this.props.recenzieModel.dataRecenzie);
            let formatedDate=data.getDate() +"-"+data.getMonth()+ "-"+data.getFullYear();
        return(
            <div className="divCardReview">
                <div className="infoReviewCard">
                        <p>{this.props.recenzieModel.username}</p>
                        <p>{formatedDate}</p>
                    </div>

                    <div className="descriptionReview">
                        <p>{this.props.recenzieModel.descriere}</p>
                        </div>
                        
                        
                      
                         
                </div>
        );}
        else {
            return null;
        }
    }
}

ReviewCard.propTypes={
    recenzieModel:PropTypes.object
}

export default  (withRouter(ReviewCard))