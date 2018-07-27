import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import PropTypes from "prop-types";

class DaySchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      hours: {
        start: 0,
        finish: 0
      }
    };
  }
  toggleCheckboxChange = () => {
    const { handleCheckboxChange, day } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }));

    handleCheckboxChange(day);
  };
  callback = hours => {
    this.setState({ hours: hours });
  };
  render() {
    const { isChecked } = this.state;
    return (
      <div>
        <label className="stylesCheckbox">
          <input
            type="checkbox"
            placeholder="Day"
            name="day"
            type="checkbox"
            value={this.props.day}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          {this.props.day}
        </label>
        &nbsp; &nbsp; &nbsp;
        <label className="stylesLabels">from</label>
        <input
          className="stylesInputSchedule"
          type="number"
          name="hour"
          min={0}
          max={23}
          value={this.state.hours.start}
          onChange={value => {
            console.log(value.target);
            this.props.callback(this.hours);
          }}
        />
        &nbsp;
        <label className="stylesLabels">to</label>
        <input
          className="stylesInputSchedule2"
          defaultValue={0}
          type="number"
          name="hour"
          min={0}
          max={23}
        />
      </div>
    );
  }
}
DaySchedule.propTypes = {
  label: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired
};
export default DaySchedule;
