const express = require('express');
const router = express.Router();
const {Settings} = require('../Controllers/patient') ;


router.get('/', Settings) ;


module.exports = router ;