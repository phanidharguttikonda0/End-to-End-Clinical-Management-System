const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const exampleRoutes = require('./routes/exampleRoutes');
app.use('/api/example', exampleRoutes);

module.exports = app;
