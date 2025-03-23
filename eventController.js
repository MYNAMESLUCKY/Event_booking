const Event = require('../models/eventModel');

// @desc    Create a new event
// @route   POST /api/events
// @access  Public
const createEvent = async (req, res) => {
  const { name, date, location, description } = req.body;

  try {
    const event = new Event({
      name,
      date,
      location,
      description,
    });

    const createdEvent = await event.save();
    res.status(201).json(createdEvent);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all events
// @route   GET /api/events
// @access  Public
const getEvents = async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createEvent, getEvents };