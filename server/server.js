const express = require('express');
const app = express();
const { Pool } = require('pg');
const port = 3001;
const doctor = require('./Routes/doctor') ;
const patient = require('./Routes/patient') ;
app.use(express.json()); // Middleware to parse JSON bodies

// Create a PostgreSQL connection pool
const pool = new Pool({
    user: '',       //* Your PostgreSQL username
    host: '', //* Ip address
    database: '',   //* database name
    password: '',   //* password
    port: 5432,                 //* PostgreSQL port
  });



//* Test route
app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use('/doctor-check',doctor) ;

app.use('patient-check',patient) ;


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


module.exports = {pool: pool, app:app} ;