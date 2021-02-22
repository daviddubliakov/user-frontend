import React from 'react';
import { Input, Button, notification, Form } from 'antd';

import { addUser } from '../../api/user';

import useStyles from './style';
import 'antd/dist/antd.css';


const Create = () => {
  const classes = useStyles();
  const form = Form.useForm()[0];

  const handleClick = (values) => {
    addUser({ ...values })
      .then((res) => {
        form.setFieldsValue({
          firstName: null,
          lastName: null,
          age: null,
          avatar: null,
        });
        notification.success({
          message: 'Success!',
          description: res.data.message,
          duration: 2,
        });
      });
  }

  return (
    <div className={classes.root}>
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
            Create User
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Create;
