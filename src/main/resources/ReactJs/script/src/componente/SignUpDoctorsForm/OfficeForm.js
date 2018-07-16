import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";

class OfficeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddressError: false,
      isNameError: false,
      name: null,
      address: null,
      type: null
    };
  }
  render() {
    return (
      <div>
        <form className=" formStyle">
          <label className="labelStyles">
           Office name:
            <div className={this.state.isNameError ? "inputError" : ""}>
              <input
                class="form-control"
                type="text"
                name="name"
                placeholder={
                  this.state.isNameError ? "Error message" : ""
                }
                onChange={event =>
                  this.setState({
                    name: event.target.value,
                    isNameError: false
                  })
                }
              />
            </div>
          </label>

          <label className="labelStyles">
            Office address:
            <div className={this.state.isAddressError ? "inputError" : ""}>
              <input
                class="form-control"
                type="text"
                name="prenume"
                placeholder={this.state.isAddressError ? "Error message" : ""}
                onChange={event =>
                  this.setState({
                    address: event.target.value,
                    isAddressError: false
                  })
                }
              />
            </div>
          </label>

          <br />

          <label className="labelStyles">
            Office type:
            <select
              className="specializariStyle"
              onChange={event =>
                this.setState({
                  type: event.target.value
                })
              }
            >
              <option>-------</option>
              <option>State</option>
              <option>Private</option>
            </select>
          </label>
        </form>
        <Button
          bsSize="lg"
          className="btnStyle"
          onClick={() => this._onBtnPress()}
        >
          Save
        </Button>
      </div>
    );
  }
  _onBtnPress() {
    let officeInfo = {
      nameOffice: this.state.name,
      addressOffice: this.state.address,
      typeOffice: this.state.type
    };
    this.props.date(officeInfo);
  }
}
export default OfficeForm;
