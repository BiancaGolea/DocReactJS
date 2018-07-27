import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";

class FormDoctorInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNameError: false,
      isLastnameError: false,
      isAddressError: false,
      isEmailError: false,
      isPhoneError: false,
      isSpecialization: false,

      name: null,
      lastname: null,
      facebookAddress: null,
      email: null,
      phone: null,
      specialization: null
    };
  }
  render() {
    return (
      <div>
        <form className=" formStyle">
          <label className="labelStyles">
            Name:
            <div className={this.state.isNameError ? "inputError" : ""}>
              <input
                class="form-control"
                type="text"
                name="name"
                placeholder={this.state.isNameError ? "Error message" : ""}
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
            LastName:
            <div className={this.state.isLastnameError ? "inputError" : ""}>
              <input
                class="form-control"
                type="text"
                name="lastname"
                placeholder={this.state.isLastnameError ? "Error message" : ""}
                onChange={event =>
                  this.setState({
                    lastname: event.target.value,
                    isLastnameError: false
                  })
                }
              />
            </div>
          </label>

          <br />

          <label className="labelStyles">
            E-mail:
            <div className={this.state.isEmailError ? "inputError" : ""}>
              <input
                class="form-control"
                type="e-mail"
                name="email"
                placeholder={this.state.isEmailError ? "Error message" : ""}
                onChange={event =>
                  this.setState({
                    email: event.target.value,
                    isEmailError: false
                  })
                }
              />
            </div>
          </label>
          <label className="labelStyles">
            Facebook:
            <div>
              <input
                class="form-control"
                type="text"
                name="facebook"
                placeholder={"/facebook"}
                onChange={event =>
                  this.setState({
                    facebookAddress: event.target.value
                  })
                }
              />
            </div>
          </label>
          <label className="labelStyles">
            Number phone:
            <div className={this.state.isPhoneError ? "inputError" : ""}>
              <input
                class="form-control"
                type="text"
                name="phone"
                placeholder={this.state.isPhoneError ? "Error message" : ""}
                onChange={event =>
                  this.setState({
                    phone: event.target.value,
                    isPhoneError: false
                  })
                }
              />
            </div>
          </label>

          <br />
          <label className="labelStyles">
            Specialization:
            <select
              className="specializationsStyle"
              onChange={event =>
                this.setState({
                  specialization: event.target.value,
                  isSpecialization: false
                })
              }
            >
              <option>-------</option>
              <option>Clinical Allergology and Immunology</option>
              <option>Anesthesia and intensive care </option>
              <option>Infectious diseases</option>
              <option>Cardiology‎</option>
              <option>Cardiovascular Surgery </option>
              <option>General Surgery</option>
              <option>Oral-maxillo-facial surgery</option>
              <option>Pediatric Surgery</option>
              <option>Plastic Surgery Reconstructive Microsurgery</option>
              <option>Thoracic surgery‎ </option>
              <option>Vascular surgery</option>
              <option>Dermatovenereology</option>
              <option>Endocrinology </option>
              <option>Epidemiology</option>
              <option>Gastroenterology‎</option>

              <option>Hematology </option>
              <option>Nefrology‎ </option>
              <option>Neonatology‎ </option>
              <option>Neurosurgery</option>
              <option>Neurology‎ </option>
              <option>Pediatric neurology‎</option>
              <option>Obstetrics - Gynecology‎</option>
              <option>Oftalmology </option>
              <option>Oncology</option>
              <option>Pediatric orthopedics</option>

              <option>Orthopedics and traumatology‎ </option>
              <option>Otorinolaringology‎ </option>
              <option>Patologiy </option>
              <option>Pediatrics‎ </option>
              <option>Pneumology‎ </option>

              <option>Psihiatriy </option>
              <option>Pediatrics‎ Pneumology‎ </option>
              <option>Reumatology‎ </option>
              <option>Stomatology‎</option>
              <option>Urology </option>
            </select>
          </label>
        </form>
        <Button
          bsSize="lg"
          className="btnStyle"
          onClick={() => this._getDoctorInfo()}
        >
          Next
        </Button>
      </div>
    );
  }

  _getDoctorInfo = () => {
    let date = {
      name: this.state.name,
      lastname: this.state.lastname,
      specialization: this.state.specialization,
      email: this.state.email,
      phoneNumber: this.state.phone,
      facebook: this.state.facebookAddress
    };
    this.props.date(date);
  };
}
export default FormDoctorInfo;
