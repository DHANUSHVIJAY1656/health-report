const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  ethnicity: String,
  doctorName: String,
  bloodTestResults: {
    sodium: String,
    potassium: String,
    chloride: String,
    bicarbonate: String,
    urea: String,
    creatinine: String,
    calcium: String
  },
  urineTestResults: {
    albumin: String,
    creatinine: String
  },
  kidneyFunctionTests: {
    eGFR: String,
    uACR: String
  },
  medications: [String],
  diagnoses: [String],
  clinicalData: {
    bloodPressure: String,
    heartRate: String
  },
  familyHistory: {
    kidneyDisease: Boolean,
    hypertension: Boolean,
    diabetes: Boolean,
    obesity: Boolean
  }
});

module.exports = mongoose.model('Patient', patientSchema);
