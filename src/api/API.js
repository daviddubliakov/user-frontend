import axios from 'axios';
import queryString from 'query-string';

const apiURL = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: apiURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
})

export const getUsers = async () => {
  return api.get('');
}

export const addUser = async (body) => {
  return api.post('/create', queryString.stringify({
    ...body
  }));
}

export const deleteUser = (id) => {
  return api.delete('/delete', {
    data: `_id=${id}`
  });
}

export const getUser = (id) => {
  return api.get(`/user/${id}`);
}
