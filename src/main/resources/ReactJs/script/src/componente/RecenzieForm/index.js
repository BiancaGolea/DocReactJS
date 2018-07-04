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
import NumericInput from "react-numeric-input";
import red from "material-ui/colors/red";
import Icon from 'material-ui/Icon';
import addRecenzie from "../../Api/Api";


class RecenzieForm extends Component {
    constructor(props) {
    super(props);
    this.state = {
      descriere:null,
      notaServmed:1,
      notaAparatura:1,
      notaPret:1,
      notaAspectcab:1,
      notaLocatie:1,
      inProgress: false,
      recenzieSuccess: false,
      recenzieError:false,
    };
    }
  
  render() {
    console.log(this.state.recenzieSuccess)
    return (
      
      <div className="divPrincipal">
      {this.state.recenzieSuccess && (
        <Dialog
        open={this.state.recenzieSuccess}
        transition={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="divDialog" id="alert-dialog-slide-title">
          {"Multumim!"}
        </DialogTitle>
        <DialogTitle className="divDialog" id="alert-dialog-slide-title">
          {"Recenzia dumneavoastra s-a inregistrat !"}
        </DialogTitle>
        <DialogActions>
          <Button  className="divDialog" onClick={this.handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      )}
      {this.state.recenzieError && (
        <Dialog
        open={this.state.recenzieError}
        transition={Transition}
        keepMounted
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="divDialog" id="alert-dialog-slide-title">
          {"Ne pare rau!"}
        </DialogTitle>
        <DialogTitle className="divDialog" id="alert-dialog-slide-title">
          {"Recenzia dumneavoastra nu s-a inregistrat. Incercati din nou!"}
        </DialogTitle>
        <DialogActions>
          <Button  className="divDialog" onClick={this.handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      )}
        <label className="divTextComentariu">
          Lasa un comentariu:
          <div >
            <TextareaAutosize className="stilChenarComentarii"  rows={5}  placeholder="Lasa un comentariu"
            onChange={(text)=>this.setState({
              descriere: text.target.value,
            })
            }
             />
          </div>
        </label>
        <p className="pTitluNote">Note pentru:</p>

        <label className="divNote">
          Servicii medicale:
          <div >
            <NumericInput className=" " min={1} max={10} value={this.state.notaServmed} size={1}
             onChange={(text)=>this.setState({
              notaServmed: text,
            })
            
          }
            />
          </div>
        </label>
        <label className="divNote">
          Aparatura:
          <div >
            <NumericInput className=" " min={1} max={10} value={this.state.notaAparatura} size={1} 
           onChange={(text)=>this.setState({
            notaAparatura: text,
          })
          }
            />
          </div>
        </label>

        <label className="divNote">
          Pret servicii:
          <div >
            <NumericInput className=" " min={1} max={10} value={this.state.notaPret}  size={1} 
          onChange={(text)=>this.setState({
            notaPret: text,
          })
          }
            />
          </div>
        </label>

         <label className="divNote">
          Aspectul cabinetului:
          <div >
            <NumericInput className=" " min={1} max={10} value={this.state.notaAspectcab}  size={1} 
         onChange={(text)=>this.setState({
          notaAspectcab: text,
        })
        }
            />
          </div>
        </label>

         <label className="divNote">
          Locatia cabinetului:
          <div >
            <NumericInput className=" " min={1} max={10} value={this.state.notaLocatie}  size={1} 
          onChange={(text)=>this.setState({
            notaLocatie: text,
          })
          }
            />
          </div>
        </label>
        <div className="divStilButton">
        <Button
            style={{fontSize:15 }}
            size="large"
            variant="raised"
            disableRipple
            color="primary"
            onClick={() => this._onCliclBtn()}
            >
              Trimite
              <Icon><img src={require("../../assets/click.png")} className="styleIcon" alt="load"/></Icon>
            </Button>
            </div>
      </div>
    );
  }
  _onCliclBtn(){
    this.setState({
      inProgress: true
    });
    try {
      this._callApi();
      this.setState({
        inProgress: false
      });
    } catch (error) {
      console.log(error.message);
      this.setState({
        inProgress: false
      });
    }
  }
  async _callApi(){
    try {
      let today=new Date();
      const resp= await fetch(addRecenzie.addRecenzie,{
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json", 
          Authorization: this.props.token
        },
        body: JSON.stringify({
          descriere:this.state.descriere,
          notaAspectcab:this.state.notaAspectcab,
          notaAparatura:this.state.notaAparatura,
          notaPret:this.state.notaPret,
          notaLocatie:this.state.notaLocatie,
          notaServmed:this.state.notaServmed,
          username:this.props.username,
          dataRecenzie:today.getTime(),
          medic:{ idMed:this.props.idMed
          }
        })
      })
      if (resp.status !== 201) {
        throw new Error("recenzie error");
      }
      console.log("___-----------------------____")
      this.setState({
        recenzieSuccess: true
      });
      
    } catch (error) {

      console.log("Eroare --:" + error.message);
      this.setState({
        recenzieError: true
      });
    }
  }
  handleClose = () => {
    this.setState({ recenzieSuccess: false, recenzieError:false});
    this.props.history.push({
      pathname: "/",
    })
  };
}
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default withRouter(RecenzieForm);
