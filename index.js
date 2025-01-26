
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
const authRoute = require('./route/authRoute');
const eventRoute = require('./route/eventRoute');
const guestRoute = require('./route/guestRoute');
const taskRoute = require('./route/taskRoute');
const userRoute = require('./route/userRoute');
const vendorRoute = require('./route/vendorRoute');

app.use('/api/auth', authRoute);
app.use('/api/events', eventRoute);
app.use('/api/guests', guestRoute);
app.use('/api/tasks', taskRoute);
app.use('/api/users', userRoute);
app.use('/api/vendors', vendorRoute);

// Default route
app.get('/login', (req, res) => {
    res.send('Welcome to the API');
});

// Handle undefined routes
app.use((req, res) => {
    res.status(404).send('Route not found');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});