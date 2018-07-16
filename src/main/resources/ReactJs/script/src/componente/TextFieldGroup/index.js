import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Button from "material-ui/Button";
import "./styles.css";
import ValidationMessage from "../ValidationMessage/index";
import { connect } from 'react-redux'
import loginUser from "../../commun/ReduxActions/LoginReduxAction";
import {bindActionCreators} from 'redux'; 
import {withRouter} from 'react-router-dom';
import Icon from 'material-ui/Icon';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import Slide from "material-ui/transitions/Slide";
import Progress from "../Progress";
import download from '../../assets/download.png';
import Load from '../../assets/Load.gif';


class TextFieldGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isUsernameError:false,
      isPassError:false,
      username: null,
      password: null,
      isAuthError:false
    };
  }

  render() {
    if(this.state.isAuthError){
      return this.renderError();
    }

    return (
      <div className="formContainerDiv">
        <form>
          <div className="form-group">
            <div className="textWarningDiv">
              <label> Username  </label>
              {this.state.isUsernameError && <ValidationMessage message={"Invalid username"}/>}
            </div>
            <input
              type="username"
              className="form-control"
              placeholder="Username"
              onChange={event =>
                this.setState({
                  username: event.target.value, isUsernameError:false
                })
              }
            />
          </div>
          <div className="form-group">
          <div className="textWarningDiv">
            <label>Password</label>
            {this.state.isPassError && <ValidationMessage message={"Invalid password"}/>}
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={event =>
                this.setState({
                  password: event.target.value, isPassError:false
                })
              }
            />
          </div>
          {!this.props.authInfo.inProgress && 
          <div className="loginButtonStyle">
          <Button
            style={{fontSize:15 }}
            size="large"
            variant="raised"
            disableRipple
            color="primary"
            onClick={() => this._onLoginPress()}
            >
              Log in
              <div className="divIcon">
              <Icon><img src={download} className="styleIcon" alt="load"/></Icon>
              </div>
              </Button>
          </div>
          }
          {this.props.authInfo.inProgress &&
          <div>
          <img src={Load} className="styleGif" alt="load"/>
            </div>}
        </form>
      </div>
    );
  }

  validateUserInfo() {
    if(this.state.username ===null || this.state.username===""){
      this.setState({isUsernameError:true}) 
      return false;
  }
    if(this.state.password===null || this.state.password===""){
    this.setState({isPassError:true});
    return false;

  }
    return true;
  }

async _onLoginPress() {
    try {
      if (!this.validateUserInfo()) {
        throw new Error("Try again!");
      }
      await this.props.loginUser(this.state.username,this.state.password);
      
      if(this.props.authInfo.token!==null){
        this.props.history.push('/');
      }else {
        this.setState({
          isAuthError:true
        })
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  renderError(){
    return (
      <div >
        <Dialog
          open={this.state.isAuthError}
          transition={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle className="divDialog" id="alert-dialog-slide-title">
            {"Opps!"}
          </DialogTitle>
          <DialogTitle className="divDialog" id="alert-dialog-slide-title">
            {"User or password incorrect !"}
          </DialogTitle>
          <DialogActions>
            <Button  className="divDialog" onClick={this.handleClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  handleClose = () => {
    this.setState({ isAuthError: false });
  };
}
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function mapStateToProps(state){
  return {
    authInfo:state.authReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loginUser:(username,password)=>loginUser(username,password)},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps) (withRouter(TextFieldGroup))
