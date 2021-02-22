import React, { useEffect } from 'react';
import { Form } from 'antd';
import { withRouter } from 'react-router-dom';

import { success, error } from '../../components/Notifications/index';
import FormTemplate from '../../components/FormTemplate';

import { updateUser, getUser } from '../../api/user';

import 'antd/dist/antd.css';


const UpdateUser = (props) => {
  const form = Form.useForm()[0];
  const items = props.location.pathname.split('/');
  const userId = items[2]


  const fetchUpdate = () => {
    getUser(userId)
      .then((res) => {
        form.setFieldsValue(res.data);
      })
      .catch(() => error());
  }

  useEffect(() => {
    fetchUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = (values) => {
    updateUser({ ...values, _id: userId })
      .then((res) => success(res.data.message))
      .catch(() => error());
  }

  return <FormTemplate
    firstNameInput={true}
    lastNameInput={true}
    ageInput={true}
    avatarInput={true}
    onFinishFunc={handleClick}
    buttonTxt="Update user"
    formData={form}
  />
}

export default withRouter(UpdateUser);
