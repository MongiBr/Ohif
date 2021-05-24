import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar.component';
import PatientsList from './components/patients-list.component';
import EditPatient from './components/edit-patient.component';
import users_page from './users_page.js';
import './app2.css';
import CreatePatient from './components/create-patient.component';
import CreateUser from './components/create-user.component';
import ViewerLocalFile from './components/sauvegarde-upload-image';
import './app2.css';
function App2() {
  return (
    <div className="container">
      <Navbar />
      <br />
      <Router>
        <Route path="/app" exact component={PatientsList} />
        <Route path="/CreatePatient" component={CreatePatient} />
        <Route path="/user" component={CreateUser} />
        <Route path="/edit/:id" component={EditPatient} />
        <Route path="/save/:id" exact component={ViewerLocalFile} />
        <Route path="/UsersSpace" component={users_page} />
      </Router>
    </div>
  );
}
export default App2;

