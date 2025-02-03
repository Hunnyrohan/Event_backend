// index.js
const express = require('express');
const app = express();
const eventRoutes = require('./route/eventRoute');

// Middleware
app.use(express.json());  // To parse JSON requests

// Routes
app.use('/api', eventRoutes);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
