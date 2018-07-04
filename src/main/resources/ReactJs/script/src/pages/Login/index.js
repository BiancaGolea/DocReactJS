import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import TextFieldGroup from '../../componente/TextFieldGroup/index';
import Header from '../../componente/Header/index'
import './styles.css';



class Login extends Component {
    
      render() {
       

        return (
            <div className="divLogin">
                <Header isLoginPage={true}/>
                <h1 className="pageLoginTitle"> Login</h1>
                <TextFieldGroup/>
            </div>

        );
      }
    }
    
    export default Login;