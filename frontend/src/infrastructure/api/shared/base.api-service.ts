import axios from 'axios';
import { getAuthToken } from '@application/services/local-storage.service';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

client.interceptors.response.use((response) => {
  console.log('Got response', response);

  return response;
});

client.interceptors.request.use((request) => {
  console.log('Send request', request);

  const authToken = getAuthToken();

  if (authToken !== null) {
    request.headers = {
      ...(request.headers ?? {}),
      Authorization: 'Bearer ' + authToken
    };
  }

  return request;
});

export default client;
