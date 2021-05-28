import React from 'react';
import './AddPatient.css';
import axios from 'axios';

import { Component } from 'react';
class AddPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Patientname: '',
      Patientdescripton: '',
      Patientdate: '',
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = e => {
    e.preventDefault();
    axios
      .post('/patient/add', this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { Patientname, Patientdescripton, Patientdate } = this.state;
    return (
      <form className="container" onSubmit={this.submitHandler}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="Patientname"
            value={Patientname}
            onChange={this.changeHandler}
          />
        </div>
        <div className="form-group">
          <label>Discription</label>
          <input
            type="text"
            name="Patientdescripton"
            value={Patientdescripton}
            onChange={this.changeHandler}
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="text"
            name="Patientdate"
            value={Patientdate}
            onChange={this.changeHandler}
          />
        </div>
        <button type="submit">add Patient</button>
      </form>
    );
  }
}

export default AddPatient;
