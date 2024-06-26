const express = require('express');
const router = express.Router();
const {doctorHome,writeReports,writeMedicines} = require('../Controllers/doctor')

router.get('/', doctorHome) ;

router.post('/patient-reports',writeReports) ; //* doctor write report and precations

router.post('/patient-reports/medicines', writeMedicines) ; //* writing the medicines 



module.exports = router ;