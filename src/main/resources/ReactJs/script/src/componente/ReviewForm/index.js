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


class ReviewForm extends Component {
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
      
      <div className="divMainReviewForm">
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
          {"Thank you!"}
        </DialogTitle>
        <DialogTitle className="divDialog" id="alert-dialog-slide-title">
          {"Your review has been registered!"}
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
          {"Sorry!"}
        </DialogTitle>
        <DialogTitle className="divDialog" id="alert-dialog-slide-title">
          {"Your review has not been registered. Try again!"}
        </DialogTitle>
        <DialogActions>
          <Button  className="divDialog" onClick={this.handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      )}
        <label className="divTextComment">
          Lasa un comentariu:
          <div >
            <TextareaAutosize className="styleDivComments"  rows={5}  placeholder="Lasa un comentariu"
            onChange={(text)=>this.setState({
              descriere: text.target.value,
            })
            }
             />
          </div>
        </label>
        <p className="pTitleGradeRating">Note pentru:</p>

        <label className="divGradeRating">
          Medical services:
          <div >
            <NumericInput className=" " min={1} max={10} value={this.state.notaServmed} size={1}
             onChange={(text)=>this.setState({
              notaServmed: text,
            })
            
          }
            />
          </div>
        </label>
        <label className="divGradeRating">
          Equipment:
          <div >
            <NumericInput className=" " min={1} max={10} value={this.state.notaAparatura} size={1} 
           onChange={(text)=>this.setState({
            notaAparatura: text,
          })
          }
            />
          </div>
        </label>

        <label className="divGradeRating">
         Services prices:
          <div >
            <NumericInput className=" " min={1} max={10} value={this.state.notaPret}  size={1} 
          onChange={(text)=>this.setState({
            notaPret: text,
          })
          }
            />
          </div>
        </label>

         <label className="divGradeRating">
          Office look:
          <div >
            <NumericInput className=" " min={1} max={10} value={this.state.notaAspectcab}  size={1} 
         onChange={(text)=>this.setState({
          notaAspectcab: text,
        })
        }
            />
          </div>
        </label>

         <label className="divGradeRating">
          Office location:
          <div >
            <NumericInput className=" " min={1} max={10} value={this.state.notaLocatie}  size={1} 
          onChange={(text)=>this.setState({
            notaLocatie: text,
          })
          }
            />
          </div>
        </label>
        <div className="divStyleButton">
        <Button
            style={{fontSize:15 }}
            size="large"
            variant="raised"
            disableRipple
            color="primary"
            onClick={() => this._onCliclBtn()}
            >
              Sent
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

export default withRouter(ReviewForm);
