const express = require('express');
const router = express.Router();
const {recentAppointments,MedicineBill,MedicinceBillPay} = require('../Controllers/patient') ;


router.get('/',recentAppointments) ;

router.get('/medicinebill', MedicineBill) ;

router.post('/medicinebill/pay', MedicinceBillPay) ;


module.exports = router ;