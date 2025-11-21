const express = require('express');
const path = require('path');

const app = express();

// Use PORT from .env later; for now default 4000
const PORT = process.env.PORT || 4000;

// Middleware to serve static files (we'll use /public later)
app.use(express.static(path.join(__dirname, 'public')));

// Test route for now
app.get('/', (req, res) => {
  res.send('INFR3120 Assignment 3 – app is running ✅');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});