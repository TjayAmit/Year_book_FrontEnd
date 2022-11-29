import axios from 'axios';

let serverUrl = 'http://localhost:8000/api/';

const api = new axios.create({
  baseURL: serverUrl,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
    //   Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  },
});
//interceptor to rebuild for token configuration and authorization
api.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default api;
