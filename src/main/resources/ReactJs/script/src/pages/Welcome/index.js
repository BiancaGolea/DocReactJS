import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";
import { connect } from "react-redux";
import specializationsAction from "../../commun/ReduxActions/SpecializationsAction";
import setStatus from "../../commun/ReduxActions/SetStatusAction";
import { bindActionCreators } from "redux";
import Coverflow from "react-coverflow";
import Description from "../../componente/Description";
import doc1 from '../../assets/doc1.jpg';
import doc2 from '../../assets/doc2.jpg';
import med1 from '../../assets/med1.jpg';
import doc4 from '../../assets/doc4.jpg';
import doc5 from '../../assets/doc5.jpg';
import doc6 from '../../assets/doc6.jpg';
import doc7 from '../../assets/doc7.jpg';
import feedbk from '../../assets/feedbk.jpg';
import doc3 from '../../assets/doc3.jpg';
import med2 from '../../assets/med2.jpg';
import med3 from '../../assets/med3.jpg';
import med5 from '../../assets/med5.jpg';
import med6 from '../../assets/med6.jpg';
import med7 from '../../assets/med7.jpg';
import med8 from '../../assets/med8.jpg';




class Welcome extends Component {
  async componentWillMount() {
    await this.loadData();
  }

  render() {
    console.log(this.props.authInfo, "authInfo")
    return (
      <div className="divContainerWelcomePage">
        <div className="hederWelcomePage">
          <Header
          isDoctor={this.props.authInfo.isDoctor}
            isWelcomePage={this.props.authInfo.token == null ? true : false}
          />
        </div>
        <div className="divImages">
          <Coverflow
            width={1000}
            height={400}
            displayQuantityOfSide={0.5}
            navigation={false}
            enableHeading={false}
          >
            <div
              role="menuitem"
              tabIndex="0"
            >
              <img
                src={doc1}
                alt="title or description"
                style={{ display: "block", width: "150%" }}
              />
            </div>
            <img
              src={doc2}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
            <img
              src={med1}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
            <img
              src={doc4}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
            <img
              src={doc5}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
            <img
              src={doc6}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
             <img
              src={doc7}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
             <img
              src={feedbk}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
             <img
              src={doc3}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
             <img
              src={med2}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
             <img
              src={med3}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
             <img
              src={doc3}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
             <img
              src={med5}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
             <img
              src={med6}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
             <img
              src={med7}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
            <img
              src={med8}
              alt="title or description"
              data-action="http://andyyou.github.io/react-coverflow/"
            />
          </Coverflow>
          <Description/>
        </div>
       
        <div className="divWelcomePage" />
        
      </div>
    );
  }

  async loadData() {
    await this.props.specializationsAction(this.props.authInfo.token);
    await this.props.setStatus(this.props.authInfo.token,this.props.authInfo.username);
  }
  
}
function mapStateToProps(state) {
  return {
    authInfo: state.authReducer,
    specializationsReducer: state.specializationsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { specializationsAction: token => specializationsAction(token) ,
      setStatus:(token,username)=>setStatus(token,username)}, 
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
