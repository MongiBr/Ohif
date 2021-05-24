import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './bootstrap/dist/css/bootstrap.min.css';
export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/app" className="navbar-brand">
          Patients List
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/CreatePatient" className="nav-link">
                Create Patient
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/UsersSpace" className="nav-link">
                Users Space
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
