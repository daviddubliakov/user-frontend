import React, { useEffect, useState } from 'react';
import { Input, Button, notification } from 'antd';
import { withRouter } from 'react-router-dom';

import { addUser, getUser } from '../../api/API';

import useStyles from '../style-pages';
import 'antd/dist/antd.css';


const UpdateUser = (props) => {
  const classes = useStyles();

  const [result, setResult] = useState({
    firstName: '',
    lastName: '',
    age: null,
    avatar: '',
  });

  const fetchUpdate = () => {
    const items = props.location.pathname.split('/');

    getUser(items[2])
      .then((res) => {
        setResult({ ...res.data });
        console.log(result);
      })
      .catch(() => {
        notification.error({
          message: 'Ooops',
          description: 'Something went wrong...',
          duration: 2,
        });
      });
  }

  useEffect(() => {
    fetchUpdate();
  }, [])

  const handleClick = () => {
    addUser(result)
      .then(() => {
        setResult({ firstName: '', lastName: '', age: null, avatar: '' })
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
        danger>
        Update User
      </Button>
    </div>
  );
}

export default withRouter(UpdateUser);
