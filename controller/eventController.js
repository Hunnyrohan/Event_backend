// controller/eventController.js
const Event = require('../models/eventModel');

// Get all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.status(200).json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Create a new event
exports.createEvent = async (req, res) => {
    try {
        const { name, date, location } = req.body;
        const newEvent = await Event.create({ name, date, location });
        res.status(201).json(newEvent);
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Update an event by ID
exports.updateEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        const { name, date, location } = req.body;

        const event = await Event.findByPk(eventId);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        event.name = name;
        event.date = date;
        event.location = location;
        await event.save();

        res.status(200).json(event);
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete an event by ID
exports.deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id;
        const event = await Event.findByPk(eventId);
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        await event.destroy();
        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        console.error('Error deleting event:', error);
        res.status(500).json({ error: 'Server error' });
    }
};
