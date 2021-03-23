/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from 'react';
import { withRouter  } from "react-router-dom";
import './auth.css'

class Auth extends Component {

   nextPath(path) {
    this.props.history.push(path);
  }

    render() {
        return <div className="container" ><div className="card-items">

            <div className="card-login">
        <div className="block">
            <div className="input-t">
                <div classeName="top-login">
                <label className="text"><center>Log In</center></label>
                </div>
                <div className="content">
                <input type="text" className="form__field" placeholder="Username"></input>


             <input type="password" className="form__field" placeholder="Password"></input>
             </div>
             <div classeName="footer-login ">



             <button onClick={() => this.nextPath('/studyList')}>Log In</button>


             </div>

             </div>

             <div className="hr"></div>
             <div className="align">
             <div classeName="create-account">
             <a onClick={() => this.nextPath('/auth/signup')}>Create an account</a>
              <a onClick={() => this.nextPath('/auth/forgot')}>Forgot password?</a>
             </div>
             <div classeName="create-account">

             </div>
             </div>
             </div>
             </div>

             </div></div>;

    }
}
export default withRouter(Auth);
