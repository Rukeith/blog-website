import axios from 'axios';

export default axios.create({
  baseURL: process.env.API_ENTRY || 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});
