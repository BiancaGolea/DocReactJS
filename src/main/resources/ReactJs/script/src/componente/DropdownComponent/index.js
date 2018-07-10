import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "./styles.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import setSpecialization from "../../commun/ReduxActions/SetSpecializationAction";
import {bindActionCreators} from 'redux'; 

class Dropdown extends Component {


  render() {
    return <div className="headerDiv">{this.dropDown()}</div>;
  }

 async onClick(specialization) {
    await this.props.setSpecialization(specialization);
    
    if(this.props.specializationRedux.selectedSpecialization!==null){
      this.props.history.push('/doctors');
    }
  }

  dropDown() {
    let listOfSpecializations = [];
    let numSpecialization = this.props.specializationRedux.specializationList.length;
    for (let i = 0; i < numSpecialization; i++) {
      let specialization=this.props.specializationRedux.specializationList[i].denumireSpecializare;
      listOfSpecializations.push(
        <div key={i}>
              <p onClick={()=>this.onClick(this.props.specializationRedux.specializationList[i].denumireSpecializare)}>{specialization.charAt(0).toUpperCase()+specialization.slice(1)}</p>
        </div>
      );
    }
    return listOfSpecializations;
  }
}
function mapStateToProps(state) {
  return {
    specializationRedux: state.specializationsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSpecialization:(specialization)=>setSpecialization(specialization)},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Dropdown));
