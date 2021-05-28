import React from 'react'
import { jsPDF } from 'jspdf'
import { Icon } from '@ohif/ui/src/elements/Icon'
import './ConnectedDownloadButton.css'
const downloadStudy = (studies) => {
  let pdf = new jsPDF();
  var i = 0;
  studies.map((study) => {
    pdf.setTextColor(0, 0, 255).text("Report", 90, i += 10)
    pdf.setTextColor(255, 0, 0).text("Accession Number:", 10, i += 10);
    pdf.setTextColor(0, 0, 0).text(study.AccessionNumber === undefined ? "-" : study.AccessionNumber, 61, i);
    pdf.setTextColor(255, 0, 0).text("Institution Name:", 10, i += 10);
    pdf.setTextColor(0, 0, 0).text(study.InstitutionName === undefined ? "-" : study.InstitutionName, 54, i);
    pdf.setTextColor(255, 0, 0).text("Patient ID:", 10, i += 10);
    pdf.setTextColor(0, 0, 0).text(study.PatientID === undefined ? "-" : study.PatientID, 38, i);
    pdf.setTextColor(255, 0, 0).text("Patient Name:", 10, i += 10);
    pdf.setTextColor(0, 0, 0).text(study.PatientName === undefined ? "-" : study.PatientName, 47, i);
    pdf.setTextColor(255, 0, 0).text("Patient Age:", 10, i += 10);
    pdf.setTextColor(0, 0, 0).text(study.PatientAge === undefined ? "-" : study.PatientAge.toString(), 42, i);
    pdf.setTextColor(255, 0, 0).text("Patient Size:", 10, i += 10);
    pdf.setTextColor(0, 0, 0).text(study.PatientSize === undefined ? "-" : study.PatientSize.toString(), 42, i);
    pdf.setTextColor(255, 0, 0).text("Patient Weight:", 10, i += 10);
    pdf.setTextColor(0, 0, 0).text(study.PatientWeight === undefined ? "-" : study.PatientWeight.toString(), 49, i);
    pdf.setTextColor(255, 0, 0).text("Study Date:", 10, i += 10);
    pdf.setTextColor(0, 0, 0).text(study.StudyDate === undefined ? "-" : study.StudyDate.substring(0, 4) + "/" + study.StudyDate.substring(4, 6) + "/" + study.StudyDate.substring(6), 40, i);
    pdf.setTextColor(255, 0, 0).text("Study Time:", 10, i += 10);
    pdf.setTextColor(0, 0, 0).text(study.StudyTime === undefined ? "-" : study.StudyTime, 41, i);
    pdf.setTextColor(255, 0, 0).text("Study Description:", 10, i += 10);
    pdf.setTextColor(0, 0, 0).text(study.StudyDescription === undefined ? "-" : study.StudyDescription, 57, i);
  })
  pdf.save("Study.pdf");
}
const ConnectedDownloadButton = (props) => {
  return (props.studies.length && <button onClick={(e) => {
    e.preventDefault();
    console.log(props.studies);
    downloadStudy(props.studies);
  }}>
    <Icon name='save' />
    PDF
  </button>)
}

export default ConnectedDownloadButton
