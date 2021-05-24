import React, { Component } from 'react';

import './FormPatient.css';

class FormPatient extends Component {
  render() {
    return (
      <div>
        <form className="box">
          <h1>Add patient</h1>
          <input type="text" placeholder="First Name..." />
          <br />
          <input type="text" placeholder="Last Name..." />
          <br />
          <input type="date" />
          <br />
          <select defaultValue="Select Gender">
            <option defaultValue>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>


          <input className="add-patient" type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default FormPatient;
