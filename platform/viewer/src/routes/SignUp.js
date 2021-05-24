import React, { Component } from 'react';

import './SignUp.css';

class SignUp extends Component {
  render() {
    return (
      <div>
        <form className="box">
          <h1>Sign Up</h1>
          <input type="text" placeholder="First Name..." />
          <br />
          <input type="text" placeholder="Last Name..." />
          <br />
          <input type="text" placeholder="Email..." />
          <br />
          <input type="password" placeholder="Password..." />
          <br />
          <input type="password" placeholder="Confirm Password..." />
          <br />
          <input className="sign-up" type="submit" value="Sign up" />

        </form>
      </div>
    );
  }
}

export default SignUp;
