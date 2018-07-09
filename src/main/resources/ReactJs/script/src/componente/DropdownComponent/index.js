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

 async onClick(specializare) {
    await this.props.setSpecialization(specializare);
    
    if(this.props.specializationRedux.selectedSpecialization!==null){
      this.props.history.push('/medici');
    }
  }

  dropDown() {
    let listaSpec = [];
    let nrSpec = this.props.specializationRedux.specializationList.length;
    for (let i = 0; i < nrSpec; i++) {
      let specializare=this.props.specializationRedux.specializationList[i].denumireSpecializare;
      listaSpec.push(
        <div key={i}>
              <p onClick={()=>this.onClick(this.props.specializationRedux.specializationList[i].denumireSpecializare)}>{specializare.charAt(0).toUpperCase()+specializare.slice(1)}</p>
        </div>
      );
    }
    return listaSpec;
  }
}
function mapStateToProps(state) {
  return {
    specializationRedux: state.specializationsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSpecialization:(specializare)=>setSpecialization(specializare)},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Dropdown));
