const express = require('express');
const router = express.Router();
const {doctorHome,getpatient,writeReports,writeMedicines} = require('../Controllers/doctor')

router.post('/', doctorHome) ;

router.get('/patient',getpatient) ; //* patient details and his symptoms will be shown on the screen

router.post('/patient/reports',writeReports) ; //* doctor write report and precations

router.post('/patient/reports/medicines', writeMedicines) ; //* writing the medicines 



module.exports = router ;