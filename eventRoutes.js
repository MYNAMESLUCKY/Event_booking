const express = require('express');
const router = express.Router();
const { getEvents, createEvent, getEventById, updateEvent, deleteEvent } = require('../controllers/eventController');
const auth = require('../middleware/auth');

// @route GET /api/events
// @desc Get all events
router.get('/', auth, getEvents);

// @route POST /api/events
// @desc Create a new event
router.post('/', auth, createEvent);

// @route GET /api/events/:id
// @desc Get event by ID
router.get('/:id', auth, getEventById);

// @route PUT /api/events/:id
// @desc Update event by ID
router.put('/:id', auth, updateEvent);

// @route DELETE /api/events/:id
// @desc Delete event by ID
router.delete('/:id', auth, deleteEvent);

module.exports = router;