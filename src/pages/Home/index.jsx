import React, { useEffect, useState } from "react";
import { Table, Space, Button } from "antd";
import { useHistory } from "react-router-dom";

import { success, error } from '../../components/Notifications/index';

import { getUsers, deleteUser } from "../../api/user";

import useStyles from "./style";

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  const [state, setState] = useState({ result: [] });

  const fetchUpdate = () => {
    getUsers().then((res) => setState({ ...state, result: res.data }));
  };

  const deleteUserByID = (id) => {
    deleteUser(id)
      .then((res) => {
        fetchUpdate();
        success(res.data.message);
      })
      .catch(() => error());
  };

  const defaultValue = "----";

  useEffect(() => {
    fetchUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      title: null,
      key: "avatar",
      width: "1%",
      render: (record) => (
        <Space size="middle">
          <div>
            {record.avatar ? (
              <img className="avatar" src={record.avatar} alt="avatar" />
            ) : (
                <img
                  className="avatar"
                  src={"/img/default-avatar.png"}
                  alt="avatar"
                />
              )}
          </div>
        </Space>
      ),
    },
    {
      title: "First Name",
      key: "firstName",
      width: "15%",
      render: (record) => (
        <Space size="middle">
          <div>{record.firstName ?? defaultValue}</div>
        </Space>
      ),
    },
    {
      title: "Last Name",
      key: "lastName",
      width: "15%",
      render: (record) => (
        <Space size="middle">
          <div>{record.lastName ?? defaultValue}</div>
        </Space>
      ),
    },
    {
      title: "Age",
      key: "age",
      width: "60%",
      render: (record) => (
        <Space size="middle">
          <div>{record.age ?? defaultValue}</div>
        </Space>
      ),
    },
    {
      title: "",
      key: "delete",
      render: (record) => (
        <Space size="middle">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              deleteUserByID(record._id);
            }}
            danger
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className={classes.root}>
      <Table
        columns={columns}
        dataSource={state.result}
        onRow={(record) => ({
          onClick: () => history.push(`/user/${record._id}`),
        })}
      />
    </div>
  );
};

export default Home;
