import axios from 'axios';

let serverUrl = 'http:localhost:8000/api/';

const api = new axios.create({
  baseURL: serverUrl,
  withCredentials: true,
  // header: { Authorization: `Bearer ${localStorage.getItem("access_token")}` },
});

export default api;
