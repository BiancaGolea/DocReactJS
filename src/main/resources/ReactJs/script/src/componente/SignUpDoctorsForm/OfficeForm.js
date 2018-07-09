import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";

class OfficeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAdresaError: false,
      isDenumireError: false,
      denumire: null,
      adresa: null,
      tip: null
    };
  }
  render() {
    return (
      <div>
        <form className=" formStyle">
          <label className="labelStyles">
           Office name:
            <div className={this.state.isDenumireError ? "inputError" : ""}>
              <input
                class="form-control"
                type="text"
                name="name"
                placeholder={
                  this.state.isDenumireError ? "Mesaj de eroare" : ""
                }
                onChange={text =>
                  this.setState({
                    denumire: text.target.value,
                    isDenumireError: false
                  })
                }
              />
            </div>
          </label>

          <label className="labelStyles">
            Office address:
            <div className={this.state.isAdresaError ? "inputError" : ""}>
              <input
                class="form-control"
                type="text"
                name="prenume"
                placeholder={this.state.isAdresaError ? "Mesaj de eroare" : ""}
                onChange={text =>
                  this.setState({
                    adresa: text.target.value,
                    isAdresaError: false
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
              onChange={text =>
                this.setState({
                  tip: text.target.value
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
      denumire: this.state.denumire,
      adresaCab: this.state.adresa,
      tip: this.state.tip
    };
    this.props.date(officeInfo);
  }
}
export default OfficeForm;
