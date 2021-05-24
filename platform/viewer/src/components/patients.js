/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React from 'react';
import './list_patients.css';
import styled from 'styled-components';
const Patients = ({ posts }) => {
  return (
    <MainContainer>
      {posts.map((patient, key) => (
        <div className="container">
          <div className="container_1">
            <h2>{patient.patientname}</h2>
            <p>{patient.description}</p>
            <span className="badge badge-sacondary p-2">
              {patient.CreatedBy}
            </span>

            <div className="row my-5">
              <div className="btn">
                <button className="edit">Edit Patient</button>
                <button className="delete">Delete Patient</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </MainContainer>
  );
};
export default Patients;
const MainContainer = styled.div`
  margin: 7rem 0;
`;
