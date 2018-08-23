import axios from 'axios';

export default axios.create({
  baseURL: process.env.API_ENTRY || 'https://blog-server-dev.herokuapp.com',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});
