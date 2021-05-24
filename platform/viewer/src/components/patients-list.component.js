/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import './bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import ComponentToPrint from './users-list.component';
//import '../report.css';
import axios from 'axios';
import './style.component.css';
const Patient = props => (
  <tr>
    <td>{props.patient.patientname}</td>
    <td>{props.patient.description}</td>
    <td>{props.patient.StartStudydate.substring(0, 10)}</td>
    <td>{props.patient.EndStudydate.substring(0, 10)}</td>
    <td>{props.patient.CreatedBy}</td>
    <td>
      <form method="get" action="/save">
        <button type="submit">Click to load</button>
      </form>
    </td>
    <td>
      <Link to={'/edit/' + props.patient._id}>edit</Link> |{' '}
      <a
        href="#"
        onClick={() => {
          props.deletePatient(props.patient._id);
        }}
      >
        delete
      </a>
      | <Link to={'/save/' + props.patient._id}>save</Link>
    </td>
  </tr>
);

export default class PatientsList extends Component {
  constructor(props) {
    super(props);

    this.deletePatient = this.deletePatient.bind(this);

    this.state = { patients: [] };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5022/patients/')
      .then(response => {
        this.setState({ patients: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deletePatient(id) {
    axios.delete('http://localhost:5022/patients/' + id).then(response => {
      console.log(response.data);
    });

    this.setState({
      patients: this.state.patients.filter(el => el._id !== id),
    });
  }

  patientList() {
    return this.state.patients.map(currentpatient => {
      return (
        <Patient
          patient={currentpatient}
          deletePatient={this.deletePatient}
          key={currentpatient._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3> Patients</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Patient name</th>
              <th>Description</th>
              <th>Start study date</th>
              <th>End study date</th>
              <th>Created By</th>
              <th>Upload files</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.patientList()}</tbody>
        </table>
        <form method="get" action="/report">
          <button type="submit">Report this</button>
        </form>
      </div>
    );
  }
}
