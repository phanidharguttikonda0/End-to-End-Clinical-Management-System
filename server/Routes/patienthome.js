const express = require('express');
const router = express.Router();
const {patientHome,appointment,appointmentConfirm} = require('../Controllers/patient') ;

router.get('/', patientHome) ; //* returns the list of doctors

router.get('/appointment', appointment) ; //* opens up the doctor details

router.post('/appointment/confirm', appointmentConfirm) ; //* confirming the appointment


module.exports = router ;