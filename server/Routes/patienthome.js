const express = require('express');
const router = express.Router();
const {patientHome,appointment,appointmentConfirm} = require('../Controllers/patient') ;

router.get('/', patientHome) ; //* returns the list of doctors

router.post('/appointment/', appointment) ; //* cannot book 2 appointments in a day

router.post('/appointment/confirm/', appointmentConfirm) ; //* confirming the appointment


module.exports = router ;