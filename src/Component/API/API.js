import axios from 'axios';

let serverUrl = 'http://localhost:8000/api/';

const api = new axios.create({
  baseURL: serverUrl,
  withCredentials: true,
  header: {
    Accept: 'application/json',
    'content-type': 'application/json',
  },
});

export default api;
