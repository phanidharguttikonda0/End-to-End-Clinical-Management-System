const express = require('express');
const router = express.Router();
const {Info,prevLeaves} = require('../Controllers/doctor') ;

router.get('/', Info) ;

router.get('/Leaves', prevLeaves)


module.exports = router ;