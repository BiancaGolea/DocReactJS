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
import Icon from "material-ui/Icon";
import addReviewUrl from "../../Api/Api";
import click from "../../assets/click.png";

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: null,
      gradeDocServices: 1,
      gradeEquipment: 1,
      gradePrice: 1,
      gradeLookOffice: 1,
      gradeLocation: 1,
      inProgress: false,
      reviewSuccess: false,
      reviewError: false
    };
  }

  render() {
    console.log(this.state.reviewSuccess);
    return (
      <div className="divMainReviewForm">
        {this.state.reviewSuccess && (
          <Dialog
            open={this.state.reviewSuccess}
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
              <Button
                className="divDialog"
                onClick={this.handleClose}
                color="primary"
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>
        )}
        {this.state.reviewError && (
          <Dialog
            open={this.state.reviewError}
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
              <Button
                className="divDialog"
                onClick={this.handleClose}
                color="primary"
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>
        )}
        <label className="divTextComment">
          You want to say something?
          <div>
            <TextareaAutosize
              className="styleDivComments"
              rows={5}
              placeholder="Comment here"
              onChange={event =>
                this.setState({
                  description: event.target.value
                })
              }
            />
          </div>
        </label>
        <p className="pTitleGradeRating">Grades for:</p>

        <label className="divGradeRating">
          Medical services:
          <div>
            <NumericInput
              className=" "
              min={1}
              max={10}
              value={this.state.gradeDocServices}
              size={1}
              onChange={event =>
                this.setState({
                  gradeDocServices: event
                })
              }
            />
          </div>
        </label>
        <label className="divGradeRating">
          Equipment:
          <div>
            <NumericInput
              className=" "
              min={1}
              max={10}
              value={this.state.gradeEquipment}
              size={1}
              onChange={event =>
                this.setState({
                  gradeEquipment: event
                })
              }
            />
          </div>
        </label>

        <label className="divGradeRating">
          Service price:
          <div>
            <NumericInput
              className=" "
              min={1}
              max={10}
              value={this.state.gradePrice}
              size={1}
              onChange={event =>
                this.setState({
                  gradePrice: event
                })
              }
            />
          </div>
        </label>

        <label className="divGradeRating">
          Office look:
          <div>
            <NumericInput
              className=" "
              min={1}
              max={10}
              value={this.state.gradeLookOffice}
              size={1}
              onChange={event =>
                this.setState({
                  gradeLookOffice: event
                })
              }
            />
          </div>
        </label>

        <label className="divGradeRating">
          Office location:
          <div>
            <NumericInput
              className=" "
              min={1}
              max={10}
              value={this.state.gradeLocation}
              size={1}
              onChange={event =>
                this.setState({
                  gradeLocation: event
                })
              }
            />
          </div>
        </label>
        <div className="divStyleButton">
          <Button
            style={{ fontSize: 15 }}
            size="large"
            variant="raised"
            disableripple="true"
            color="primary"
            onClick={() => this._onClickBtn()}
          >
            Send
            <Icon>
              <img src={click} className="styleIcon" alt="load" />
            </Icon>
          </Button>
        </div>
      </div>
    );
  }
  _onClickBtn() {
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
  async _callApi() {
    try {
      let today = new Date();
      const resp = await fetch(addReviewUrl.addReviewUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: this.props.token
        },
        body: JSON.stringify({
          descriere: this.state.description,
          notaAspectcab: this.state.gradeLookOffice,
          notaAparatura: this.state.gradeEquipment,
          notaPret: this.state.gradePrice,
          notaLocatie: this.state.gradeLocation,
          notaServmed: this.state.gradeDocServices,
          username: this.props.username,
          dataRecenzie: today.getTime(),
          medic: {
            idMed: this.props.idMed
          }
        })
      });
      if (resp.status !== 201) {
        throw new Error("recenzie error");
      }
      this.setState({
        reviewSuccess: true
      });
    } catch (error) {
      console.log("Eroare --:" + error.message);
      this.setState({
        reviewError: true
      });
    }
  }
  handleClose = () => {
    this.setState({ reviewSuccess: false, reviewError: false });
    this.props.history.push({
      pathname: "/"
    });
  };
}
function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default withRouter(ReviewForm);
