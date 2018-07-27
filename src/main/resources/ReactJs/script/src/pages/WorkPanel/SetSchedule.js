import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";
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

const items = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
class SetSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputAdd: false,
      inputDelete: false,
      addScheduleSuccess: false,
      addScheduleError: false,
      addDay: null,
      scheduleHour: null,
      selectedInput: false
    };
  }

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  };
  toggleCheckbox = day => {
    if (this.selectedCheckboxes.has(day)) {
      this.selectedCheckboxes.delete(day);
      this.setState({ inputDelete: true, inputAdd: false });
    } else {
      this.selectedCheckboxes.add(day);
      this.setState({ inputAdd: true, inputDelete: false });
    }
  };
  callback = hours => {
    console.log(hours);
  };

  handleFormSubmit() {
    console.log("CALL API");
  }

  renderListDays() {
    let listDays = [];
    for (const day of this.selectedCheckboxes) {
      listDays.push(<p>{day} "is selected"</p>);
    }
    return listDays;
  }

  render() {
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
                  {items.map(item => (
                    <DaySchedule
                      handleCheckboxChange={this.toggleCheckbox}
                      day={item}
                      callback={this.callback}
                    />
                  ))}
                  <button className="btn btn-default" type="submit">
                    Save
                  </button>
                  {this.renderListDays()}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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

export default SetSchedule;
