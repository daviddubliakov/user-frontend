import { notification } from 'antd';

export const success = (res) => {
  return notification.success({
    message: 'Success!',
    description: res,
    duration: 2,
  })
};

export const error = () => {
  return notification.error({
    message: 'Ooops',
    description: 'Something went wrong...',
    duration: 2,
  });
};
