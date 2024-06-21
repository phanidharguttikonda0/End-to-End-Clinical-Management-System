const express = require('express');
const router = express.Router();
const {patientCheck} = require('../Controllers/patient') ;

router.post('/', patientCheck) ;

module.exports = router ;