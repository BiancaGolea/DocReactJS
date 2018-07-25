import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Header from "../../componente/Header/index";
import "./styles.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CardWorkPanel from "../../componente/CardWorkPanel/index";
import appointmentsAction from "../../commun/ReduxActions/AppointmentsAction";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
import signup from "../../assets/signup.png";
import menu from "../../assets/menu.png";
import ServicesForm from "./ServicesForm";
import Appointments from "./Appointments";
import SetSchedule from "./SetSchedule";

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "40px",
    top: "110px"
  },
  bmBurgerBars: {
    background: "#373a47"
  },
  bmCrossButton: {
    height: "30px",
    width: "30px"
  },
  bmCross: {
    background: "#bdc3c7"
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.4em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#373a47"
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.9em"
  },
  bmItem: {
    display: "inline-block"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.4)"
  }
};

class WorkPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      showAppoimtments: true,
      showServiceForm: false,
      hover: false
    };
  }
  async componentDidMount() {
    await this.props.appointmentsAction(
      this.props.authInfo.token,
      this.props.authInfo.idDoctor
    );
  }

  render() {
    if (
      this.props.appointments.inProgress ||
      !this.props.appointments.appointmentsList
    ) {
      return (
        <div className="divBackgroundWorkPanel">
          <SetSchedule />
          <p className="alertParagraphWorkPannel"> It working ...</p>
        </div>
      );
    }

    return (
      <div className="divBackgroundWorkPanel" id="outer-container">
        <div>
          <Header isLoginPage={true} className="headerWorkPanel" />
          <h2 className="styleTitleWorkPannel">Welcome on your profile!</h2>
        </div>

        <div onClick={() => this.closeMenu()} className="divMenuBurger">
          <Menu
            styles={styles}
            className="MenuBurger"
            burgerBarClassName={"my-class"}
            isOpen={this.state.menuOpen}
            width={230}
            onStateChange={state => this.handleStateChange(state)}
            disableOverlayClick
          >
            <a id="back" onClick={() => this.closeMenu()}>
              {" "}
              Back to Welcome
              {<img src={signup} className="imgMenu" />}
            </a>
            <a
              id="appointments"
              onClick={() => this.showAppoimtmentsFromMenu()}
            >
              View appointments
            </a>
            <a id="setSchedule" onClick={() => this.showSetScheduleFromMenu()}>
              Set schedule
            </a>
            <a id="addServices" onClick={() => this.showServiceFromMenu()}>
              Add services
            </a>
          </Menu>
        </div>
        <div>
          {!this.state.menuOpen && (
            <main
              disableCloseOnEsc
              onClick={this.props.onClick}
              burgerButtonClassName={"my-class"}
              id="page-wrap"
            />
          )}
        </div>
        {this.state.showAppoimtments && (
          <Appointments appointments={this.props.appointments} />
        )}
        {this.state.showServiceForm && <ServicesForm />}
        {this.state.showSetScheduleForm && <SetSchedule />}
      </div>
    );
  }

  showServiceFromMenu() {
    this.setState({
      showAppoimtments: false,
      showSetScheduleForm: false,
      showServiceForm: true,
      menuOpen: false
    });
  }

  showAppoimtmentsFromMenu() {
    this.setState({
      showAppoimtments: true,
      showSetScheduleForm: false,
      showServiceForm: false,
      menuOpen: false
    });
  }
  showSetScheduleFromMenu() {
    this.setState({
      showAppoimtments: false,
      showServiceForm: false,
      showSetScheduleForm: true,
      menuOpen: false
    });
  }

  async loadList() {
    await this.props.appointmentsAction(
      this.props.authInfo.token,
      this.props.authInfo.idDoctor
    );
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }
}

function mapStateToProps(state) {
  return {
    authInfo: state.authReducer,
    appointments: state.appointments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      appointmentsAction: (token, id) => appointmentsAction(token, id)
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkPanel);
