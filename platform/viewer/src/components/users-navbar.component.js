import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './bootstrap/dist/css/bootstrap.min.css';
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/UsersSpace" className="navbar-brand">
          Users List
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/AddUser" className="nav-link">
                Add User
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/app" className="nav-link">
                Patients Space
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
