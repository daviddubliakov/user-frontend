import React from 'react';
import { Form, Input, Button } from 'antd';

import useStyles from './style';

const FormTemplate = ({
  firstNameInput,
  lastNameInput,
  ageInput,
  avatarInput,
  onFinishFunc,
  buttonTxt,
  formData,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Form name="basic" onFinish={onFinishFunc} form={formData}>
        {firstNameInput && (
          <Form.Item
            name="firstName"
            rules={[{ pattern: /^[a-zA-Zа-яА-Я]+$/, required: true, message: 'First Name is incorrect!' }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
        )}

        {lastNameInput && (
          <Form.Item
            name="lastName"
            rules={[{ pattern: /^[a-zA-Zа-яА-Я]+$/, required: true, message: 'Last Name is incorrect!' }]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
        )}

        {ageInput && (
          <Form.Item
            name="age"
            rules={[{ pattern: /^[0-9]+$/, required: true, message: 'Age is incorrect!', }]}
          >
            <Input placeholder="Age" />
          </Form.Item>
        )}

        {avatarInput && (
          <Form.Item
            name="avatar"
            rules={[{ type: 'url', message: 'Avatar URL is incorrect!' }]}
          >
            <Input placeholder="Avatar URL" />
          </Form.Item>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            {buttonTxt}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormTemplate;
