import axios from 'axios';
import querystring from 'query-string';

const apiURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: apiURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
})

export const getName = async () => {
  return api.get('/todos');
}

export const addName = async (title) => {
  return api.post('/todos/create',
    querystring.stringify({
      title,
    }));
}
