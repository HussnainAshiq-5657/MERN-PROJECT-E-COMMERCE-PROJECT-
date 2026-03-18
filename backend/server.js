const express = require('express');
const app = express();
const connectDB = require('./connection/connection.js');

// Connect to DB
connectDB();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Home Page</h1>');
});

app.listen(PORT, () => {
  console.log(`Your Project is Running on PORT ${PORT}`);
});