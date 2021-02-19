import queryString from 'query-string';

import API from './config';

export const getUsers = async () => API.get('');

export const addUser = async (body) => (
  API.post('/create', queryString.stringify({
    ...body
  }))
);

export const deleteUser = (id) => (
  API.delete('/delete', {
    data: `_id=${id}`
  })
);

export const getUser = (id) => API.get(`/user/${id}`);

export const updateUser = (body) => (
  API.put(`/user/${body._id}`, queryString.stringify({
    ...body
  }))
);
