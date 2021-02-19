import queryString from 'query-string';

import API from './config';

export const getUsers = async () => {
  return API.get('');
}

export const addUser = async (body) => {
  return API.post('/create', queryString.stringify({
    ...body
  }));
}

export const deleteUser = (id) => {
  return API.delete('/delete', {
    data: `_id=${id}`
  });
}

export const getUser = (id) => {
  return API.get(`/user/${id}`);
}

export const updateUser = (body) => {
  return API.put(`/user/${body._id}`, queryString.stringify({
    ...body
  }));
}
