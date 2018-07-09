import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";

class FormDoctorInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNumeError: false,
      isPrenumeError: false,
      isAdresaError: false,
      isEmailError: false,
      isNrtelError: false,
      isSpecializare: false,

      nume: null,
      prenume: null,
      adresaFb: null,
      email: null,
      nr: null,
      specializare: null,
    };
  }
  render() {
    return (
      <div>
        <form className=" formStyle">
          <label className="labelStyles">
            Name:
            <div className={this.state.isNumeError ? "inputError" : ""}>
              <input
                class="form-control"
                type="text"
                name="name"
                placeholder={this.state.isNumeError ? "Mesaj de eroare" : ""}
                onChange={text =>
                  this.setState({
                    nume: text.target.value,
                    isNumeError: false
                  })
                }
              />
            </div>
          </label>

          <label className="labelStyles">
            LastName:
            <div className={this.state.isPrenumeError ? "inputError" : ""}>
              <input
                class="form-control"
                type="text"
                name="prenume"
                placeholder={this.state.isPrenumeError ? "Mesaj de eroare" : ""}
                onChange={text =>
                  this.setState({
                    prenume: text.target.value,
                    isPrenumeError: false
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
                placeholder={this.state.isEmailError ? "Mesaj de eroare" : ""}
                onChange={text =>
                  this.setState({
                    email: text.target.value,
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
                type="e-mail"
                name="email"
                placeholder={"/facebook"}
                onChange={text =>
                  this.setState({
                    adresaFb: text.target.value
                  })
                }
              />
            </div>
          </label>
          <label className="labelStyles">
           Number phone:
            <div className={this.state.isNrtelError ? "inputError" : ""}>
              <input
                class="form-control"
                type="text"
                name="telefon"
                placeholder={this.state.isNrtelError ? "Mesaj de eroare" : ""}
                onChange={text =>
                  this.setState({
                    nr: text.target.value,
                    isNrtelError: false
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
              onChange={text =>
                this.setState({
                  specializare: text.target.value,
                  isSpecializare: false
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
              <option>Neurology‎  </option>
              <option>Pediatric neurology‎</option>
              <option>Obstetrics - Gynecology‎</option>
              <option>Oftalmology  </option>
              <option>Oncology</option>
              <option>Pediatric orthopedics</option>
              
              <option>Orthopedics and traumatology‎ </option>
              <option>Otorinolaringology‎  </option>
              <option>Patologiy </option>
              <option>Pediatrics‎ </option>
              <option>Pneumology‎   </option>

              
              <option>Psihiatriy  </option>
              <option>Pediatrics‎ Pneumology‎ </option>
              <option>Reumatology‎  </option>
              <option>Stomatology‎</option>
              <option>Urology  </option>
            </select>
          </label>
        </form>
        <Button
          bsSize="lg"
          className="btnStyle"
          onClick={() => this._getDateMedic()}
        >
          Next
        </Button>
      </div>
    );
  }

  _getDateMedic = () => {
    let date = {
      nume: this.state.nume,
      prenume: this.state.prenume,
      specializare: this.state.specializare,
      email: this.state.email,
      numarTelefon: this.state.nr,
      facebook: this.state.adresaFb
    };
    this.props.date(date);
  };
}
export default FormDoctorInfo;
