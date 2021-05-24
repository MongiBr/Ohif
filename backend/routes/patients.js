const router = require('express').Router();
//const { unstable_renderSubtreeIntoContainer } = require('react-dom');
let Patient = require('../models/patient.models');
router.route('/').get((req, res) => {
  Patient.find()
    .then(patients => res.json(patients))
    .catch(err => res.status(400).json('Error : ' + err));
});
router.route('/add').post((req, res) => {
  const patientname = req.body.patientname;
  const description = String(req.body.description);
  const StartStudydate = Date(req.body.StartStudydate);
  const EndStudydate = Date(req.body.EndStudydate);
  const CreatedBy = String(req.body.CreatedBy);

  const newPatient = new Patient({
    patientname,
    description,
    StartStudydate,
    EndStudydate,
    CreatedBy,
  });
  newPatient
    .save()
    .then(() => res.json('Patient added !'))
    .catch(err => res.status(400).json('Error : ' + err));
});
router.route('/:id').get((req, res) => {
  Patient.findById(req.params.id)
    .then(patients => res.json(patients))
    .catch(err => res.status(400).json('Error : ' + err));
});
router.route('/:id').delete((req, res) => {
  Patient.findByIdAndDelete(req.params.id)
    .then(users => res.json('Patient deleted .'))
    .catch(err => res.status(400).json('Error : ' + err));
});
router.route('/update/:id').post((req, res) => {
  Patient.findById(req.params.id)
    .then(patients => {
      patients.patientname = req.body.patientname;
      patients.description = req.body.description;
      patients.StartStudydate = Date(req.body.StartStudydate);
      patients.EndStudydate = Date(req.body.EndStudydate);
      patients.CreatedBy = req.body.CreatedBy;

      patients
        .save()
        .then(patients => res.json('Patient updated .'))
        .catch(err => res.status(400).json('Error : ' + err));
    })

    .catch(err => res.status(400).json('Error : ' + err));
});
module.exports = router;
