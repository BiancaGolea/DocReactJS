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
import TimePicker from "./TimePickers";
import Checkbox from "./CheckBox";
import DaySchedule from "./DaySchedule";

const items = ["Monday"];

class SetSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addScheduleSuccess: false,
      addScheduleError: false,
      addDay: null,
      scheduleHour: null
    };
  }

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  };
  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  };
  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, "is selected.");
    }
  };

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  createCheckboxes = () => items.map(this.createCheckbox);
  render() {
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {this.renderListDays()}
            </form>
          </div>
        </div>
      </div>
    </div>;
    return (
      <div>
        {this.state.addScheduleSuccess && (
          <Dialog
            open={this.state.addScheduleSuccess}
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
              {"Your schedule has been registered!"}
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
        {this.state.addScheduleError && (
          <Dialog
            open={this.state.addScheduleError}
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
              {"Your schedule has not been registered. Try again please!"}
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
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <form onSubmit={this.handleFormSubmit}>
                  {/* <DaySchedule /> */}
                  {this.renderListDays()}

                  {/* {this.createCheckboxes()}
              from
              <TimePicker/>
              to
              <TimePicker/>
              <button className="btn btn-default" type="submit">Save</button> */}
                </form>
              </div>
            </div>
          </div>

          {/* <Button
          bsSize="lg"
          className="btnStyle"
          // onClick={() => this.postServiceDate()}
        >
          Send
        </Button> */}
        </div>
      </div>
    );
  }

  renderListDays() {
    let list = ["Monday", "Tuesday"].map(list => <DaySchedule day={list} />);
    return list;
  }
  handleClose = () => {
    this.setState({ addScheduleSuccess: false, addScheduleError: false });
    this.props.history.push({
      pathname: "/workpanel"
    });
  };
}

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default withRouter(SetSchedule);
