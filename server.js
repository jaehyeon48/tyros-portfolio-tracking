const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

const connectDB = require('./db/db');

connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: false }));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));