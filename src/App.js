import React, { useEffect, useState, useRef } from 'react';
import { Table, Space, Input, Button } from 'antd';

import { getName, addName } from './api/API';

import useStyles from './style';
import 'antd/dist/antd.css';


const App = () => {
  const classes = useStyles();
  const value = useRef(null);

  const [state, setState] = useState({ result: [] });

  const fetchUpdate = () => {
    getName()
      .then((res) => setState({ ...state, result: res.data }));
  }

  const defaultValue = '----';

  const handleClick = () => {
    addName(value.current.state.value)
      .then(() => {
        value.current.handleReset(null);
        fetchUpdate();
      });
  }

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
          <div>
            {record.avatar ? (<img className="avatar" src={record.avatar} />)
              : (<img className="avatar" src={"/img/default-avatar.png"} />)}
          </div>
        </Space>
      ),
    },
    {
      title: 'First Name',
      key: 'firstName',
      render: (record) => (
        <Space size="middle">
          <div>
            {record.firstName ?? defaultValue}
          </div>
        </Space>
      ),
    },
    {
      title: 'Last Name',
      key: 'lastName',
      render: (record) => (
        <Space size="middle">
          <div>
            {record.lastName ?? defaultValue}
          </div>
        </Space>
      ),
    },
    {
      title: 'Age',
      key: 'age',
      render: (record) => (
        <Space size="middle">
          <div>
            {record.age ?? defaultValue}
          </div>
        </Space>
      ),
    },
  ];

  return (
    <div className={classes.root}>
      <br />
      <span style={{ marginLeft: '10px' }}>Add new item</span>
      <br />
      <Input
        placeholder="Add new item"
        style={{
          display: 'block',
          width: '300px',
          marginLeft: '10px'
        }}
        ref={value}
      />
      <Button
        style={{
          margin: '10px 0px 10px 10px',
          display: 'block',
        }}
        type="primary"
        onClick={handleClick}
        danger>
        Add
      </Button>
      <Table columns={columns} dataSource={state.result} />
    </div>
  );
}

export default App;
