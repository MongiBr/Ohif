import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/users-navbar.component';
import UsersList from './components/users-list.component';
import EditUser from './components/edit-user.component';
import CreateUser from './components/create-user.component';
import App2 from './App_2';

function users_page() {
  return (
    <div className="container">
      <Navbar />
      <br />
      <Router>
        <Route path="/UsersSpace" exact component={UsersList} />
        <Route path="/AddUser" component={CreateUser} />
        <Route path="/edit/:id" component={EditUser} />
        <Route path="/app" component={App2} />
      </Router>
    </div>
  );
}
export default users_page;
