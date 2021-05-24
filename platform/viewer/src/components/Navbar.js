import React from 'react';
import { Link } from 'react-router-dom';
import './bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/app" className="nav-link">
              Patients List
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
