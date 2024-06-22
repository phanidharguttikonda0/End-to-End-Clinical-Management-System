const express = require('express');
const router = express.Router();
const {prevPatients,prevPatientReports,prevpatientMedicine} = require('../Controllers/doctor') ;

router.get('/', prevPatients) ;
router.get('/patient', prevPatientReports) ; // * returns patient details and symptoms and also doctor reports

router.get('/patient/Medicine', prevpatientMedicine) ; //* get's the Medicines given to the patient


module.exports = router ;