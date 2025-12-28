const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', require('./routes/routes'));

// Serve static files
app.use(express.static('public'));

// Catch all for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});