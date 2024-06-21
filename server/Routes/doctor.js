const express = require('express');
const router = express.Router();
const {doctorCheck} = require('../Controllers/doctor')

router.post('/doctor-check', doctorCheck) ;

module.exports = router ;