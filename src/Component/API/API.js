import axios from 'axios';

let serverUrl = 'http://localhost:8000/api/';

const api = new axios.create({
  baseURL: serverUrl,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  },
});

export default api;
