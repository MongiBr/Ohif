/* eslint-disable no-console */
import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.component.css';
export default class CreatePatient extends Component {
  constructor(props) {
    super(props);

    this.onChangePatientname = this.onChangePatientname.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeStartStudydate = this.onChangeStartStudydate.bind(this);
    this.onChangeEndStudydate = this.onChangeEndStudydate.bind(this);
    this.onChangeCreatedBy = this.onChangeCreatedBy.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      patientname: '',
      description: '',
      StartStudydate: new Date(),
      EndStudydate: new Date(),
      CreatedBy: '',
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5022/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            CreatedBy: response.data[0].username,
          });
        }
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  onChangePatientname(e) {
    this.setState({
      patientname: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeStartStudydate(date_s) {
    this.setState({
      StartStudydate: date_s,
    });
  }
  onChangeEndStudydate(date_e) {
    this.setState({
      EndStudydate: date_e,
    });
  }
  onChangeCreatedBy(e) {
    this.setState({
      CreatedBy: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const patient = {
      patientname: this.state.patientname,
      description: this.state.description,
      StartStudydate: this.state.StartStudydate,
      EndStudydate: this.state.EndStudydate,
      CreatedBy: this.state.CreatedBy,
    };

    console.log(patient);

    axios
      .post('http://localhost:5022/patients/add', patient)
      .then(res => console.log(res.data));

    window.location = '/app';
  }

  render() {
    return (
      <div className="box-container1">
        <div className="box-container">
          <h3>Create New Patient</h3>
          <br />
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username: </label>
              <select
                // eslint-disable-next-line react/no-string-refs
                ref="userInput"
                required
                className="form-control"
                value={this.state.CreatedBy}
                onChange={this.onChangeCreatedBy}
              >
                {this.state.users.map(function(user) {
                  return (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label>Patient Name: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.patientname}
                onChange={this.onChangePatientname}
              />
            </div>
            <div className="form-group">
              <label>Start Study Date: </label>
              <div>
                <DatePicker
                  selected={this.state.StartStudydate}
                  onChange={this.onChangeStartStudydate}
                />
              </div>
            </div>
            <div className="form-group">
              <label>End Study Date: </label>
              <div>
                <DatePicker
                  selected={this.state.EndStudydate}
                  onChange={this.onChangeEndStudydate}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Description: </label>
              <input
                type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
              />
            </div>
            <div className="form-btn">
              <button type="submit" className="btn_">
                {' '}
                Create Patients
              </button>
              <form method="get" action="/app">
                <button type="submit" className="reset-btn">
                  {' '}
                  Reset
                </button>
              </form>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
