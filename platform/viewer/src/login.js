/* eslint-disable no-console */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import axios from 'axios';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePasseword = this.onChangePasseword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      passeword: '',
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangePasseword(e) {
    this.setState({
      passeword: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const login = {
      username: this.state.username,
      passeword: this.state.passeword,
    };

    axios.post('http://localhost:5022/auth/login', login).then(res => {
      console.log(res.data);
      window.location = '/app';
    });
  }
  render() {
    return (
      <body>
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="card">
              <div className="card-header">
                <h3>SIGN IN </h3>
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
                      type="password"
                      className="form-control"
                      placeholder="password"
                      value={this.state.passeword}
                      onChange={this.onChangePasseword}
                    />
                  </div>
                  <div className="row align-items-center remember">
                    <input type="checkbox" />
                    Remember Me
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Sign In"
                      className="btn float-right login_btn"
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-center links">
                  Don't have an account?<a href="/sign_up">Sign Up</a>
                </div>
                <div className="d-flex justify-content-center">
                  <a href="/login">Forgot your password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
