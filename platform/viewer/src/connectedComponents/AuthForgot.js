/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import { withRouter  } from "react-router-dom";
import './auth.css'

class AuthForgot extends Component {

   nextPath(path) {
    this.props.history.push(path);
  }

    render() {
        return <div className="container" ><div className="card-items">

            <div className="card-forgot">
        <div className="block">
            <div className="input-t">
                <div classeName="top-login">
                <label className="text-forgot"><center>Forgot Password</center></label>
                </div>
                <div className="content">
                <input type="email" className="form__field" placeholder="Email"></input>



             </div>
             <div classeName="footer-login ">



             <button onClick={() => this.nextPath('/')}>Send</button>


             </div>

             </div>

             <div className="hr"></div>
             <div className="align">
             <div classeName="create-account">
             <a onClick={() => this.nextPath('/')}>Log In</a>

             </div>
             <div classeName="create-account">

             </div>
             </div>
             </div>
             </div>

             </div></div>;

    }
}
export default withRouter(AuthForgot);
