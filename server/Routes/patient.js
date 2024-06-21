const express = require('express');
const router = express.Router();
const {patientCheck} = require('../Controllers/patient') ;

router.get('/patient-check', patientCheck) ;

module.exports = router ;