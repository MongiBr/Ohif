const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const patientSchema = new Schema(
  {
    patientname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    StartStudydate: {
      type: Date,
      required: true,
    },
    EndStudydate: {
      type: Date,
    },
    CreatedBy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
