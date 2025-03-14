const { createEvent, getEvents, updateEvent, deleteEvent } = require('../models/eventModel');

const createNewEvent = (req, res) => {
  const { name, description, date, time, category, reminder } = req.body;
  const userId = req.user.id;
  
  const event = { name, description, date, time, category, reminder, userId };
  const newEvent = createEvent(event);
  res.status(201).json(newEvent);
};

const getAllEvents = (req, res) => {
  const userId = req.user.id;
  const userEvents = getEvents().filter(event => event.userId === userId);
  res.status(200).json(userEvents);
};

const updateEventDetails = (req, res) => {
  const { id } = req.params;
  const updatedEvent = req.body;

  const updated = updateEvent(parseInt(id), updatedEvent);
  if (!updated) return res.status(404).json({ error: 'Event not found' });

  res.status(200).json(updated);
};

const deleteEventById = (req, res) => {
  const { id } = req.params;
  const deleted = deleteEvent(parseInt(id));

  if (!deleted) return res.status(404).json({ error: 'Event not found' });

  res.status(200).json(deleted);
};

module.exports = { createNewEvent, getAllEvents, updateEventDetails, deleteEventById };
