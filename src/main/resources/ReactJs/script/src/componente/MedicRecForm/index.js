import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import { Button } from "react-bootstrap";
import "./styles.css";

class MedicRecForm extends Component{
  constructor(props) {
    super(props);
  
    this.state = {
      Show:true,
      Show2:false,

    };
  }

  render(){
    return(
      <div>
        {this.state.Show &&(
      <div>
        <p> Primul</p>
        </div>
        )}
        {this.state.Show2 && (
     <div>
     <p> Al doilea</p>
     </div>
        )}
      <Button onClick={()=>this.onClick()}>
        Click
        </Button>
</div>
    );
  }
  onClick(){
    this.setState({Show2: !this.state.Show2,Show:!this.state.Show})
  }
}
export default MedicRecForm;

