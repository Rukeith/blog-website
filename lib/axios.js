import axios from 'axios';

export default axios.create({
  baseURL: process.env.API_ENTRY || 'http://127.0.0.1:5000',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});
