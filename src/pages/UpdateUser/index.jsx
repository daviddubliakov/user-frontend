import React, { useEffect } from 'react';
import { notification, Form } from 'antd';
import { withRouter } from 'react-router-dom';

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
          message: 'Success!',
          description: res.data.message,
          duration: 2,
        });
        notification.error({
          message: 'Ooops',
          description: 'Something went wrong...',
          duration: 2,
        });
      });
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

export default withRouter(UpdateUser);
