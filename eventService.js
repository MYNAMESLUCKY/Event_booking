import axios from 'axios';

const API_URL = 'http://localhost:5000/api/events';

const getEvents = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.data;
};

const createEvent = async (event) => {
  const response = await axios.post(API_URL, event, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export { getEvents, createEvent };