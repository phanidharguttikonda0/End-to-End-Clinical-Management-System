const express = require('express');
const router = express.Router();
const {getRecentAppointments,recentAppointments,MedicineBill,MedicinceBillPay} = require('../Controllers/patient') ;


router.get('/',recentAppointments) ;

router.get('/appointment', getRecentAppointments) ;

router.get('/medicinebill', MedicineBill) ;

router.get('/medicinebill/pay', MedicinceBillPay) ;


module.exports = router ;