import React, { useEffect } from 'react';
import { Input, Button, notification, Form } from 'antd';
import { withRouter } from 'react-router-dom';

import { updateUser, getUser } from '../../api/user';

import useStyles from '../style-pages';
import 'antd/dist/antd.css';


const UpdateUser = (props) => {
  const classes = useStyles();
  const form = Form.useForm()[0];
  const items = props.location.pathname.split('/');
  const userId = items[2]


  const fetchUpdate = () => {
    getUser(userId)
      .then((res) => {
        form.setFieldsValue(res.data);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = (values) => {
    updateUser({ ...values, _id: userId })
      .then((res) => {
        notification.success({
          message: 'Update completed!',
          description: res.data.message,
          duration: 2,
        });
      });
  }

  return (
    <div className={classes.create}>
      <Form onFinish={handleClick} form={form}>
        <Form.Item
          name="firstName"
          rules={[{ pattern: /^[a-zA-Zа-яА-Я]+$/, required: true, message: 'First Name is incorrect!' }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>

        <Form.Item
          name="lastName"
          rules={[{ pattern: /^[a-zA-Zа-яА-Я]+$/, required: true, message: 'Last Name is incorrect!' }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>

        <Form.Item
          name="age"
          rules={[{ pattern: /^[0-9]+$/, required: true, message: 'Age is incorrect!', }]}
        >
          <Input placeholder="Age" />
        </Form.Item>

        <Form.Item
          name="avatar"
          rules={[{ type: 'url', message: 'Avatar URL is incorrect!' }]}
        >
          <Input placeholder="Avatar URL" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            danger
          >
            Update User
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default withRouter(UpdateUser);
