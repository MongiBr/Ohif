/* eslint-disable no-console */
import React, { Component } from 'react';
import axios from 'axios';
import './style.component.css';
export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      passeword: '',
      email: '',
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      passeword: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      passeword: this.state.passeword,
      email: this.state.email,
    };

    // eslint-disable-next-line no-console
    console.log(user);

    axios
      .post('http://localhost:5022/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: '',
      passeword: '',
      email: '',
    });
  }

  render() {
    return (
      <div className="box-container1">
        <div className="box-container">
          <h3>Create New User</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="form-group">
              <label>Password: </label>
              <input
                type="password"
                required
                className="form-control"
                value={this.state.passeword}
                onChange={this.onChangePassword}
              />
            </div>
            <div className="form-group">
              <label>Email: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Add User" className="btn_" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
