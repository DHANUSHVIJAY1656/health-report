const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// Add a new patient
router.post('/', async (req, res) => {
  const newPatient = new Patient(req.body);
  try {
    await newPatient.save();
    res.status(201).send('Patient record added successfully!');
  } catch (error) {
    res.status(400).send(error);
  }
});

// Fetch all patients
router.get('/', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).send(patients);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update a patient
router.put('/:id', async (req, res) => {
  try {
    await Patient.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send('Patient record updated successfully!');
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a patient
router.delete('/:id', async (req, res) => {
  try {
    await Patient.findByIdAndDelete(req.params.id);
    res.status(200).send('Patient record deleted successfully!');
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
