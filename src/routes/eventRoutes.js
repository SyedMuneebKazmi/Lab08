const express = require('express');
const { createNewEvent, getAllEvents, updateEventDetails, deleteEventById } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createNewEvent);
router.get('/', authMiddleware, getAllEvents);
router.put('/:id', authMiddleware, updateEventDetails);
router.delete('/:id', authMiddleware, deleteEventById);

module.exports = router;
