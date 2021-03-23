/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import { withRouter  } from "react-router-dom";
import './auth.css'

class AuthSignup extends Component {

   nextPath(path) {
    this.props.history.push(path);
  }

    render() {
        return <div className="container" ><div className="card-items">

            <div className="card-signup">
        <div className="block">
            <div className="input-t">
                <div classeName="top-login">
                <label className="text"><center>Sign Up</center></label>
                </div>
                <div className="content">
                <input type="text" className="form__field" placeholder="First Name"></input>
                <input type="text" className="form__field" placeholder="Last Name"></input>
                <input type="email" className="form__field" placeholder="Email"></input>

                <input type="date" className="form__field" placeholder="Date"></input>


             <input type="password" className="form__field" placeholder="Password"></input>
              <input type="password" className="form__field" placeholder="Confirm Password"></input>
             </div>
             <div classeName="footer-login ">

      <input type="radio" ></input>I'm a doctor

             <button onClick={() => this.nextPath('/')}>Log In</button>


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
export default withRouter(AuthSignup);
