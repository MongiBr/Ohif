/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import './bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './style.component.css';
//import ViewerLocalFile from './sauvegarde-upload-image';
//import { BrowserRouter as Router, Route } from 'react-router-dom';

const User = props => (
  <tr>
    <td>{props.user.username}</td>
    <td>{props.user.email}</td>
    <td>
      <Link to={'/edit/' + props.user._id}>edit</Link> |{' '}
      <a
        href="#"
        onClick={() => {
          props.deleteUser(props.user._id);
        }}
      >
        delete
      </a>
    </td>
  </tr>
);

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.deleteUser = this.deleteUser.bind(this);

    this.state = { users: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5022/users/')
      .then(response => {
        this.setState({ users: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteUser(id) {
    axios.delete('http://localhost:5022/users/' + id).then(response => {
      console.log(response.data);
    });

    this.setState({
      users: this.state.users.filter(el => el._id !== id),
    });
  }

  userList() {
    return this.state.users.map(currentuser => {
      return (
        <User
          user={currentuser}
          deleteUser={this.deleteUser}
          key={currentuser._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3> Users</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>User name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.userList()}</tbody>
        </table>
      </div>
    );
  }
}
