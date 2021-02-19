import React, { useEffect, useState } from 'react';
import { Table, Space, Button, notification } from 'antd';
import { useHistory } from 'react-router-dom';

import { getUsers, deleteUser } from '../../api/API';

import useStyles from '../style-pages';


const Home = () => {
  const classes = useStyles();

  const history = useHistory();

  const [state, setState] = useState({ result: [] });

  const fetchUpdate = () => {
    getUsers()
      .then((res) => setState({ ...state, result: res.data }));
  }

  const deleteUserByID = (id) => {
    deleteUser(id)
      .then((res) => {
        fetchUpdate();
        notification.success({
          message: 'Deleting completed!',
          description: res.data,
          duration: 2,
        });
      })
      .catch(() => {
        notification.error({
          message: 'Ooops',
          description: 'Something went wrong...',
          duration: 2,
        });
      });
  }

  const defaultValue = '----';

  useEffect(() => {
    fetchUpdate();
  }, []);

  const columns = [
    {
      title: '',
      key: 'avatar',
      width: '1%',
      render: (record) => (
        <Space size="middle">
          <div onClick={() => history.push(`/user/${record._id}`)}>
            {record.avatar ? (<img className="avatar" src={record.avatar} alt="avatar" />)
              : (<img className="avatar" src={"/img/default-avatar.png"} alt="avatar" />)}
          </div>
        </Space>
      ),
    },
    {
      title: 'First Name',
      key: 'firstName',
      width: '15%',
      render: (record) => (
        <Space size="middle">
          <div onClick={() => history.push(`/user/${record._id}`)}>
            {record.firstName ?? defaultValue}
          </div>
        </Space>
      ),
    },
    {
      title: 'Last Name',
      key: 'lastName',
      width: '15%',
      render: (record) => (
        <Space size="middle">
          <div onClick={() => history.push(`/user/${record._id}`)}>
            {record.lastName ?? defaultValue}
          </div>
        </Space>
      ),
    },
    {
      title: 'Age',
      key: 'age',
      width: '15%',
      render: (record) => (
        <Space size="middle">
          <div onClick={() => history.push(`/user/${record._id}`)}>
            {record.age ?? defaultValue}
          </div>
        </Space>
      ),
    },
    {
      title: '',
      key: 'delete',
      render: (record) => (
        <Space size="middle">
          <Button onClick={() => deleteUserByID(record._id)} danger>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className={classes.home}>
      <Table columns={columns} dataSource={state.result} />
    </div>
  );
}

export default Home;
