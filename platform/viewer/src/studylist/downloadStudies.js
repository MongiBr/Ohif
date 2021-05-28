import { jsPDF } from 'jspdf'
const downloadStudies = (studies) => {
  let pdf = new jsPDF();
  var i = 0;
  pdf.setTextColor(0, 0, 255).text("Report", 90, i += 10);
  i += 5;
  pdf.setDrawColor(255, 0, 0).line(10, i, 200, i);
  studies.map((study) => {
    if (i + 80 > pdf.internal.pageSize.height) {
      pdf.addPage();
      i = 5;
      pdf.setDrawColor(255, 0, 0).line(10, i, 200, i);
    }
    pdf.setTextColor(255, 0, 0).text("Accession Number: ", 10, i += 10);
    pdf.setTextColor(0, 0, 0).text(study.AccessionNumber === undefined ? "-" : study.AccessionNumber, 61, i);
    pdf.setTextColor(255, 0, 0).text("Patient ID: ", 10, i += 10);
    pdf.setTextColor(0, 0, 0).text(study.PatientID === undefined ? "-" : study.PatientID, 38, i);
    pdf.setTextColor(255, 0, 0).text("Patient Name: ", 10, i += 10);
    pdf.setTextColor(0, 0, 0).text(study.PatientName === undefined ? "-" : study.PatientName, 48, i);
    pdf.setTextColor(255, 0, 0).text("Study Date: ", 10, i += 10);
    pdf.setTextColor(0, 0, 0).text(study.StudyDate === undefined ? "-" : study.StudyDate, 42, i);
    pdf.setTextColor(255, 0, 0).text("Study Description: ", 10, i += 10);
    pdf.setTextColor(0, 0, 0).text(study.StudyDescription === undefined ? "-" : study.StudyDescription, 58, i);
    pdf.setTextColor(255, 0, 0).text("modalities: ", 10, i += 10);
    pdf.setTextColor(0, 0, 0).text(study.modalities === undefined ? "-" : study.modalities, 40, i);
    i += 5;
    pdf.setDrawColor(255, 0, 0).line(10, i, 200, i);
  })
  pdf.save("Studylist.pdf");
}
export { downloadStudies }
