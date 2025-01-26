// const Event = require('../models/eventModel'); // Ensure this path is correct

// exports.getAllEvents = async (req, res) => {
//     // Your logic to get all events here
// };

// exports.createEvent = async (req, res) => {
//     // Your logic to create an event here
// };
const Event = require('../models/eventModel'); // Ensure this path is correct

exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.json(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.createEvent = async (req, res) => {
    try {
        const { name, date, location } = req.body;

        if (!name || !date || !location) {
            return res.status(400).json({ msg: 'Please provide all required fields' });
        }

        const newEvent = await Event.create({
            name,
            date,
            location
        });

        res.json(newEvent);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};