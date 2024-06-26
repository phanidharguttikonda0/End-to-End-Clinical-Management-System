const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const {doctorCheck,applyLeave} = require('./Controllers/doctor') ;
const {patientCheck,SignUp} = require('./Controllers/patient') ;
const doctorHome = require('./Routes/doctorhome') ;
const patientHome = require('./Routes/patienthome') ;
const patientRecent = require('./Routes/patientRecent') ;
const patientSettings = require('./Routes/patientSettings') ;
const prevOP = require('./Routes/doctorprevop') ;
const info = require('./Routes/doctorInfo') ;
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

app.post('/Sign-Up',SignUp) ;

//* we are going to pass there gmail as the query

app.use('/doctor-home',doctorHome) ;

app.use('/patient-home',patientHome) ; //* list of doctors and there specilization along with name and experiance

app.use('/patient-recentappointments',patientRecent) ;

app.use('/patient-Profile', patientSettings) ;

app.use('/doctor-prevop', prevOP) ;

app.use('/info', info) ;

app.post('/doctor-apply-forleave', applyLeave) ;

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });




module.exports = app;
