import React, { useState } from 'react';
import { Input, Button, notification } from 'antd';

import { TEXT_ERRORS } from '../../utils/constants';
import { addUser } from '../../api/API';

import useStyles from '../style-pages';


const Create = () => {
  const classes = useStyles();

  const [result, setResult] = useState({
    firstName: '',
    lastName: '',
    age: null,
    avatar: '',
  });

  const handleClick = () => {
    addUser(result)
      .then(() => {
        setResult({ firstName: '', lastName: '', age: null, avatar: '' })
        notification.success({
          message: 'Success!',
          description: 'User successfully edited.',
          duration: 2,
        });
      })
      .catch(() => {
        notification.error({
          message: TEXT_ERRORS,
          description: 'Something went wrong...',
          duration: 2,
        });
      });
  }

  const handleChange = ({ target: { name, value } }) => {
    setResult({ ...result, [name]: value });
  }

  return (
    <div className={classes.create}>
      <Input
        placeholder="First Name"
        name="firstName"
        value={result.firstName}
        onChange={handleChange}
      />
      <Input
        placeholder="Last Name"
        name="lastName"
        value={result.lastName}
        onChange={handleChange}
      />
      <Input
        placeholder="Age"
        name="age"
        type="number"
        value={result.age}
        onChange={handleChange}
      />
      <Input
        placeholder="Avatar URL"
        name="avatar"
        value={result.avatar}
        onChange={handleChange}
      />
      <Button
        type="primary"
        onClick={handleClick}
        danger
      >
        Create User
      </Button>
    </div>
  );
}

export default Create;
