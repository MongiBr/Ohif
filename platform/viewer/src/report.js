import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
//import './report.css';
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import './bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
//import ComponentToPrint from './users-list.component';
//import '../report.css';
import axios from 'axios';
import './components/style.component.css';
const Patient = props => (
  <div className="lignes">
    <div className="c-lignes">
      <h1 className="titre_2">Patient</h1>
      <h2>Patient Name:</h2>
      <h3>{props.patient.patientname}</h3>
      <h2>Patient Description:</h2>
      <h3>{props.patient.description}</h3>
      <h2>Patient Start Study Date:</h2>
      <h3>{props.patient.StartStudydate.substring(0, 10)}</h3>
      <h2>Patient End Study Date:</h2>
      <h3>{props.patient.EndStudydate.substring(0, 10)}</h3>
      <h2>Patient Created by:</h2>
      <h3>{props.patient.CreatedBy}</h3>
      <br />
    </div>
  </div>
);

class ComponentToPrint extends Component {
  constructor(props) {
    super(props);

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
  patientList() {
    return this.state.patients.map(currentpatient => {
      return <Patient patient={currentpatient} key={currentpatient._id} />;
    });
  }

  render() {
    return (
      <body>
        <div className="content">
          <div className="GP">
            <h5 className="en-tete"> GP.Passion-Team-ISIMM 2021/2022</h5>
          </div>
          <br />
          <div className="titre_">
            <h1> Patients List</h1>
          </div>
          <br />
          <tbody>{this.patientList()}</tbody>
        </div>
      </body>
    );
  }
}

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="report">
      <ComponentToPrint ref={componentRef} />
      <button className="btn_" onClick={handlePrint}>
        Print this out!
      </button>
    </div>
  );
};

export default Example;
