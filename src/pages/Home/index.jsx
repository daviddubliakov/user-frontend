import React, { useEffect, useState } from "react";
import { Spin } from "antd";

import { success, error } from '../../components/Notifications/index';
import Table from '../../components/Table';

import { getUsers, deleteUser } from "../../api/user";

import useStyles from "./style";

const Home = () => {
  const classes = useStyles();


  const [state, setState] = useState({ result: [] });
  const [loading, setLoading] = useState(true);

  const fetchUpdate = () => {
    getUsers().then((res) => {
      setState({ ...state, result: res.data });
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  };

  const deleteUserByID = (id) => {
    deleteUser(id)
      .then((res) => {
        fetchUpdate();
        success(res.data.message);
      })
      .catch(() => error());
  };

  useEffect(() => {
    fetchUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  if (loading) {
    return (
      <div className={classes.spiner}>
        <Spin size="large" tip="Loading..."></Spin>
      </div>
    );
  }

  return <Table data={state.result} setData={setState} deleteUser={deleteUserByID} />
};

export default Home;
