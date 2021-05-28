import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import './style.css'
class Login extends Component {

  state = {
    email: '',
    password: '',
    message: ''
  }

  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post('/api/login', data)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem('token', response.data.token);
          window.location.href = '/';
        } else {
          console.log(response.data.failed)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {

    return (
      localStorage.getItem('token') ? <Redirect to="/" /> :
        <div className='style'>
          <br></br><br></br><br></br>
          <div class="row">
            <div class="jumbotron col-lg-4 offset-lg-4">
              <h3 class="text-center">Login Account</h3>
              <form onSubmit={this.formSubmit}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input type="email" class="form-control" name="email" aria-describedby="emailHelp" required onChange={(e) => { this.setState({ email: e.target.value }) }} />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" name="password" required onChange={(e) => { this.setState({ password: e.target.value }) }} />
                </div>

                <button type="submit" class="btn btn-success btn-block">LOGIN</button><br></br><br></br>

              I don't have an Account <Link to="/register">Register Now</Link>
              </form>
            </div>
          </div>
        </div>
    )
  }
}

export default Login
