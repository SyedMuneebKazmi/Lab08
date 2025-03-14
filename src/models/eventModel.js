let events = []; // Array to store events temporarily

const createEvent = (event) => {
  const newEvent = { id: events.length + 1, ...event };
  events.push(newEvent);
  return newEvent;
};

const getEvents = () => events;

const updateEvent = (id, updatedEvent) => {
  let eventIndex = events.findIndex(event => event.id === id);
  if (eventIndex === -1) return null;
  events[eventIndex] = { ...events[eventIndex], ...updatedEvent };
  return events[eventIndex];
};

const deleteEvent = (id) => {
  let eventIndex = events.findIndex(event => event.id === id);
  if (eventIndex === -1) return null;
  return events.splice(eventIndex, 1)[0];
};

module.exports = { createEvent, getEvents, updateEvent, deleteEvent };
