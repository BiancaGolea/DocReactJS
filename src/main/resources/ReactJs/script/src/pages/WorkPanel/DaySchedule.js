import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

class DaySchedule extends Component {
  render() {
    return (
      <div>
        <input className="stylesCheckbox" type="checkbox" placeholder="Day" />
        <label />
        &nbsp; &nbsp; &nbsp;
        <label>from</label>
        <input
          className="stylesInputSchedule"
          type="number"
          defaultValue={0}
          min={0}
          max={23}
        />
        &nbsp;
        <label>to</label>
        <input
          className="stylesInputSchedule"
          defaultValue={0}
          type="number"
          min={0}
          max={23}
        />
      </div>
    );
  }
}
export default DaySchedule;
