/* eslint-disable no-console */
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import axios from 'axios';
export default class Sign_up extends Component {
  constructor() {
    super();
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePasseword = this.onChangePasseword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      email: '',
      passeword: '',
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePasseword(e) {
    this.setState({
      passeword: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const registered = {
      username: this.state.username,
      email: this.state.email,
      passeword: this.state.passeword,
    };

    axios
      .post('http://localhost:5022/auth/register', registered)
      .then(response => console.log(response.data));

    window.location = '/login';
  }
  render() {
    return (
      <body>
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                <h3>SIGN UP</h3>
                <div className="d-flex justify-content-end social_icon">
                  <span>
                    <i className="fab fa-facebook-square"></i>
                  </span>
                  <span>
                    <i className="fab fa-google-plus-square"></i>
                  </span>
                  <span>
                    <i className="fab fa-twitter-square"></i>
                  </span>
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="username"
                      value={this.state.username}
                      onChange={this.onChangeUsername}
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="email"
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                    />
                  </div>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-key"></i>
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                      value={this.state.passeword}
                      onChange={this.onChangePasseword}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Sign Up"
                      className="btn float-right sign_up_btn"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
