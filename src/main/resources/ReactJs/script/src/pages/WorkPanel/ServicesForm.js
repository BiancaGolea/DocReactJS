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
import Load from "../../assets/Load.gif";
import Welcome from "../Welcome/index";
import Gif from "../../assets/gif.gif";
import Icon from "material-ui/Icon";
import Upload from "../../assets/upload.jpg";

class ServicesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addServicesSuccess: false,
      addServicesError: false,
      nameService: "",
      priceServices: ""
    };
  }

  render() {
    return (
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
              <Button
                className="divDialog"
                onClick={this.handleClose}
                color="primary"
              >
                Add new service
              </Button>
              <Button
                className="divDialog"
                onClick={this.handleCloseAll}
                color="primary"
              >
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
              {"Fields might be empty. Please, insert your service!"}
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
        <div>
          <div className="divTextareaServiceForm">
            <TextareaAutosize
              id="test"
              className=""
              rows={1}
              placeholder="Service name"
              value={this.state.nameService}
              onChange={event =>
                this.setState({
                  nameService: event.target.value
                })
              }
            />
          </div>

          <div className="divTextareaServiceForm">
            <TextareaAutosize
              id="test"
              className=""
              rows={1}
              placeholder="Service price"
              value={this.state.priceServices}
              onChange={event =>
                this.setState({
                  priceServices: event.target.value
                })
              }
            />
          </div>

          <div>
            <Button
              bsSize="lg"
              className="btnStyles"
              onClick={() => this.postServiceDate()}
            >
              Save
              {!this.state.inProgress && (
                <Icon>
                  <img src={Upload} className="iconStyles" alt="upload" />
                </Icon>
              )}
              {this.state.inProgress && (
                <Icon>
                  {" "}
                  <img src={Load} className="styleGiff" alt="load" />{" "}
                </Icon>
              )}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  validateServicesDate() {
    if (
      this.state.nameService === null ||
      this.state.nameService === "" ||
      this.state.priceServices === null ||
      this.state.priceServices === ""
    ) {
      this.setState({ addServicesError: true });
      return false;
    }
    return true;
  }

  postServiceDate() {
    this.setState({
      inProgress: true,
      nameService: "",
      priceServices: ""
    });

    if (this.validateServicesDate()) {
      try {
        let info = {
          denumire: this.state.nameService,
          pret: this.state.priceServices,
          medic: {
            idMed: this.props.idDoc
          }
        };
        this._onPress(info);
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
  }

  async _onPress(date) {
    try {
      let response = await fetch(Api.addServicesUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.props.token
        },
        body: JSON.stringify({
          denumire: date.denumire,
          pret: date.pret,
          medic: date.medic
        })
      });
      console.log(JSON.stringify(date), "response");
      if (response.status !== 201) {
        throw new Error("Error");
      }
      this.setState({ addServicesSuccess: true });
    } catch (error) {
      this.setState({ addServicesError: true });
      throw new Error("Error");
    }
  }

  handleClose = () => {
    this.setState({
      addServicesSuccess: false,
      addServicesError: false,
      nameService: null,
      priceServices: null
    });
  };
  handleCloseAll = () => {
    this.setState({ addServicesSuccess: false, addServicesError: false });
    this.props.history.push({
      pathname: "/"
    });
  };
}

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
export default withRouter(ServicesForm);
