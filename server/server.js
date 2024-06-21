const express = require('express');
const app = require('./app');
const { Pool } = require('pg');
const port = 3001;

app.use(express.json()); // Middleware to parse JSON bodies

// Create a PostgreSQL connection pool
const pool = new Pool({
    user: 'postgres',       //* Your PostgreSQL username
    host: 'localhost', //* Ip address
    database: 'kannayaclinics',   //* database name
    password: 'Phani@9090K',   //* password
    port: 5432,                 //* PostgreSQL port
  });




app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


module.exports = pool ;