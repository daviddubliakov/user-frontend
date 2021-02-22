import React from 'react';
import { Form } from 'antd';

import FormTemplate from '../../components/FormTemplate';
import { success, error } from '../../components/Notifications/index';

import { addUser } from '../../api/user';

import 'antd/dist/antd.css';


const Create = () => {
  const form = Form.useForm()[0];

  const handleClick = (values) => {
    addUser(values)
      .then((res) => {
        form.setFieldsValue({
          firstName: null,
          lastName: null,
          age: null,
          avatar: null,
        });
        success(res.data.message);
      })
      .catch(() => error());
  }

  return <FormTemplate
    firstNameInput={true}
    lastNameInput={true}
    ageInput={true}
    avatarInput={true}
    onFinishFunc={handleClick}
    buttonTxt="Create user"
    formData={form}
  />
}

export default Create;
