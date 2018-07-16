import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";
import { withRouter } from "react-router-dom";
import FormDoctorInfo from "./FormDoctorInfo";
import OfficeForm from "./OfficeForm";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import Slide from "material-ui/transitions/Slide";

class WorkPanelForm extends Component{

    constructor(props){
        super(props);
        this.state= {
        showSetScheduleForm: false,
        isSuccess: false,
        isError: false,
        
        };

    }

    render() {

        return(
            <div>
                </div>
        );
    }
}