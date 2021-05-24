import React, { Component } from 'react';

import './SignIn.css';

class SignIn extends Component {
  render() {
    return (
      <div>
        <form className="box">
          <h1>Sign In</h1>
          <input type="text" placeholder="Email..." />
          <br />
          <input type="password" placeholder="Password..." />
          <br />
          <input className="sign-in" type="submit" value="Log in" />
          <br />
          <input
            className="dont-have"
            type="submit"
            value="DON'T HAVE AN ACCOUNT ?"
          />
        </form>
      </div>
    );
  }
}

export default SignIn;
