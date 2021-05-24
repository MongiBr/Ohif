import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/header.js';
import Navbar from '../components/Navbar.js';
import Patients from '../components/Patients.js';
import AddPatient from '../connectedComponents/AddPatient.js';
import axios from 'axios';

function patients_() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [posts, setPosts] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axios
      .get('http://localhost:5022/patients/')
      .then(res => setPosts(res.data))
      // eslint-disable-next-line no-console
      .catch(error => console.log(error));
  });
  return (
    <div className="root-container">
      <Header />
      <Navbar />
      <Route exact path="/patients" render={() => <Patients posts={posts} />} />
       <Route exact path="/save" render={props => <Patients {... posts} posts={posts} />} />
      <Route path="/AddPatient" component={AddPatient} />
    </div>
  );
}
export default patients_;
