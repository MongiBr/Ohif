import React, { Component } from 'react'
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import './style.css'
class Register extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    message: ''
  }

  formSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    }

    axios.post('/api/register', data)
      .then((response) => {
        localStorage.setItem('token', response.data);
        window.location.href = '/';
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    return (
      localStorage.getItem('token') ? <Redirect to="/" /> :
        <div className='style'>
          <br></br>
          <div class="row">
            <div class="jumbotron col-lg-4 offset-lg-4">
              <h3 class="text-center">Register Account</h3>
              <form onSubmit={this.formSubmit}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">User Name</label>
                  <input type="text" class="form-control" name="name" required onChange={(e) => { this.setState({ name: e.target.value }) }} />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email Address</label>
                  <input type="email" class="form-control" name="email" required onChange={(e) => { this.setState({ email: e.target.value }) }} />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="password" class="form-control" name="password" required onChange={(e) => { this.setState({ password: e.target.value }) }} />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                  <input type="password" class="form-control" name="password_confirmation" required onChange={(e) => { this.setState({ password_confirmation: e.target.value }) }} />
                </div>
                <button type="submit" class="btn btn-success btn-block">REGISTER</button><br></br><br></br>
                            I already have an Account <Link to="/login">Login Now</Link>
              </form>

            </div>
          </div>
        </div>
    )
  }
}

export default Register
