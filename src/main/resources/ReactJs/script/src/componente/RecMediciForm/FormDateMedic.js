import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";

class DateMedic extends Component {
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
            Nume:
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
            Prenume:
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
            Adresa Facebook:
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
            Nr. telefon:
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
            Specializare:
            <select
              className="specializariStyle"
              onChange={text =>
                this.setState({
                  specializare: text.target.value,
                  isSpecializare: false
                })
              }
            >
              <option>-------</option>
              <option>Alergologie și imunologie clinică</option>
              <option>Anestezie și terapie intensivă‎ </option>
              <option>Boli infecțioase</option>
              <option>Cardiologie‎</option>
              <option>Chirurgie cardiovasculară‎ </option>
              <option>Chirurgie generală‎ </option>
              <option>Chirurgie oro-maxilo-facială‎ </option>
              <option>Chirurgie pediatrică</option>
              <option>Chirurgie plastică-microchirurgie reconstructivă‎ </option>
              <option>Chirurgie toracică‎ </option>
              <option>Chirurgie vasculară</option>
              <option>Dermatovenerologie‎</option>
              <option>Endocrinologie‎ </option>
              <option>Epidemiologie‎</option>
              <option>Gastroenterologie‎</option>

                <option>Hematologie </option>
              <option>Nefrologie‎ </option>
              <option>Neonatologie‎ </option>
              <option>Neurochirurgie‎</option>
              <option>Neurologie‎  </option>
              <option>Neurologie pediatrică‎</option>
              <option>Obstetrică - ginecologie‎</option>
              <option>Oftalmologie‎  </option>
              <option>Oncologie‎</option>
              <option>Ortopedie pediatrică‎ </option>
              
              <option>Ortopedie și traumatologie‎ </option>
              <option>Otorinolaringologie‎  </option>
              <option>Patologie‎ </option>
              <option>Pediatrie‎ </option>
              <option>Pneumologie‎   </option>

              
              <option>Psihiatrie‎  </option>
              <option>Psihiatrie pediatrică‎  </option>
              <option>Reumatologie‎  </option>
              <option>Stomatologie‎</option>
              <option>Urologie‎  </option>
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
export default DateMedic;
