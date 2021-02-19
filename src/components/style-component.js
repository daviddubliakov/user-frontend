import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  headerMenu: {
    display: 'flex',
    padding: '0 70px !important',

    '& li': {
      padding: '5px 20px !important',
      margin: '0 !important',
      height: '100% !important',

      '&:hover': {
        backgroundColor: '#1890ff !important',
      }
    },
  }
});

export default useStyles;
