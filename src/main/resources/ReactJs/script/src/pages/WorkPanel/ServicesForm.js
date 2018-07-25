import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";
import { withRouter } from "react-router-dom";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import Slide from "material-ui/transitions/Slide";
import TextareaAutosize from "react-autosize-textarea";
import Progress from "../../componente/Progress/index";
import Api from "../../Api/Api";
import WorkPanel from "../../pages/WorkPanel/index";

class ServicesForm extends Component{
  constructor(props) {
    super(props)
        this.state = {
            addServicesSuccess: false,
            addServicesError: false,
            nameService: null,
            priceServices: null,
        };
    }

   
    render(){

        return(
            <div>
        {this.state.addServicesSuccess && (
        <Dialog
        open={this.state.addServicesSuccess}
        transition={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="divDialog" id="alert-dialog-slide-title">
          {"All right!"}
        </DialogTitle>
        <DialogTitle className="divDialog" id="alert-dialog-slide-title">
          {"Your service has been registered!"}
        </DialogTitle>
        <DialogActions>
          <Button  className="divDialog" onClick={this.handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      )}
      {this.state.addServicesError && (
        <Dialog
        open={this.state.addServicesError}
        transition={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="divDialog" id="alert-dialog-slide-title">
          {"Oops!"}
        </DialogTitle>
        <DialogTitle className="divDialog" id="alert-dialog-slide-title">
          {"Your service has not been registered. Try again please!"}
        </DialogTitle>
        <DialogActions>
          <Button  className="divDialog" onClick={this.handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      )}
      <div>

       <label className="">
          <div >
            <TextareaAutosize className=""  rows={1}  placeholder="Service name"
            onChange={(event)=>this.setState({
                nameService: event.target.value,
            })
            }
             />
            </div>
            </label>
             <label className="">
             
          <div >
            <TextareaAutosize className=""  rows={1}  placeholder="Service price"
            onChange={(event)=>this.setState({
                priceServices: event.target.value,
            })
            }
             />
             
          </div>
        </label>

         <Button
          bsSize="lg"
          className="btnStyle"
          onClick={() => this.postServiceDate()}
        >
          Send
        </Button>
        </div>

                </div>
        );
    }

    validateServicesDate(){

      if (
       this.state.nameService === null ||
       this.state.nameService === "" ||
        this.state.priceServices === null ||
        this.state.priceServices === ""
        
      ) {
        return false;
      }
      return true;
    }

    postServiceDate(){

      this.setState({
        inProgress: true
      });
      try {
        this._onPress();
        this.setState({
          inProgress: false
        });
      } catch (error) {
        console.log(error.message);
        this.setState({
          inProgress: false
        });
      }

      if(this.validateServicesDate()){

        let info={
          denumire: this.state.nameService,
          pret: this.state.priceServices,
          medic: {
            idMed: this.props.idDoctor
            
          }
      };
      this._onPress(info);
      }else{
        this.setState({addServicesError:true})
      }
  }
   
    async _onPress(date) {
      try {
  
        let services = [];
        let response = await fetch(Api.addServicesUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: this.props.token
          },
          body: JSON.stringify({
            denumire: date.denumire,
            pret: date.pret,
            medic:date.medic,
            
          })
        });
        console.log(JSON.stringify(date), "response")
        if (response.status !== 201) {
          throw new Error("Error");
        } else {
          this.setState({ addServicesSuccess: true });
        }
      } catch (error) {
        this.setState({ addServicesError: true});
      }
    }

    handleClose = () => {
      this.setState({ addServicesSuccess: false, addServicesError:false });
      this.props.history.push({
        pathname: "/workpanel"
      });
    };

    
   
}

function Transition(props) {
    return <Slide direction="up" {...props} />;
  }
export default withRouter(ServicesForm);