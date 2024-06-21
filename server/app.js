const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const {doctorCheck} = require('./Controllers/doctor') ;
const {patientCheck} = require('./Controllers/patient') ;
// Middleware
// Allow requests from http://localhost:3000 (your front-end URL)
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  }));
app.use(express.json());


// Routes
//* Test route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/patient-check',patientCheck) ;

app.post('/doctor-check',doctorCheck) ;

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });




module.exports = app;
